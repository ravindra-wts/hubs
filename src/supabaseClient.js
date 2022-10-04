import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANNON_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);
