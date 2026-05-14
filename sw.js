const cacheName = 'mtb-v2';
const files = ['./', './index.html', 'https://cdn.jsdelivr.net/npm/chart.js'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(cacheName).then(cache => cache.addAll(files)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});