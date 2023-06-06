import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.VUE_SUPABASE_URL;

const supabaseAnonKey = import.meta.env.VUE_SUPABASE_ANON_KEY;
console.log(supabaseUrl);
console.log(supabaseAnonKey);

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
