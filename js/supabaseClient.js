import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const SUPABASE_URL = 'https://bncbcsqohzxnajkqigad.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJuY2Jjc3FvaHp4bmFqa3FpZ2FkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg3MDAwMjcsImV4cCI6MjA3NDI3NjAyN30.VSUuRdL69MPtsE0R9C4gUBWq2LWDQsFGPjR6DwDfc18'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
