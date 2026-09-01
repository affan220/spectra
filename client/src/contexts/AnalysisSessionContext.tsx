/* SPECTRA / Orbital Lab Console: shared analysis session contract for every module and route. */
import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type SignalRegion = { id: string; frequency: string; bandwidth: string; power: string; snr: string; duration: string };
export type FeatureValue = { name: string; value: string; unit: string; quality: string };
export type AnalysisResult = { id: string; dbId?: string; signal: string; expected: string; predicted: string; dsp: string; confidence: number; probabilities: Record<string, number>; features: FeatureValue[]; region: SignalRegion; timestamp: string; feedback?: string; notes?: string };
export type FileMeta = { name: string; format: string; size: string; sampleRate: string; channels: string; duration: string; dataType: string; backend: boolean };
export type SessionStatus = "idle" | "input" | "validating" | "validated" | "preprocessing" | "detecting" | "features" | "dsp" | "ml" | "fusion" | "confidence" | "complete" | "error";
export type AnalysisSession = { analysisId?: string; file: FileMeta | null; result: AnalysisResult | null; status: SessionStatus; currentStep: number; selectedRegion: SignalRegion | null; analystReview: { feedback: string; notes: string } | null; report: { generated: boolean; data: string | null } };

type SessionContextValue = { session: AnalysisSession; history: AnalysisResult[]; setHistory: React.Dispatch<React.SetStateAction<AnalysisResult[]>>; updateSession: (patch: Partial<AnalysisSession>) => void; resetSession: () => void; };
const initialSession: AnalysisSession = { file: null, result: null, status: "idle", currentStep: 0, selectedRegion: null, analystReview: null, report: { generated: false, data: null } };
const SessionContext = createContext<SessionContextValue | null>(null);

export function AnalysisSessionProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<AnalysisSession>(() => { try { const saved = localStorage.getItem("spectra_session"); return saved ? { ...initialSession, ...JSON.parse(saved) } : initialSession; } catch { return initialSession; } });
  const [history, setHistory] = useState<AnalysisResult[]>(() => { try { return JSON.parse(localStorage.getItem("spectra_analyses") || "[]"); } catch { return []; } });
  useEffect(() => { localStorage.setItem("spectra_session", JSON.stringify(session)); }, [session]);
  useEffect(() => { localStorage.setItem("spectra_analyses", JSON.stringify(history.slice(0, 20))); }, [history]);
  const value = useMemo(() => ({ session, history, setHistory, updateSession: (patch: Partial<AnalysisSession>) => setSession((current) => ({ ...current, ...patch })), resetSession: () => setSession(initialSession) }), [session, history]);
  return <SessionContext.Provider value={value}>{children}</SessionContext.Provider>;
}
export function useAnalysisSession() { const value = useContext(SessionContext); if (!value) throw new Error("useAnalysisSession must be used inside AnalysisSessionProvider"); return value; }
