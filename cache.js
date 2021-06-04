// memasukkan file file yang akan dimasukkan ke dalam cacche
const filesToCache = [
    '3x4.jpg',
    'biodata.txt',
    'cache.js',
    'index.html',
    'profil.html',
    'sw.js',
    'manifest.json',
  ];
  
  // memberi nama cache dengan pages-cache-v1
  const staticCacheName = 'pages-cache-v1';
  
  // menginstall service worker
  self.addEventListener('install', event => {
    console.log('Attempting to install service worker and cache static assets');
    event.waitUntil(
      caches.open(staticCacheName)
      .then(cache => {
        return cache.addAll(filesToCache);
      })
    );
  });