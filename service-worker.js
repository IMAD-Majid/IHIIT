self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('IHIIT').then(cache => {
      return cache.addAll([
        '/',
        '/*',
        '/gifs/*',
        '/svg icons/*'
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
