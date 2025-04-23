
import MainLayout from '@/components/layout/MainLayout';
import QuickStats from '@/components/dashboard/QuickStats';
import InventorySummary from '@/components/dashboard/InventorySummary';
import RecentActivity from '@/components/dashboard/RecentActivity';
import BlockchainStatus from '@/components/dashboard/BlockchainStatus';
import { sampleCategories, sampleLocations, sampleParts, sampleActivities } from '@/lib/data';

const Index = () => {
  const lowStockParts = sampleParts.filter(part => part.quantity <= part.minQuantity);
  
  return (
    <MainLayout title="Dashboard">
      <div className="space-y-8">
        <QuickStats
          totalParts={sampleParts.length}
          categories={sampleCategories.length}
          locations={sampleLocations.length}
          lowStock={lowStockParts.length}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          <BlockchainStatus />
          <RecentActivity activities={sampleActivities} />
        </div>

        <InventorySummary parts={sampleParts} />
      </div>
    </MainLayout>
  );
};

export default Index;
