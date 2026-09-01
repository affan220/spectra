/* SPECTRA / Orbital Lab Console: app entry for the navy-white-orange RF operations console. */
import { Toaster } from "@/components/ui/sonner";
import { AnalysisSessionProvider } from "./contexts/AnalysisSessionContext";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

function Router() {
  return <Switch><Route path="/" component={Home} /><Route path="/404" component={NotFound} /><Route component={NotFound} /></Switch>;
}

export default function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="dark"><AnalysisSessionProvider><TooltipProvider><Toaster /><Router /></TooltipProvider></AnalysisSessionProvider></ThemeProvider></ErrorBoundary>;
}
