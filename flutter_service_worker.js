'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "a59ec646a069c6788b7cbe738d06db00",
"index.html": "d0da7f1511f1ba2cd724fe91f781d0c5",
"/": "d0da7f1511f1ba2cd724fe91f781d0c5",
"main.dart.js": "d2387156f1c4ec784559d20f46985c57",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "b480e282fa21530d722f4a9a4de8e37b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "4908c1bd868d2b0a6af33ca418a4ba08",
"assets/AssetManifest.json": "dac8b8def2ec0e79e859ecafccfccef6",
"assets/NOTICES": "64375af08e69aa1dac21f2a0916f5fdd",
"assets/FontManifest.json": "26a52bc57e68a42fe610c3b9b55106d8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "5c7f7d1c7d452890d88b8dbe54a6e03e",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/assets/images/ilustration.png": "7fda689d5f9a6edabf595e5b56e852f8",
"assets/assets/icons/play-store_logo.svg": "f293f49bf1422f2448a4b92bd8a53ed1",
"assets/assets/icons/gmail.svg": "892acbf0231e93a9587fec160a286d46",
"assets/assets/icons/taura_express_logo.png": "c99dc60a2b4bf990b06964142f82d4ab",
"assets/assets/icons/github.svg": "51b55f90205fe1f9d1a53b4b378a5bcf",
"assets/assets/icons/e_service_logo.png": "c366db8c0b3ef517dc4ee410071f3d73",
"assets/assets/icons/instagram.svg": "fd83b5a6ba30fa90230cf689c7a0693a",
"assets/assets/icons/taura_trans_logistic_logo.png": "1b73c322763a73402d75922ff9c354d2",
"assets/assets/icons/telegram.svg": "b0178d04477cdc09a45fd388f83754c9",
"assets/assets/icons/app-store_logo.svg": "3a025d7572a39adba3fe9454456a66d3",
"assets/assets/icons/chrome_logo.svg": "cd2917682eff713d443dd84abaaa2c5c",
"assets/assets/icons/kara_balta_logo.png": "add672fb84ba585fb34c7aa7a82468bf",
"assets/assets/icons/jalal_abad_logo.jpg": "2b18f5e918d6c658145c30adf887b8cd",
"assets/assets/icons/bat_bat_logo.png": "0cf881b41558e328a0be8eb89da75759",
"assets/assets/icons/opop_logo.webp": "8ea15508e751438618bd7a8f0b3a337b",
"assets/assets/icons/osh_logo.png": "749c2c59c5848cf1ffc22e67b8eb4b6a",
"assets/assets/icons/ak_emgek_logo.png": "342a034a65beb44f49e30e2dc3fc1857",
"assets/assets/icons/manas_logis_logo.png": "0daa1627a07224701fb70d68388c5135",
"assets/assets/icons/logo.svg": "3f5772cef7314e893d50ac0960089384",
"assets/assets/icons/sapat_cargo_logo.png": "fbb830466d2923dc4f1bd883a8ba2c90",
"assets/assets/icons/willex_cargo_logo.png": "6e0465553355b8d48c559b3c158cc1dd",
"assets/assets/icons/menu.svg": "60764f5ea1ef6e1614641b5976de9952",
"assets/assets/font/SF-Pro-Display-Semibold.ttf": "962956e157e4687b7c79d1dafb2b9fb0",
"assets/assets/font/SF-Pro-Display-Medium.ttf": "8296fbc23d1d42f2954c7af6698cf579",
"assets/assets/font/SF-Pro-Display-Heavy.ttf": "2e744d77c0b04dd70c766ab78d5e93cf",
"assets/assets/font/SF-Pro-Display-RegularItalic.ttf": "99cbc761e18e04ddbaecfe91b3be1f90",
"assets/assets/font/SF-Pro-Display-Regular.ttf": "d704bcd64b0f4fa155e6bd7debacc6c4",
"assets/assets/font/SF-Pro-Display-Light.ttf": "fdd4f443a00654b709cbba595cf6cecd",
"assets/assets/font/SF-Pro-Display-Bold.ttf": "4e99e4e132b0bd1ccd4e27596b15df8f",
"assets/assets/font/SF-Pro-Display-Thin.ttf": "ac89cd77c5ab08dbdce4f6ac4ffe4535",
"assets/assets/font/SF-Pro-Display-SemiboldItalic.ttf": "b6818655c11bf5907535a7f00cd06d43",
"assets/assets/font/SF-Pro-Display-ThinItalic.ttf": "cfd312e98ebda7ccc08f2babff9e9666",
"assets/assets/font/SF-Pro-Display-BoldItalic.ttf": "592b8c5f855e9fc5af4e7726fd57ee3d",
"assets/assets/font/SF-Pro-Display-Black.ttf": "53fdc56168da335fad728db05d069061",
"assets/assets/font/SF-Pro-Display-BlackItalic.ttf": "be3c2fb15f99ecd6dbd6091337f14bfb",
"assets/assets/font/SF-Pro-Display-MediumItalic.ttf": "383f656011d41a20bfe4432f6ebf694c",
"assets/assets/font/SF-Pro-Display-HeavyItalic.ttf": "b9de28f3ff6c825b39e86f8214d8217b",
"assets/assets/font/SF-Pro-Display-LightItalic.ttf": "f73efa79c759d4def3650f78f29635d1",
"assets/assets/font/SF-Pro-Display-UltralightItalic.ttf": "48e79022841c5aa7bfd2f2cd8272ae3a",
"assets/assets/font/SF-Pro-Display-Ultralight.ttf": "1610ab29232e22048184828a9546bb22",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
