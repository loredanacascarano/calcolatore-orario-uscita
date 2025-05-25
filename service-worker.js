
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('orario-uscita-cache').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './style.css',
        './app.js',
        './manifest.json',
        './images/bianconiglio_felice.png',
        './images/bianconiglio_triste.png'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
