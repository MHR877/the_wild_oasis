import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = 'https://syqxrelspxtwafsrephd.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN5cXhyZWxzcHh0d2Fmc3JlcGhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAyOTg3MjYsImV4cCI6MjAwNTg3NDcyNn0.ok-niUUwCe_XYa8KWjzTdKo_r1dAROFq7wh6BAUGHzA"
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
