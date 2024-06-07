import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://bitipnjlvwkemswzqejl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJpdGlwbmpsdndrZW1zd3pxZWpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcwMzcwMTgsImV4cCI6MjAzMjYxMzAxOH0.ECXYqhPG1NOFCkr6eeLSRO_znhPYNVWTvcPvgO20Uc8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
