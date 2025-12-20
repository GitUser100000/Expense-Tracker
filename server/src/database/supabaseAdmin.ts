import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceKey) {
  throw new Error("Missing Supabase environment variables");
}

export const supabaseAdmin = createClient(
  supabaseUrl,
  serviceKey
);

export async function verifyToken(token: string) {
  const { data, error } = await supabaseAdmin.auth.getUser(token);
  if (error) return null;
  return data.user; 

}