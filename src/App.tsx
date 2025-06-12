
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MgrUniversity from "./pages/MgrUniversity";
import DsuUniversity from "./pages/DsuUniversity";
import BiherUniversity from "./pages/BiherUniversity";
import ScsvmvUniversity from "./pages/ScsvmvUniversity";
import SaveethaUniversity from "./pages/SaveethaUniversity";
import TakshashilaUniversity from "./pages/TakshashilaUniversity";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/mgr-university" element={<MgrUniversity />} />
          <Route path="/dsu-university" element={<DsuUniversity />} />
          <Route path="/biher-university" element={<BiherUniversity />} />
          <Route path="/scsvmv-university" element={<ScsvmvUniversity />} />
          <Route path="/saveetha-university" element={<SaveethaUniversity />} />
          <Route path="/takshashila-university" element={<TakshashilaUniversity />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
