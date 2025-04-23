
import MainLayout from '@/components/layout/MainLayout';
import QuickStats from '@/components/dashboard/QuickStats';
import InventorySummary from '@/components/dashboard/InventorySummary';
import RecentActivity from '@/components/dashboard/RecentActivity';
import BlockchainStatus from '@/components/dashboard/BlockchainStatus';
import { sampleCategories, sampleLocations, sampleParts, sampleActivities } from '@/lib/data';

const Index = () => {
  const lowStockParts = sampleParts.filter(part => part.quantity <= part.minQuantity);
  
  // Transform parts data into category counts for the pie chart
  const categoryCounts = sampleParts.reduce((acc, part) => {
    acc[part.category] = (acc[part.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Format data for the pie chart
  const categoriesData = Object.keys(categoryCounts).map(category => ({
    name: category,
    value: categoryCounts[category]
  }));
  
  return (
    <MainLayout title="Dashboard">
      <div className="space-y-8">
        <QuickStats
          totalParts={sampleParts.length}
          totalCategories={sampleCategories.length}
          totalLocations={sampleLocations.length}
          lowStockItems={lowStockParts.length}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          <BlockchainStatus />
          <RecentActivity activities={sampleActivities} />
        </div>

        <InventorySummary categoriesData={categoriesData} />
      </div>
    </MainLayout>
  );
};

export default Index;
