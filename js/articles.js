import { supabase } from './supabaseClient.js'

// Fetch all articles
export async function getArticles() {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) throw error
  return data
}

// Add a new article
export async function createArticle(article) {
  const { error } = await supabase.from('articles').insert(article)
  if (error) throw error
  return true
}
