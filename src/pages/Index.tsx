
import { useState, useEffect } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import QuickStats from '@/components/dashboard/QuickStats';
import InventorySummary from '@/components/dashboard/InventorySummary';
import RecentActivity from '@/components/dashboard/RecentActivity';
import { sampleParts, sampleCategories, sampleLocations, sampleActivities } from '@/lib/data';

const Index = () => {
  const [categorySummary, setCategorySummary] = useState<Array<{ name: string; value: number }>>([]);

  useEffect(() => {
    // Calculate category distribution
    const categoryCount: Record<string, number> = {};
    
    sampleParts.forEach(part => {
      if (categoryCount[part.category]) {
        categoryCount[part.category] += part.quantity;
      } else {
        categoryCount[part.category] = part.quantity;
      }
    });
    
    const formattedData = Object.entries(categoryCount).map(([name, value]) => ({
      name,
      value,
    }));
    
    setCategorySummary(formattedData);
  }, []);
  
  // Calculate low stock items
  const lowStockItems = sampleParts.filter(part => part.quantity < part.minQuantity).length;

  return (
    <MainLayout title="Dashboard">
      <div className="space-y-8">
        <QuickStats 
          totalParts={sampleParts.length}
          totalCategories={sampleCategories.length}
          totalLocations={sampleLocations.length}
          lowStockItems={lowStockItems}
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <InventorySummary categoriesData={categorySummary} />
          <RecentActivity activities={sampleActivities} />
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
