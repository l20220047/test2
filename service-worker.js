const cacheName = 'story-maker-cache-v1';
const filesToCache = [
    '/',
    '/index.html',
    '/style.css',
    '/app.js',
];

// Instalace SW
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheName).then((cache) => {
            return cache.addAll(filesToCache);
        })
    );
});

// Aktivace SW
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames
                    .filter((name) => name !== cacheName)
                    .map((name) => caches.delete(name))
            );
        })
    );
});

// Fetch event
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
