/* SPECTRA / Orbital Lab Console: restrained navy-white-orange aerospace instrumentation UI. */
import { useEffect, useMemo, useState } from "react";
import {
  Activity,
  AlertTriangle,
  BarChart3,
  Bell,
  BrainCircuit,
  Check,
  ChevronRight,
  CircleHelp,
  Cpu,
  Database,
  FileBarChart,
  FileText,
  Gauge,
  Hexagon,
  LayoutDashboard,
  Menu,
  Moon,
  Network,
  PanelLeftClose,
  PanelLeftOpen,
  Play,
  Plus,
  Radio,
  Search,
  Settings,
  ShieldCheck,
  SlidersHorizontal,
  Sun,
  UploadCloud,
  Waves,
  X,
  Zap,
} from "lucide-react";
import { toast } from "sonner";

const logoUrl = "/manus-storage/spectra-logo_ea1ed624.png";
const spectrumUrl = "/manus-storage/spectra-spectrum-field_da3b5df0.png";
const signalUrl = "/manus-storage/spectra-signal-analysis_0a40032b.png";

const navGroups = [
  {
    label: "CONSOLE",
    items: [
      { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
      { id: "analysis", label: "Signal Analysis", icon: Radio },
      { id: "workflow", label: "Workflow", icon: Network },
      { id: "signals", label: "Signals", icon: Waves },
    ],
  },
  {
    label: "INTELLIGENCE",
    items: [
      { id: "features", label: "Features", icon: BarChart3 },
      { id: "classification", label: "AI Classification", icon: BrainCircuit },
      { id: "reports", label: "Reports", icon: FileBarChart },
      { id: "learning", label: "Model Learning", icon: Cpu },
    ],
  },
];

const workflowSteps = [
  ["01", "INPUT SIGNALS", "Upload or select an RF capture"],
  ["02", "VALIDATE FILE", "Confirm format and integrity"],
  ["03", "PREPROCESS SIGNAL", "Clean and normalize samples"],
  ["04", "DETECT SIGNALS", "Locate active signal regions"],
  ["05", "EXTRACT FEATURES", "Build the feature vector"],
  ["06", "AI + DSP CLASSIFICATION", "Combine model outputs"],
  ["07", "CONFIDENCE & RE-ANALYSIS", "Review certainty threshold"],
  ["08", "OUTPUT & LEARNING", "Generate report and feedback"],
];

const recentRows = [
  { id: "AN-24091", signal: "SIG-7742", freq: "2.418 GHz", classification: "Wi-Fi 2.4", confidence: "98.2%", status: "Complete" },
  { id: "AN-24090", signal: "SIG-7739", freq: "915.0 MHz", classification: "ISM / LoRa", confidence: "94.8%", status: "Complete" },
  { id: "AN-24089", signal: "SIG-7736", freq: "5.805 GHz", classification: "Unknown", confidence: "42.1%", status: "Review" },
  { id: "AN-24088", signal: "SIG-7730", freq: "433.9 MHz", classification: "Remote control", confidence: "89.6%", status: "Complete" },
];

const chartBars = [34, 42, 38, 62, 51, 70, 58, 74, 68, 82, 77, 91, 86, 72, 84, 96, 88, 100, 94, 79, 87, 92, 83, 98];

function StatusPill({ status }: { status: string }) {
  const review = status === "Review";
  return <span className={`status-pill ${review ? "status-review" : "status-complete"}`}><span />{status}</span>;
}

function SectionLabel({ children, inverse = false }: { children: React.ReactNode; inverse?: boolean }) {
  return <div className={`section-label ${inverse ? "inverse" : ""}`}>{children}</div>;
}

function Sparkline() {
  return (
    <div className="sparkline" aria-label="Signal activity trend">
      <svg viewBox="0 0 600 180" preserveAspectRatio="none" role="img">
        <defs><linearGradient id="signalFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#f58220" stopOpacity=".22" /><stop offset="1" stopColor="#f58220" stopOpacity="0" /></linearGradient></defs>
        <path d="M0 143 C35 134 48 137 67 119 S97 133 112 110 S142 83 160 108 S190 123 208 89 S239 98 257 72 S288 91 304 65 S331 84 350 49 S381 74 399 57 S432 67 447 38 S477 60 493 29 S530 50 550 20 S577 36 600 14 V180 H0 Z" fill="url(#signalFill)" />
        <path d="M0 143 C35 134 48 137 67 119 S97 133 112 110 S142 83 160 108 S190 123 208 89 S239 98 257 72 S288 91 304 65 S331 84 350 49 S381 74 399 57 S432 67 447 38 S477 60 493 29 S530 50 550 20 S577 36 600 14" fill="none" stroke="#f58220" strokeWidth="3" vectorEffect="non-scaling-stroke" />
      </svg>
      <div className="chart-axis"><span>00:00</span><span>06:00</span><span>12:00</span><span>18:00</span><span>NOW</span></div>
    </div>
  );
}

function KPI({ value, label, note, accent = false }: { value: string; label: string; note: string; accent?: boolean }) {
  return <div className={`kpi ${accent ? "kpi-accent" : ""}`}><div className="kpi-value">{value}</div><div className="kpi-label">{label}</div><div className="kpi-note">{note}</div></div>;
}

function Dashboard({ onNavigate }: { onNavigate: (id: string) => void }) {
  return <div className="page-stack page-enter">
    <div className="page-heading split-heading">
      <div><SectionLabel>OPERATIONS / 01</SectionLabel><h1>SPECTRA ANALYSIS CONSOLE</h1><p>Monitor RF signal processing, classification and system performance.</p></div>
      <div className="heading-actions"><button className="button button-primary" onClick={() => onNavigate("analysis")}><Plus size={16} /> NEW SIGNAL ANALYSIS</button><button className="button button-secondary" onClick={() => onNavigate("workflow")}>VIEW WORKFLOW <ChevronRight size={16} /></button></div>
    </div>
    <div className="kpi-row"><KPI value="1,284" label="Signals Analyzed" note="+12.4% this period" /><KPI value="24" label="Active Signals" note="6 under observation" accent /><KPI value="1,118" label="Classified" note="87.1% of total" /><KPI value="166" label="Unknown" note="12.9% require review" /><KPI value="91.6%" label="Average Confidence" note="Across 30 days" /></div>
    <section className="panel activity-panel"><div className="panel-header"><div><SectionLabel>SIGNAL ACTIVITY</SectionLabel><h2>Processing volume</h2></div><div className="legend"><span className="legend-line" /> Signals processed <span className="muted">· Last 24 hours</span></div></div><Sparkline /></section>
    <section className="panel table-panel"><div className="panel-header"><div><SectionLabel>RECENT ANALYSES</SectionLabel><h2>Latest signal intelligence</h2></div><button className="text-button" onClick={() => onNavigate("reports")}>VIEW ALL <ChevronRight size={15} /></button></div><div className="table-wrap"><table><thead><tr><th>ANALYSIS ID</th><th>SIGNAL</th><th>FREQUENCY</th><th>CLASSIFICATION</th><th>CONFIDENCE</th><th>STATUS</th><th /></tr></thead><tbody>{recentRows.map((row) => <tr key={row.id}><td className="mono strong">{row.id}</td><td className="mono">{row.signal}</td><td className="mono">{row.freq}</td><td>{row.classification}</td><td className={row.status === "Review" ? "orange-text mono strong" : "mono strong"}>{row.confidence}</td><td><StatusPill status={row.status} /></td><td><button className="icon-button" aria-label={`Open ${row.id}`} onClick={() => onNavigate("analysis")}><ChevronRight size={16} /></button></td></tr>)}</tbody></table></div></section>
    <section className="system-overview"><div><SectionLabel>SYSTEM OVERVIEW</SectionLabel><h2>Engine status</h2></div><div className="engine-row">{[{ name: "DSP Engine", desc: "Signal conditioning", uptime: "99.98%", Icon: Activity }, { name: "AI / ML Engine", desc: "Classification service", uptime: "99.94%", Icon: BrainCircuit }, { name: "Detection Engine", desc: "Energy detection", uptime: "100%", Icon: Radio }, { name: "Report Engine", desc: "Output generation", uptime: "99.99%", Icon: FileText }].map(({ name, desc, uptime, Icon }) => <div className="engine" key={name}><div className="engine-icon"><Icon size={18} /></div><div className="engine-copy"><strong>{name}</strong><span>{desc}</span></div><div className="engine-uptime"><i />{uptime}</div></div>)}</div></section>
  </div>;
}

function WorkflowRail({ activeStep, setActiveStep }: { activeStep: number; setActiveStep: (step: number) => void }) {
  return <aside className="workflow-rail"><SectionLabel>WORKFLOW PROGRESS</SectionLabel><div className="stepper">{workflowSteps.map(([num, label, desc], index) => { const complete = index < activeStep; const active = index === activeStep; return <button key={num} className={`step ${active ? "step-active" : ""} ${complete ? "step-complete" : ""}`} onClick={() => (index <= activeStep ? setActiveStep(index) : toast("Complete the current step before advancing."))}><span className="step-marker">{complete ? <Check size={13} /> : num}</span><span><strong>{label}</strong><small>{desc}</small></span></button>; })}</div><div className="rail-note"><ShieldCheck size={16} /><span>Demo mode enabled<br /><b>Workflow actions are simulated</b></span></div></aside>;
}

function Analysis({ activeStep, setActiveStep }: { activeStep: number; setActiveStep: (step: number) => void }) {
  const current = workflowSteps[activeStep];
  return <div className="page-stack page-enter"><div className="page-heading"><SectionLabel>ANALYSIS / WORKSPACE</SectionLabel><h1>Signal analysis</h1><p>Follow the eight-step processing chain from input capture to explainable output.</p></div><div className="analysis-layout"><WorkflowRail activeStep={activeStep} setActiveStep={setActiveStep} /><main className="analysis-main"><div className="analysis-hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(6,20,38,.97) 0%, rgba(6,20,38,.76) 58%, rgba(6,20,38,.24) 100%), url(${signalUrl})` }}><div><SectionLabel inverse>ACTIVE WORKSPACE / STEP {current[0]}</SectionLabel><h2>{current[1]}</h2><p>{current[2]}. Instrument state is ready for review.</p></div><div className="analysis-counter"><span>STEP</span><b>{current[0]}</b><small>OF 08</small></div></div><div className="workspace-panel"><div className="workspace-top"><div><SectionLabel>INPUT CAPTURE</SectionLabel><h2>Choose a signal source</h2></div><span className="live-badge"><i /> LIVE DEMO</span></div><div className="source-grid"><button className="source-card source-selected"><UploadCloud size={22} /><strong>Upload RF capture</strong><span>IQ data, WAV, CSV or SigMF</span><em>READY</em></button><button className="source-card" onClick={() => toast("Live receiver integration is planned for the next build.")}><Radio size={22} /><strong>Live receiver</strong><span>Connect an RF front-end</span><em>PLANNED</em></button></div><div className="dropzone"><UploadCloud size={22} /><div><strong>Drop a capture file here</strong><span>or browse from your workstation · Max 250 MB</span></div><button className="button button-secondary" onClick={() => toast("File picker demo: select a capture in the connected build.")}>BROWSE FILES</button></div><div className="workspace-footer"><span className="mono">SUPPORTED: .WAV · .CSV · .SIGMF · .IQ</span><button className="button button-primary" onClick={() => setActiveStep(Math.min(activeStep + 1, 7))}>{activeStep === 7 ? "GENERATE OUTPUT" : "CONTINUE TO STEP " + String(activeStep + 2).padStart(2, "0")} <ChevronRight size={16} /></button></div></div></main><aside className="signal-context"><SectionLabel>SIGNAL CONTEXT</SectionLabel><div className="context-signal"><div className="signal-ring"><Radio size={18} /></div><div><strong>SIG-7742</strong><span>Capture selected</span></div></div><div className="context-list"><div><span>Center frequency</span><b className="mono">2.418 GHz</b></div><div><span>Sample rate</span><b className="mono">20 MS/s</b></div><div><span>Duration</span><b className="mono">00:04:32</b></div><div><span>Bandwidth</span><b className="mono">2.4 MHz</b></div></div><div className="context-visual"><img src={spectrumUrl} alt="Abstract spectrum visualization" /><div><span>SPECTRUM PREVIEW</span><b>−42.8 dBFS</b></div></div><button className="context-link" onClick={() => toast("Signal details are available after input validation.")}>VIEW SIGNAL DETAILS <ChevronRight size={14} /></button></aside></div></div>;
}

function Reports() {
  return <div className="page-stack page-enter"><div className="page-heading split-heading"><div><SectionLabel>INTELLIGENCE / 07</SectionLabel><h1>Reports</h1><p>Evidence-ready summaries of signal processing and model decisions.</p></div><button className="button button-primary" onClick={() => toast("Report generation queued in demo mode.")}><FileText size={16} /> GENERATE REPORT</button></div><section className="panel reports-panel"><div className="report-feature"><div className="report-icon"><FileBarChart size={22} /></div><div><SectionLabel>LATEST REPORT</SectionLabel><h2>AN-24091 · Wi-Fi 2.4 GHz classification</h2><p>Complete analysis record with extracted features, model confidence, and processing provenance.</p></div><StatusPill status="Complete" /><button className="icon-button"><ChevronRight size={18} /></button></div><div className="report-list">{["AN-24090 · ISM / LoRa", "AN-24089 · Unknown signal review", "AN-24088 · Remote control classification"].map((item, i) => <div className="report-row" key={item}><div className="report-file"><FileText size={17} /><span>{item}</span></div><span className="mono muted">SEP {String(1 - i).padStart(2, "0")}, 2026</span><span className="mono">PDF / JSON</span><button className="text-button">OPEN <ChevronRight size={14} /></button></div>)}</div></section></div>;
}

function Learning() {
  return <div className="page-stack page-enter"><div className="page-heading"><SectionLabel>INTELLIGENCE / 08</SectionLabel><h1>Model learning</h1><p>Review the classification pipeline and prepare verified feedback for future training cycles.</p></div><div className="learning-grid"><section className="panel model-card"><div className="model-head"><div className="engine-icon"><BrainCircuit size={20} /></div><div><SectionLabel>ACTIVE MODEL</SectionLabel><h2>SPECTRA-RF v2.4</h2></div><span className="live-badge"><i /> ONLINE</span></div><div className="model-metrics"><div><strong>94.8%</strong><span>Validation accuracy</span></div><div><strong>18</strong><span>Known classes</span></div><div><strong>2,406</strong><span>Training samples</span></div></div><div className="progress-line"><span style={{ width: "94.8%" }} /></div><div className="model-foot"><span>Last evaluation · 31 Aug 2026</span><button className="button button-secondary" onClick={() => toast("Model evaluation is available in the connected training environment.")}>VIEW EVALUATION</button></div></section><section className="panel learning-queue"><div className="panel-header"><div><SectionLabel>FEEDBACK QUEUE</SectionLabel><h2>Signals awaiting review</h2></div><span className="queue-count">06</span></div>{["SIG-7736 · 5.805 GHz", "SIG-7721 · 1.227 GHz", "SIG-7714 · 433.9 MHz"].map((x) => <div className="queue-row" key={x}><AlertTriangle size={16} /><span>{x}</span><button className="text-button" onClick={() => toast("Review workspace opened in demo mode.")}>REVIEW <ChevronRight size={14} /></button></div>)}</section></div></div>;
}

function SimplePage({ id }: { id: string }) {
  const names: Record<string, [string, string, React.ElementType]> = { signals: ["Signals", "Browse captured RF signals and their provenance.", Waves], features: ["Feature extraction", "Inspect spectral, temporal, and statistical descriptors.", SlidersHorizontal], classification: ["AI classification", "Compare AI and DSP outputs with explainable confidence.", BrainCircuit], settings: ["Settings", "Workspace preferences, analyst profile, and system configuration.", Settings], help: ["Help & guidance", "Reference the workflow, supported formats, and demo controls.", CircleHelp] };
  const [title, desc, Icon] = names[id] ?? names.help;
  return <div className="page-stack page-enter"><div className="page-heading"><SectionLabel>SPECTRA / REFERENCE</SectionLabel><h1>{title}</h1><p>{desc}</p></div><section className="panel empty-panel"><div className="empty-icon"><Icon size={25} /></div><h2>Workspace ready</h2><p>This module is wired into the SPECTRA navigation and will connect to the separate Supabase project as its data model is added.</p><button className="button button-primary" onClick={() => toast("Module action queued for the next implementation pass.")}>OPEN MODULE <ChevronRight size={16} /></button></section></div>;
}

export default function Home() {
  const [activePage, setActivePage] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileNav, setMobileNav] = useState(false);
  const [dark, setDark] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const page = useMemo(() => {
    if (activePage === "dashboard") return <Dashboard onNavigate={setActivePage} />;
    if (activePage === "analysis" || activePage === "workflow") return <Analysis activeStep={activeStep} setActiveStep={setActiveStep} />;
    if (activePage === "reports") return <Reports />;
    if (activePage === "learning") return <Learning />;
    return <SimplePage id={activePage} />;
  }, [activePage, activeStep]);
  useEffect(() => { document.documentElement.classList.toggle("dark", dark); }, [dark]);
  const navigate = (id: string) => { setActivePage(id); setMobileNav(false); };
  return <div className={`app-shell ${sidebarOpen ? "sidebar-expanded" : "sidebar-collapsed"}`}>
    <aside className={`sidebar ${mobileNav ? "mobile-open" : ""}`}><div className="sidebar-brand"><img src={logoUrl} alt="SPECTRA mark" /><div><strong>SPECTRA</strong><span>RF INTELLIGENCE</span></div><button className="mobile-close" onClick={() => setMobileNav(false)}><X size={18} /></button></div><div className="sidebar-nav">{navGroups.map((group) => <div className="nav-group" key={group.label}><span className="nav-group-label">{group.label}</span>{group.items.map(({ id, label, icon: Icon }) => <button key={id} className={`nav-item ${activePage === id ? "active" : ""}`} onClick={() => navigate(id)}><Icon size={17} /><span>{label}</span>{activePage === id && <i />}</button>)}</div>)}<div className="nav-divider" /><div className="nav-group"><span className="nav-group-label">SYSTEM</span><button className={`nav-item ${activePage === "settings" ? "active" : ""}`} onClick={() => navigate("settings")}><Settings size={17} /><span>Settings</span></button><button className={`nav-item ${activePage === "help" ? "active" : ""}`} onClick={() => navigate("help")}><CircleHelp size={17} /><span>Help</span></button></div></div><div className="sidebar-footer"><div className="status-light"><i /><span>SYSTEM STATUS</span><b>OPERATIONAL</b></div><div className="sidebar-version">SPECTRA // SIH PROTOTYPE <span>v0.8.4</span></div></div></aside>
    {mobileNav && <button className="mobile-scrim" aria-label="Close navigation" onClick={() => setMobileNav(false)} />}
    <div className="main-area"><header className="topbar"><div className="topbar-left"><button className="mobile-menu" onClick={() => setMobileNav(true)}><Menu size={20} /></button><button className="collapse-button" onClick={() => setSidebarOpen((value) => !value)} aria-label="Toggle sidebar">{sidebarOpen ? <PanelLeftClose size={18} /> : <PanelLeftOpen size={18} />}</button><div className="header-title"><strong>SPECTRA</strong><span>INTELLIGENT RF SIGNAL ANALYSIS &amp; CLASSIFICATION SYSTEM</span></div></div><div className="topbar-right"><div className="system-status"><i /> <span>SYSTEM STATUS</span><b>OPERATIONAL</b></div><button className="theme-button" aria-label="Toggle theme" onClick={() => setDark((value) => !value)}>{dark ? <Sun size={17} /> : <Moon size={17} />}</button><button className="notification-button" onClick={() => toast("No new system notifications.")}><Bell size={17} /><i /></button><div className="analyst"><span>AK</span><div><strong>Analyst Kumar</strong><small>RF OPERATIONS</small></div></div></div></header><main className="main-content">{page}</main></div>
  </div>;
}
