/**
 * Supabase Configuration
 * Initialize Supabase client for database operations
 */

import { createClient } from '@supabase/supabase-js'

// Get Supabase credentials from environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Validate that credentials are provided
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Supabase credentials not found!')
  console.error('Please add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to .env file')
}

// Create and export Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default supabase
