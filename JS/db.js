
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jdbgqzvirpdxdylndtct.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpkYmdxenZpcnBkeGR5bG5kdGN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA4OTM0NjgsImV4cCI6MjA1NjQ2OTQ2OH0.qJUj-7DFWicE5rHNTmHUdApfXV4Q9K_-Xsk-gsZq9w4'
const supabase = createClient(supabaseUrl, supabaseKey)