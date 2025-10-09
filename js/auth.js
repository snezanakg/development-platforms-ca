import { supabase } from './supabaseClient.js'

// Check login state
export async function checkLogin(required = false) {
  const {
    data: { session },
  } = await supabase.auth.getSession()

  const user = session?.user ?? null

  // Redirect to login if user is required but not logged in
  if (required && !user) {
    alert('You must be logged in to access this page.')
    window.location.href = 'login.html'
  }

  return user
}

// Logout function
export async function logout() {
  await supabase.auth.signOut()
  window.location.href = 'index.html'
}
