import {createClient} from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase =
    createClient(
        'https://qmkptqetmpncashmxfmf.supabase.co',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFta3B0cWV0bXBuY2FzaG14Zm1mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc4MDU1MDQsImV4cCI6MjA0MzM4MTUwNH0.RKDt9870W_T_ZHsix2u5hMLklscjpS9zMVf0feVa_bU')

export default supabase;

