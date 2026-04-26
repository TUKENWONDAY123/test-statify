// ⚠️ SECURITY WARNING: Do NOT upload this file to GitHub!
// Add 'config.js' to your .gitignore file to keep your keys private.

const CONFIG = {
    // TMDB API Configuration
    TMDB_API_KEY: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZWVlMjBhYjQ2MDA5YTk2ZmJlY2JjODhhNzM2NGUwZCIsIm5iZiI6MTc3NTIyMTA5Mi4yMjEsInN1YiI6IjY5Y2ZiOTY0ZmEzN2ZiYTgwNGE2NDJhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sQbJ_iiW2reGGtTbd6N7M6JNSptBawDAk-UHgmRU2z4',
    TMDB_BASE: 'https://api.themoviedb.org/3',
    IMG_BASE: 'https://image.tmdb.org/t/p',
    
  // Embed Sources
  SOURCES: [
    { name: 'Server 1', type: 'path', base: 'https://vidking.net/embed' },
    { name: 'Server 2', type: 'path', base: 'https://vidsrc.me/embed' },
    { name: 'Server 3', type: 'path', base: 'https://vidlink.pro' },
    { name: 'Server 4', type: 'segment', base: 'https://vidsrc.cc/embed' },
  ],
    
    // Supabase Configuration
    SUPABASE_URL: 'https://ucpkihzsjobnvemxgtpa.supabase.co',
    SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjcGtpaHpzam9ibnZlbXhndHBhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY5NTQzMDYsImV4cCI6MjA5MjUzMDMwNn0.oTXvedRapCyz5XYdk5nWS3LFZjKyK0E-4n0HP_Hfsq0'
};

// Make config globally available
window.APP_CONFIG = CONFIG;
