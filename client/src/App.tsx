// SRQ Wash — App Router
// All routes preserve existing srqwash.com slugs for SEO

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Reviews from "./pages/Reviews";
import FAQsPage from "./pages/FAQs";
import Contact from "./pages/Contact";
import ServiceAreas from "./pages/ServiceAreas";
import ServicePage from "./pages/ServicePage";
import ServiceAreaPage from "./pages/ServiceAreaPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";

function Router() {
  return (
    <Switch>
      {/* Home — supports both / and /home slug */}
      <Route path="/" component={Home} />
      <Route path="/home" component={Home} />

      {/* Core pages — preserving existing slugs */}
      <Route path="/about" component={About} />
      <Route path="/reviews-page" component={Reviews} />
      <Route path="/faqs" component={FAQsPage} />
      <Route path="/contact-us" component={Contact} />

      {/* Service pages */}
      <Route path="/roof-cleaning">
        {() => <ServicePage serviceId="roof-cleaning" />}
      </Route>
      <Route path="/house-washing">
        {() => <ServicePage serviceId="house-washing" />}
      </Route>
      <Route path="/driveway-cleaning">
        {() => <ServicePage serviceId="driveway-cleaning" />}
      </Route>
      <Route path="/pool-cage-cleaning">
        {() => <ServicePage serviceId="pool-cage-cleaning" />}
      </Route>
      <Route path="/paver-sealing">
        {() => <ServicePage serviceId="paver-sealing" />}
      </Route>

      {/* Service area pages */}
      <Route path="/service-areas" component={ServiceAreas} />
      <Route path="/service-area/lakewood-ranch">
        {() => <ServiceAreaPage areaId="lakewood-ranch" />}
      </Route>
      <Route path="/service-area/sarasota">
        {() => <ServiceAreaPage areaId="sarasota" />}
      </Route>
      <Route path="/service-area/venice">
        {() => <ServiceAreaPage areaId="venice" />}
      </Route>
      <Route path="/service-area/bradenton">
        {() => <ServiceAreaPage areaId="bradenton" />}
      </Route>

      {/* Legal pages — preserving existing slugs */}
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-of-service" component={TermsOfService} />

      {/* 404 */}
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
