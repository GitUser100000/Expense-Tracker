import { supabase } from "@/lib/supabaseClient"

export async function createNewUser(email: string, password: string) {
  const { data, error }  = await supabase.auth.signUp({
    email,
    password
  });

  return { data, error }
}

export async function signOutUser() {
  const { error } = await supabase.auth.signOut(); 
  return error; 
}

export async function retrieveUser() {
  const { data, error } = await supabase.auth.getUser(); 
  if (error) {
    throw error; 
  } return data.user; 
}

export async function retrieveAccessToken() {
  const { data, error } = await supabase.auth.getSession(); 
  if (error) {
    throw error; 
  } return data.session?.access_token; 
}

export async function updateEmail(newEmail: string) {
  const { data, error } = await supabase.auth.updateUser({
    email: newEmail
  });
  if (error) throw error; 
  return data; 
}

export async function updatePassword(newPassword: string) {
  const { data, error } = await supabase.auth.updateUser({
    password: newPassword
  });
  if (error) throw error; 
  return data; 
}

export async function triggerPasswordReset(email: string) {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: 'https://example.com/update-password',
  })
  if (error) throw error; 
  return data; 
}