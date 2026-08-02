// ⚠️ SECURITY WARNING: Do NOT upload this file to GitHub!
// Add 'config.js' to your .gitignore file to keep your keys private.

const CONFIG = {
    // TMDB API Configuration
    TMDB_API_KEY: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZWVlMjBhYjQ2MDA5YTk2ZmJlY2JjODhhNzM2NGUwZCIsIm5iZiI6MTc3NTIyMTA5Mi4yMjEsInN1YiI6IjY5Y2ZiOTY0ZmEzN2ZiYTgwNGE2NDJhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sQbJ_iiW2reGGtTbd6N7M6JNSptBawDAk-UHgmRU2z4',
    TMDB_BASE: 'https://api.themoviedb.org/3',
    IMG_BASE: 'https://image.tmdb.org/t/p',

    // Embed Sources
    SOURCES: [
        { name: 'Main Server', type: 'path', base: 'https://vidfast.vc' },
        { name: 'Server 2', type: 'path', base: 'https://vidphantom.com' },
        { name: 'Server 3', type: 'path', base: 'https://vidlux.online/embed' },
        { name: 'Server 4', type: 'path', base: 'https://indraembed.netlify.app' },
    ],
};

// Make config globally available
window.APP_CONFIG = CONFIG;
