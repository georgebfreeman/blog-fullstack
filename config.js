import {createClient} from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase =
    createClient(
        'https://bkpybdqjxmrgxwaqmxqe.supabase.co',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJrcHliZHFqeG1yZ3h3YXFteHFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA0MjU5MTgsImV4cCI6MjAyNjAwMTkxOH0.1kLMTU1ZYusSamYBWHqs--GDYU-NGeYrX7qy4bNLTZU')

export default supabase;
