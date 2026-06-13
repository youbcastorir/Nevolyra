// Nevolyra – Service Worker
// Cache-first strategy for static assets, network-first for API/dynamic

const CACHE_NAME = 'nevolyra-v1.0.0';
const STATIC_CACHE = 'nevolyra-static-v1';
const DYNAMIC_CACHE = 'nevolyra-dynamic-v1';

const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/style.css',
  '/app.js',
  '/translations.js',
  '/services.js',
  '/blog.js',
  '/manifest.json',
  'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,800;1,400&family=Inter:wght@400;500;600;700&family=Noto+Naskh+Arabic:wght@400;600;700&display=swap'
];

// ── Install ──────────────────────────────────────────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => {
        console.log('[SW] Caching static assets');
        return cache.addAll(STATIC_ASSETS.map(url => {
          return new Request(url, { cache: 'reload' });
        })).catch(err => {
          console.warn('[SW] Some assets failed to cache:', err);
        });
      })
      .then(() => self.skipWaiting())
  );
});

// ── Activate ─────────────────────────────────────────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(name => name !== STATIC_CACHE && name !== DYNAMIC_CACHE)
          .map(name => {
            console.log('[SW] Deleting old cache:', name);
            return caches.delete(name);
          })
      );
    }).then(() => self.clients.claim())
  );
});

// ── Fetch ─────────────────────────────────────────────────────
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // Skip chrome-extension and non-http(s)
  if (!url.protocol.startsWith('http')) return;

  // Strategy: Cache First for static assets
  if (isStaticAsset(url)) {
    event.respondWith(cacheFirst(request));
    return;
  }

  // Strategy: Network First for HTML/navigation
  if (request.mode === 'navigate' || request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(networkFirst(request));
    return;
  }

  // Strategy: Stale While Revalidate for Google Fonts
  if (url.hostname.includes('fonts.google') || url.hostname.includes('fonts.gstatic')) {
    event.respondWith(staleWhileRevalidate(request));
    return;
  }

  // Default: Network with cache fallback
  event.respondWith(networkFirst(request));
});

// ── Strategies ───────────────────────────────────────────────
async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(STATIC_CACHE);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    return new Response('Offline – ressource non disponible', { status: 503 });
  }
}

async function networkFirst(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    const cached = await caches.match(request);
    if (cached) return cached;
    // Return offline page for navigation requests
    if (request.mode === 'navigate') {
      const offlinePage = await caches.match('/index.html');
      if (offlinePage) return offlinePage;
    }
    return new Response(offlineHTML(), {
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
      status: 503
    });
  }
}

async function staleWhileRevalidate(request) {
  const cache = await caches.open(DYNAMIC_CACHE);
  const cached = await cache.match(request);
  const networkPromise = fetch(request).then(response => {
    if (response.ok) cache.put(request, response.clone());
    return response;
  }).catch(() => cached);
  return cached || networkPromise;
}

// ── Helpers ───────────────────────────────────────────────────
function isStaticAsset(url) {
  return (
    url.pathname.endsWith('.css') ||
    url.pathname.endsWith('.js') ||
    url.pathname.endsWith('.woff2') ||
    url.pathname.endsWith('.woff') ||
    url.pathname.endsWith('.png') ||
    url.pathname.endsWith('.jpg') ||
    url.pathname.endsWith('.svg') ||
    url.pathname.endsWith('.ico') ||
    url.pathname.endsWith('.json')
  );
}

function offlineHTML() {
  return `<!DOCTYPE html>
<html lang="fr" dir="ltr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Nevolyra – Hors ligne</title>
<style>
  body { font-family: sans-serif; text-align: center; padding: 4rem 2rem; background: #1A1A2E; color: white; }
  h1 { font-size: 2rem; margin-bottom: 1rem; color: #C9A84C; }
  p { color: rgba(255,255,255,0.7); margin-bottom: 1rem; }
  a { color: #25D366; font-weight: bold; }
</style>
</head>
<body>
<h1>Nevolyra</h1>
<p>Vous êtes hors ligne. Veuillez vérifier votre connexion internet.</p>
<p>📱 WhatsApp: <a href="https://wa.me/212602321305">+212602321305</a></p>
<p>✉️ Email: <a href="mailto:salatrir@gmail.com">salatrir@gmail.com</a></p>
</body>
</html>`;
}

// ── Background Sync (for contact form) ───────────────────────
self.addEventListener('sync', event => {
  if (event.tag === 'contact-form-sync') {
    event.waitUntil(syncContactForm());
  }
});

async function syncContactForm() {
  // Handle queued form submissions when back online
  console.log('[SW] Syncing contact form data');
}

// ── Push Notifications ────────────────────────────────────────
self.addEventListener('push', event => {
  if (!event.data) return;
  const data = event.data.json();
  event.waitUntil(
    self.registration.showNotification(data.title || 'Nevolyra', {
      body: data.body || 'Nouveau message de Nevolyra',
      icon: '/assets/icon-192.png',
      badge: '/assets/icon-72.png',
      tag: 'nevolyra-notification',
      data: { url: data.url || '/' }
    })
  );
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data.url || '/')
  );
});
