// SRQ Wash — App Router
// All routes preserve existing srqwash.com slugs for SEO
// + 40+ individual service area / neighborhood pages for local SEO authority

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
import NeighborhoodAreaPage from "./pages/NeighborhoodAreaPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";
import RoofCleaningLP from "./pages/RoofCleaningLP";

function Router() {
  return (
    <Switch>
      {/* Google Ads Landing Pages — no nav, conversion-only */}
      <Route path="/sarasota-roof-cleaning-lp" component={RoofCleaningLP} />

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

      {/* Service area index */}
      <Route path="/service-areas" component={ServiceAreas} />

      {/* City-level service area pages */}
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

      {/* ── LAKEWOOD RANCH NEIGHBORHOOD PAGES ── */}
      <Route path="/service-area/amber-creek">
        {() => <NeighborhoodAreaPage areaId="amber-creek" />}
      </Route>
      <Route path="/service-area/aurora">
        {() => <NeighborhoodAreaPage areaId="aurora" />}
      </Route>
      <Route path="/service-area/avalon-woods">
        {() => <NeighborhoodAreaPage areaId="avalon-woods" />}
      </Route>
      <Route path="/service-area/azario-esplanade">
        {() => <NeighborhoodAreaPage areaId="azario-esplanade" />}
      </Route>
      <Route path="/service-area/azario-townhomes">
        {() => <NeighborhoodAreaPage areaId="azario-townhomes" />}
      </Route>
      <Route path="/service-area/calusa-country-club">
        {() => <NeighborhoodAreaPage areaId="calusa-country-club" />}
      </Route>
      <Route path="/service-area/cresswind">
        {() => <NeighborhoodAreaPage areaId="cresswind" />}
      </Route>
      <Route path="/service-area/del-webb-catalina">
        {() => <NeighborhoodAreaPage areaId="del-webb-catalina" />}
      </Route>
      <Route path="/service-area/lorraine-lakes">
        {() => <NeighborhoodAreaPage areaId="lorraine-lakes" />}
      </Route>
      <Route path="/service-area/monarch-acres">
        {() => <NeighborhoodAreaPage areaId="monarch-acres" />}
      </Route>
      <Route path="/service-area/monterey">
        {() => <NeighborhoodAreaPage areaId="monterey" />}
      </Route>
      <Route path="/service-area/palm-grove">
        {() => <NeighborhoodAreaPage areaId="palm-grove" />}
      </Route>
      <Route path="/service-area/sapphire-point">
        {() => <NeighborhoodAreaPage areaId="sapphire-point" />}
      </Route>
      <Route path="/service-area/solera">
        {() => <NeighborhoodAreaPage areaId="solera" />}
      </Route>
      <Route path="/service-area/star-farms">
        {() => <NeighborhoodAreaPage areaId="star-farms" />}
      </Route>
      <Route path="/service-area/sweetwater">
        {() => <NeighborhoodAreaPage areaId="sweetwater" />}
      </Route>
      <Route path="/service-area/the-isles">
        {() => <NeighborhoodAreaPage areaId="the-isles" />}
      </Route>
      <Route path="/service-area/waterbury-park">
        {() => <NeighborhoodAreaPage areaId="waterbury-park" />}
      </Route>
      <Route path="/service-area/waterside-bungalow-walk">
        {() => <NeighborhoodAreaPage areaId="waterside-bungalow-walk" />}
      </Route>
      <Route path="/service-area/waterside-emerald-landing">
        {() => <NeighborhoodAreaPage areaId="waterside-emerald-landing" />}
      </Route>
      <Route path="/service-area/waterside-kingfisher-estates">
        {() => <NeighborhoodAreaPage areaId="waterside-kingfisher-estates" />}
      </Route>
      <Route path="/service-area/waterside-lakehouse-cove">
        {() => <NeighborhoodAreaPage areaId="waterside-lakehouse-cove" />}
      </Route>
      <Route path="/service-area/waterside-shellstone">
        {() => <NeighborhoodAreaPage areaId="waterside-shellstone" />}
      </Route>
      <Route path="/service-area/waterside-the-alcove">
        {() => <NeighborhoodAreaPage areaId="waterside-the-alcove" />}
      </Route>
      <Route path="/service-area/waterside-wild-blue">
        {() => <NeighborhoodAreaPage areaId="waterside-wild-blue" />}
      </Route>
      <Route path="/service-area/windward">
        {() => <NeighborhoodAreaPage areaId="windward" />}
      </Route>

      {/* ── SARASOTA SUBURB PAGES ── */}
      <Route path="/service-area/north-sarasota">
        {() => <NeighborhoodAreaPage areaId="north-sarasota" />}
      </Route>
      <Route path="/service-area/south-sarasota">
        {() => <NeighborhoodAreaPage areaId="south-sarasota" />}
      </Route>
      <Route path="/service-area/siesta-key">
        {() => <NeighborhoodAreaPage areaId="siesta-key" />}
      </Route>
      <Route path="/service-area/palmer-ranch">
        {() => <NeighborhoodAreaPage areaId="palmer-ranch" />}
      </Route>
      <Route path="/service-area/osprey">
        {() => <NeighborhoodAreaPage areaId="osprey" />}
      </Route>
      <Route path="/service-area/nokomis">
        {() => <NeighborhoodAreaPage areaId="nokomis" />}
      </Route>
      <Route path="/service-area/englewood">
        {() => <NeighborhoodAreaPage areaId="englewood" />}
      </Route>
      <Route path="/service-area/north-port">
        {() => <NeighborhoodAreaPage areaId="north-port" />}
      </Route>

      {/* ── BRADENTON SUBURB PAGES ── */}
      <Route path="/service-area/west-bradenton">
        {() => <NeighborhoodAreaPage areaId="west-bradenton" />}
      </Route>
      <Route path="/service-area/east-bradenton">
        {() => <NeighborhoodAreaPage areaId="east-bradenton" />}
      </Route>
      <Route path="/service-area/anna-maria-island">
        {() => <NeighborhoodAreaPage areaId="anna-maria-island" />}
      </Route>
      <Route path="/service-area/parrish">
        {() => <NeighborhoodAreaPage areaId="parrish" />}
      </Route>
      <Route path="/service-area/ellenton">
        {() => <NeighborhoodAreaPage areaId="ellenton" />}
      </Route>

      {/* ── VENICE SUBURB PAGES ── */}
      <Route path="/service-area/venice-island">
        {() => <NeighborhoodAreaPage areaId="venice-island" />}
      </Route>
      <Route path="/service-area/south-venice">
        {() => <NeighborhoodAreaPage areaId="south-venice" />}
      </Route>
      <Route path="/service-area/wellen-park">
        {() => <NeighborhoodAreaPage areaId="wellen-park" />}
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
