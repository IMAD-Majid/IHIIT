self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('I-HIIT').then(cache => {
      return cache.addAll([
        '/',
        '/style.css',
        '/main.js'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
