
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Events from "./pages/Events";
import Artists from "./pages/Artists";
import Venues from "./pages/Venues";
import Tickets from "./pages/Tickets";
import Reviews from "./pages/Reviews";
import Feeds from "./pages/Feeds";
import MapPage from "./pages/MapPage";
import ApiKeys from "./pages/ApiKeys";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/events" element={<Events />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/venues" element={<Venues />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/feeds" element={<Feeds />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/api-keys" element={<ApiKeys />} />
          <Route path="/settings" element={<Settings />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
