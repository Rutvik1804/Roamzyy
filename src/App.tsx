import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import InternationalListing from "./pages/InternationalListing";
import IndiaListing from "./pages/IndiaListing";
import HoneymoonPage from "./pages/HoneymoonPage";
import ThemesPage from "./pages/ThemesPage";
import VisaPage from "./pages/VisaPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";
import DubaiPage from "./pages/DubaiPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/international" element={<InternationalListing />} />
          <Route path="/india" element={<IndiaListing />} />
          <Route path="/honeymoon" element={<HoneymoonPage />} />
          <Route path="/themes" element={<ThemesPage />} />
          <Route path="/visa" element={<VisaPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          
          {/* Individual Country Pages */}
          <Route path="/international/dubai" element={<DubaiPage />} />
          <Route path="/international/bali" element={<DubaiPage />} />
          <Route path="/international/thailand" element={<DubaiPage />} />
          <Route path="/international/vietnam" element={<DubaiPage />} />
          <Route path="/international/maldives" element={<DubaiPage />} />
          <Route path="/international/singapore" element={<DubaiPage />} />
          <Route path="/international/europe" element={<DubaiPage />} />
          <Route path="/international/malaysia" element={<DubaiPage />} />
          <Route path="/international/kazakhstan" element={<DubaiPage />} />
          <Route path="/international/bhutan" element={<DubaiPage />} />
          
          {/* India Destination Pages */}
          <Route path="/india/ladakh" element={<DubaiPage />} />
          <Route path="/india/kashmir" element={<DubaiPage />} />
          <Route path="/india/kerala" element={<DubaiPage />} />
          <Route path="/india/rajasthan" element={<DubaiPage />} />
          <Route path="/india/andaman" element={<DubaiPage />} />
          
          {/* Theme Pages */}
          <Route path="/themes/adventure" element={<DubaiPage />} />
          <Route path="/themes/relaxing" element={<DubaiPage />} />
          <Route path="/themes/high-energy" element={<DubaiPage />} />
          <Route path="/themes/stress-relief" element={<DubaiPage />} />
          <Route path="/themes/luxury" element={<DubaiPage />} />
          <Route path="/themes/romantic" element={<DubaiPage />} />
          <Route path="/themes/cultural" element={<DubaiPage />} />
          <Route path="/themes/wildlife" element={<DubaiPage />} />
          
          {/* Honeymoon Destination Pages */}
          <Route path="/honeymoon/maldives" element={<DubaiPage />} />
          <Route path="/honeymoon/bali" element={<DubaiPage />} />
          <Route path="/honeymoon/switzerland" element={<DubaiPage />} />
          <Route path="/honeymoon/kashmir" element={<DubaiPage />} />
          <Route path="/honeymoon/andaman" element={<DubaiPage />} />
          <Route path="/honeymoon/thailand" element={<DubaiPage />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
