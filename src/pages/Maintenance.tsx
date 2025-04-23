
import { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Plus, FilterX, Filter } from 'lucide-react';
import { MaintenanceRecord, sampleMaintenanceRecords } from '@/lib/data';
import MaintenanceCard from '@/components/maintenance/MaintenanceCard';
import MaintenanceForm from '@/components/maintenance/MaintenanceForm';
import { useToast } from '@/components/ui/use-toast';
import { useBlockchain } from '@/context/BlockchainContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Maintenance = () => {
  const [maintenanceRecords, setMaintenanceRecords] = useState<MaintenanceRecord[]>(sampleMaintenanceRecords);
  const [showAddRecordDialog, setShowAddRecordDialog] = useState(false);
  const [editingRecord, setEditingRecord] = useState<MaintenanceRecord | undefined>(undefined);
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [typeFilter, setTypeFilter] = useState<string>("all");
  
  const { toast } = useToast();
  const { addTransaction } = useBlockchain();

  const handleAddRecord = (newRecord: Partial<MaintenanceRecord>) => {
    const record: MaintenanceRecord = {
      id: `${maintenanceRecords.length + 1}`,
      partId: newRecord.partId || '',
      partName: newRecord.partName || '',
      maintenanceType: newRecord.maintenanceType as 'preventive' | 'corrective' | 'predictive',
      status: newRecord.status as 'scheduled' | 'in-progress' | 'completed' | 'cancelled',
      technician: newRecord.technician || '',
      startDate: newRecord.startDate || new Date().toISOString().split('T')[0],
      completionDate: newRecord.completionDate,
      details: newRecord.details || '',
      cost: newRecord.cost || 0,
      workOrderNumber: newRecord.workOrderNumber || '',
    };
    
    setMaintenanceRecords([...maintenanceRecords, record]);
    toast({
      title: "Maintenance Record Created",
      description: `Maintenance record for ${record.partName} has been created.`,
    });

    // Record transaction on blockchain
    addTransaction({
      id: `tx-${Date.now()}`,
      type: 'maintenance',
      partName: record.partName,
      user: record.technician,
      date: new Date().toISOString(),
      maintenanceDetails: {
        maintenanceType: record.maintenanceType,
        workOrderNumber: record.workOrderNumber,
        description: record.details,
        cost: record.cost
      }
    });
  };

  const handleEditRecord = (updatedRecord: Partial<MaintenanceRecord>) => {
    if (!editingRecord) return;
    
    const updatedRecords = maintenanceRecords.map((record) => 
      record.id === editingRecord.id ? { ...record, ...updatedRecord } : record
    );
    
    setMaintenanceRecords(updatedRecords);
    setEditingRecord(undefined);
    toast({
      title: "Maintenance Record Updated",
      description: `Record for ${updatedRecord.partName || editingRecord.partName} has been updated.`,
    });

    // Record transaction on blockchain
    addTransaction({
      id: `tx-${Date.now()}`,
      type: 'maintenance',
      partName: updatedRecord.partName || editingRecord.partName,
      user: updatedRecord.technician || editingRecord.technician,
      date: new Date().toISOString(),
      maintenanceDetails: {
        maintenanceType: (updatedRecord.maintenanceType || editingRecord.maintenanceType) as 'preventive' | 'corrective' | 'predictive',
        workOrderNumber: updatedRecord.workOrderNumber || editingRecord.workOrderNumber,
        description: `Updated: ${updatedRecord.details || editingRecord.details}`,
        cost: updatedRecord.cost || editingRecord.cost
      }
    });
  };

  const handleDeleteRecord = (recordId: string) => {
    const recordToDelete = maintenanceRecords.find(record => record.id === recordId);
    if (recordToDelete) {
      setMaintenanceRecords(maintenanceRecords.filter(record => record.id !== recordId));
      toast({
        title: "Maintenance Record Deleted",
        description: "The maintenance record has been removed.",
        variant: "destructive",
      });

      // Record transaction on blockchain
      addTransaction({
        id: `tx-${Date.now()}`,
        type: 'maintenance',
        partName: recordToDelete.partName,
        user: 'Current User',
        date: new Date().toISOString(),
        maintenanceDetails: {
          maintenanceType: recordToDelete.maintenanceType,
          workOrderNumber: recordToDelete.workOrderNumber,
          description: `Deleted maintenance record: ${recordToDelete.details}`,
          cost: 0
        }
      });
    }
  };

  const openEditDialog = (record: MaintenanceRecord) => {
    setEditingRecord(record);
  };
  
  const filterRecords = (records: MaintenanceRecord[]) => {
    return records.filter(record => {
      const matchesStatus = statusFilter === 'all' || record.status === statusFilter;
      const matchesType = typeFilter === 'all' || record.maintenanceType === typeFilter;
      return matchesStatus && matchesType;
    });
  };

  const filteredRecords = filterRecords(maintenanceRecords);
  
  const getStatusCounts = () => {
    const counts = maintenanceRecords.reduce((acc, record) => {
      acc[record.status] = (acc[record.status] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    return {
      scheduled: counts['scheduled'] || 0,
      inProgress: counts['in-progress'] || 0,
      completed: counts['completed'] || 0,
      cancelled: counts['cancelled'] || 0,
      all: maintenanceRecords.length
    };
  };
  
  const statusCounts = getStatusCounts();

  return (
    <MainLayout title="Maintenance Records">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <p className="text-muted-foreground">Track maintenance, repair, and operations with blockchain verification</p>
          <Button onClick={() => setShowAddRecordDialog(true)}>
            <Plus className="h-4 w-4 mr-2" /> New Maintenance Record
          </Button>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-between items-center mb-4">
            <TabsList>
              <TabsTrigger value="all">
                All ({statusCounts.all})
              </TabsTrigger>
              <TabsTrigger value="scheduled">
                Scheduled ({statusCounts.scheduled})
              </TabsTrigger>
              <TabsTrigger value="in-progress">
                In Progress ({statusCounts.inProgress})
              </TabsTrigger>
              <TabsTrigger value="completed">
                Completed ({statusCounts.completed})
              </TabsTrigger>
            </TabsList>
            
            <div className="flex gap-2">
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-[180px]">
                  <div className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    <span>
                      {typeFilter === 'all' ? 'All Types' : 
                        typeFilter.charAt(0).toUpperCase() + typeFilter.slice(1)}
                    </span>
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="preventive">Preventive</SelectItem>
                  <SelectItem value="corrective">Corrective</SelectItem>
                  <SelectItem value="predictive">Predictive</SelectItem>
                </SelectContent>
              </Select>
              
              {(statusFilter !== 'all' || typeFilter !== 'all') && (
                <Button variant="outline" onClick={() => {
                  setStatusFilter('all');
                  setTypeFilter('all');
                }}>
                  <FilterX className="h-4 w-4 mr-2" /> Clear Filters
                </Button>
              )}
            </div>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredRecords.map((record) => (
                <MaintenanceCard 
                  key={record.id} 
                  record={record}
                  onEdit={openEditDialog}
                  onDelete={handleDeleteRecord}
                />
              ))}
              {filteredRecords.length === 0 && (
                <div className="col-span-3 py-10 text-center">
                  <p className="text-muted-foreground">No maintenance records found matching your filters</p>
                </div>
              )}
            </div>
          </TabsContent>
          
          {['scheduled', 'in-progress', 'completed'].map((status) => (
            <TabsContent key={status} value={status} className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredRecords
                  .filter(record => record.status === status)
                  .map((record) => (
                    <MaintenanceCard 
                      key={record.id} 
                      record={record}
                      onEdit={openEditDialog}
                      onDelete={handleDeleteRecord}
                    />
                  ))}
                {filteredRecords.filter(record => record.status === status).length === 0 && (
                  <div className="col-span-3 py-10 text-center">
                    <p className="text-muted-foreground">No {status.replace('-', ' ')} maintenance records found matching your filters</p>
                  </div>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Add Record Dialog */}
        <MaintenanceForm
          open={showAddRecordDialog}
          onClose={() => setShowAddRecordDialog(false)}
          onSubmit={handleAddRecord}
        />

        {/* Edit Record Dialog */}
        {editingRecord && (
          <MaintenanceForm
            open={!!editingRecord}
            onClose={() => setEditingRecord(undefined)}
            onSubmit={handleEditRecord}
            initialData={editingRecord}
          />
        )}
      </div>
    </MainLayout>
  );
};

export default Maintenance;
