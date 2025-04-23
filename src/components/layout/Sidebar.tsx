
import { Link, useLocation } from 'react-router-dom';
import { 
  Package, 
  Home, 
  Tag, 
  MapPin, 
  Menu 
} from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Sidebar as SidebarComponent,
  SidebarContent,
  SidebarHeader,
  SidebarTrigger,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from '@/components/ui/sidebar';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { 
      title: 'Dashboard', 
      path: '/', 
      icon: Home 
    },
    { 
      title: 'Parts', 
      path: '/parts', 
      icon: Package 
    },
    { 
      title: 'Categories', 
      path: '/categories', 
      icon: Tag 
    },
    { 
      title: 'Locations', 
      path: '/locations', 
      icon: MapPin 
    },
  ];

  return (
    <SidebarComponent>
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <Package className="h-6 w-6" />
          <h2 className="text-xl font-bold">Parts-Eye</h2>
          <div className="ml-auto md:hidden">
            <SidebarTrigger>
              <Menu className="h-5 w-5" />
            </SidebarTrigger>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton asChild>
                    <Link 
                      to={item.path}
                      className={cn(
                        "flex items-center gap-3",
                        location.pathname === item.path ? "font-medium" : ""
                      )}
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </SidebarComponent>
  );
};

export default Sidebar;
