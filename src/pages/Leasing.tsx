
import { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { useBlockchain } from '@/context/BlockchainContext';
import { LeasingAgreement, sampleLeasingAgreements } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ScrollText, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const Leasing = () => {
  const [selectedAgreement, setSelectedAgreement] = useState<LeasingAgreement | null>(null);
  const { addTransaction } = useBlockchain();

  const getStatusBadgeColor = (status: LeasingAgreement['status']) => {
    switch (status) {
      case 'active':
        return 'bg-green-500';
      case 'pending':
        return 'bg-yellow-500';
      case 'completed':
        return 'bg-blue-500';
      case 'terminated':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusIcon = (status: LeasingAgreement['status']) => {
    switch (status) {
      case 'active':
        return CheckCircle;
      case 'pending':
        return Clock;
      case 'completed':
        return CheckCircle;
      case 'terminated':
        return AlertCircle;
      default:
        return ScrollText;
    }
  };

  const handleVerifyOnBlockchain = (agreement: LeasingAgreement) => {
    addTransaction({
      id: agreement.id,
      type: 'maintenance',
      partName: agreement.partName,
      user: agreement.lessor,
      date: new Date().toISOString(),
      maintenanceDetails: {
        maintenanceType: 'preventive',
        workOrderNumber: agreement.contractHash,
        description: `Leasing agreement between ${agreement.lessor} and ${agreement.lessee}`,
        cost: agreement.cost
      }
    });
  };

  return (
    <MainLayout title="Leasing Agreements">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <p className="text-muted-foreground">
            Manage and track aircraft parts leasing agreements with blockchain verification
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sampleLeasingAgreements.map((agreement) => (
            <Card 
              key={agreement.id}
              className="cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => setSelectedAgreement(agreement)}
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-base font-semibold">
                  {agreement.partName}
                </CardTitle>
                <Badge 
                  className={cn(
                    "px-2 py-1",
                    getStatusBadgeColor(agreement.status)
                  )}
                >
                  {agreement.status}
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Lessor: {agreement.lessor}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Lessee: {agreement.lessee}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Duration: {new Date(agreement.startDate).toLocaleDateString()} - {new Date(agreement.endDate).toLocaleDateString()}
                  </p>
                  <p className="text-sm font-semibold">
                    Cost: ${agreement.cost.toLocaleString()}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {selectedAgreement && (
        <Dialog open={!!selectedAgreement} onOpenChange={() => setSelectedAgreement(null)}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>Leasing Agreement Details</DialogTitle>
              <DialogDescription>
                Contract Hash: {selectedAgreement.contractHash}
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Part Information</h4>
                  <p className="text-sm">Name: {selectedAgreement.partName}</p>
                  <p className="text-sm">ID: {selectedAgreement.partId}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Agreement Status</h4>
                  <div className="flex items-center gap-2">
                    {/* Fix: Create the Icon component from the function's return value */}
                    {(() => {
                      const IconComponent = getStatusIcon(selectedAgreement.status);
                      return <IconComponent className="h-5 w-5" />;
                    })()}
                    <span className="capitalize">{selectedAgreement.status}</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Terms and Conditions</h4>
                <p className="text-sm whitespace-pre-wrap">{selectedAgreement.terms}</p>
              </div>

              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setSelectedAgreement(null)}>
                  Close
                </Button>
                <Button 
                  onClick={() => handleVerifyOnBlockchain(selectedAgreement)}
                >
                  Verify on Blockchain
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </MainLayout>
  );
};

export default Leasing;
