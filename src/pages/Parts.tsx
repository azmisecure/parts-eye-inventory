
import { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { Part, sampleParts } from '@/lib/data';
import PartCard from '@/components/parts/PartCard';
import PartForm from '@/components/parts/PartForm';
import { useToast } from '@/components/ui/use-toast';
import { useBlockchain } from '@/context/BlockchainContext';

const Parts = () => {
  const [parts, setParts] = useState<Part[]>(sampleParts);
  const [showAddPartDialog, setShowAddPartDialog] = useState(false);
  const [editingPart, setEditingPart] = useState<Part | undefined>(undefined);
  const { toast } = useToast();
  const { addTransaction } = useBlockchain();

  const handleAddPart = (newPart: Partial<Part>) => {
    const part = {
      id: `${parts.length + 1}`,
      name: newPart.name || '',
      sku: newPart.sku || '',
      category: newPart.category || '',
      location: newPart.location || '',
      quantity: newPart.quantity || 0,
      minQuantity: newPart.minQuantity || 0,
      price: newPart.price || 0,
      lastUpdated: newPart.lastUpdated || new Date().toISOString().split('T')[0],
      image: newPart.image || 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=800&q=80',
    };
    
    setParts([...parts, part]);
    toast({
      title: "Part Added",
      description: `${part.name} has been added to inventory.`,
    });

    // Record transaction on blockchain
    addTransaction({
      id: `tx-${Date.now()}`,
      type: 'add',
      partName: part.name,
      quantity: part.quantity,
      user: 'Current User',
      date: new Date().toISOString(),
    });
  };

  const handleEditPart = (updatedPart: Partial<Part>) => {
    if (!editingPart) return;
    
    const updatedParts = parts.map((part) => 
      part.id === editingPart.id ? { ...part, ...updatedPart } : part
    );
    
    setParts(updatedParts);
    setEditingPart(undefined);
    toast({
      title: "Part Updated",
      description: `${updatedPart.name} has been updated.`,
    });

    // Record transaction on blockchain
    addTransaction({
      id: `tx-${Date.now()}`,
      type: 'update',
      partName: updatedPart.name || editingPart.name,
      user: 'Current User',
      date: new Date().toISOString(),
    });
  };

  const handleDeletePart = (partId: string) => {
    const partToDelete = parts.find(part => part.id === partId);
    if (partToDelete) {
      setParts(parts.filter(part => part.id !== partId));
      toast({
        title: "Part Deleted",
        description: "The part has been removed from inventory.",
        variant: "destructive",
      });

      // Record transaction on blockchain
      addTransaction({
        id: `tx-${Date.now()}`,
        type: 'remove',
        partName: partToDelete.name,
        quantity: 1,
        user: 'Current User',
        date: new Date().toISOString(),
      });
    }
  };

  const openEditDialog = (part: Part) => {
    setEditingPart(part);
  };

  return (
    <MainLayout title="Parts Inventory">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <p className="text-muted-foreground">Manage your spare parts inventory</p>
          <Button onClick={() => setShowAddPartDialog(true)}>
            <Plus className="h-4 w-4 mr-2" /> Add Part
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {parts.map((part) => (
            <PartCard 
              key={part.id} 
              part={part}
              onEdit={openEditDialog}
              onDelete={handleDeletePart}
            />
          ))}
        </div>

        {/* Add Part Dialog */}
        <PartForm
          open={showAddPartDialog}
          onClose={() => setShowAddPartDialog(false)}
          onSubmit={handleAddPart}
        />

        {/* Edit Part Dialog */}
        {editingPart && (
          <PartForm
            open={!!editingPart}
            onClose={() => setEditingPart(undefined)}
            onSubmit={handleEditPart}
            initialData={editingPart}
          />
        )}
      </div>
    </MainLayout>
  );
};

export default Parts;
