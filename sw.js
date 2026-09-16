const CACHE = 'checklist-v1';
const ARCHIVOS = [
 './',
 './index.html',
 './manifest.json',
 './icon-192.png',
 './icon-512.png'
];
self.addEventListener('install', function (e) {
 e.waitUntil(
   caches.open(CACHE).then(function (cache) {
     return cache.addAll(ARCHIVOS);
   })
 );
 self.skipWaiting();
});
self.addEventListener('activate', function (e) {
 e.waitUntil(clients.claim());
});
self.addEventListener('fetch', function (e) {
 e.respondWith(
   caches.match(e.request).then(function (resp) {
     return resp || fetch(e.request);
   })
 );
});
