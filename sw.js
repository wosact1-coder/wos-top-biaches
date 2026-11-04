// Minimal service worker: makes the app installable. No cache: every open loads the latest version
// from the network, so an update on GitHub Pages is seen right away and nothing stale is kept.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (e) => {
  if (e.request.mode !== 'navigate') return;
  e.respondWith(fetch(e.request));
});
