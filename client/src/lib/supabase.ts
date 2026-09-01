/* SPECTRA / Orbital Lab Console: isolated Supabase client configuration for RF analysis data. */
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://gioupyuaczrzvcjcuedh.supabase.co";
const supabasePublishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || "sb_publishable_za7hyR76ChZ267mhJJcYQw_QenCc8hn";

export const supabase = createClient(supabaseUrl, supabasePublishableKey, {
  auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true },
});

export const supabaseProject = {
  id: "gioupyuaczrzvcjcuedh",
  url: supabaseUrl,
};
