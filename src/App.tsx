import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Parts from "./pages/Parts";
import Categories from "./pages/Categories";
import Locations from "./pages/Locations";
import NotFound from "./pages/NotFound";
import { BlockchainProvider } from "./context/BlockchainContext";
import BlockchainExplorer from "./pages/BlockchainExplorer";
import Maintenance from "./pages/Maintenance";
import Leasing from "./pages/Leasing";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BlockchainProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/parts" element={<Parts />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/maintenance" element={<Maintenance />} />
            <Route path="/blockchain" element={<BlockchainExplorer />} />
            <Route path="/leasing" element={<Leasing />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </BlockchainProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
