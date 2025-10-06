import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const SUPABASE_URL = 'https://bncbcsqohzxnajkqigad.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJuY2Jjc3FvaHp4bmFqa3FpZ2FkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg1MzQ3NDgsImV4cCI6MjA0NDEwMDc0OH0.6wGcT6FzRCjS7S8fZbJqz2P7b9gCeHzlRPPwSCiXoyY'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
