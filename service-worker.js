const CACHE_VERSION = "2023-11-09 11:30 AM";
console.log("VERSION", CACHE_VERSION)

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/style.css',
        '/main.js',
        '/icon.png',
        '/manifest.json',
        '/service-worker.js',

        '/svg icons/favorite_white_24dp.svg',
        '/svg icons/play_circle_filled_white_24dp.svg',

        '/gifs/Bicycle Crunches.gif',
        '/gifs/Burpees.gif',
        '/gifs/Diamond Push-ups.gif',
        '/gifs/Explosive Push-ups.gif',
        '/gifs/High Knees.gif',
        '/gifs/Jump Squat.gif',
        '/gifs/Jumping Jacks.gif',
        '/gifs/Jumping Lunges.gif',
        '/gifs/Jumping Squats.gif',
        '/gifs/Leg Raises.gif',
        '/gifs/Mountain Climbers.gif',
        '/gifs/Plank Hold.gif',
        '/gifs/Plank Jacks.gif',
        '/gifs/Push-ups.gif',
        '/gifs/Russian Twists.gif',
        '/gifs/Shoulder Taps.gif',
        '/gifs/Side Plank.gif',
        '/gifs/Sit-ups.gif',
        '/gifs/Superman Plank.gif',
        '/gifs/Wall Sit.gif',
      ]);
    })
  );
});


self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_VERSION) {
            return caches.delete(cacheName);
          }
        })
      );
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
