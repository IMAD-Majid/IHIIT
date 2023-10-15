self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('IHIIT').then(cache => {
      return cache.addAll([
        '/',
        '/styles.css',
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
