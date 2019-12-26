const cacheName = 'product-hunt'

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll([
        '/material.min.css',
        '/material.min.js',
        '/index.html',
        '/static/js/bundle.js',
        '/static/js/main.chunk.js',
        '/favicon.ico',
        'static/js/0.chunk.js',
        'https://fonts.googleapis.com/icon?family=Material+Icons',
        '/'
      ])
    }).catch(e => console.log(e))
  )
})

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        return response
      }
      const fetchRequest = event.request.clone()
      return fetch(fetchRequest)
    })
  )
})