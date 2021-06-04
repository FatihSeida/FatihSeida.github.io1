'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "cbcc46d6e16a7d52f4602b95cebcd76f",
"assets/assets/fonts/OpenSans-Bold.ttf": "1025a6e0fb0fa86f17f57cc82a6b9756",
"assets/assets/fonts/OpenSans-ExtraBold.ttf": "fb7e3a294cb07a54605a8bb27f0cd528",
"assets/assets/fonts/OpenSans-Regular.ttf": "3ed9575dcc488c3e3a5bd66620bdf5a4",
"assets/assets/fonts/OpenSans-SemiBold.ttf": "ba5cde21eeea0d57ab7efefc99596cce",
"assets/assets/fonts/Raffina.ttf": "cb1d7d10caef758906320ec63602a3f8",
"assets/assets/fonts/RobotoCondensed-Bold.ttf": "cbd4e701269338259ee0b39a0b768167",
"assets/assets/fonts/RobotoCondensed-BoldItalic.ttf": "c783051f11a8f369e8acc7adfcb5478d",
"assets/assets/fonts/RobotoCondensed-Italic.ttf": "d6fc5ec5403ec65bdaecfe44b7b84402",
"assets/assets/fonts/RobotoCondensed-Light.ttf": "885e5558c90864ddb72ad486f36470cc",
"assets/assets/fonts/RobotoCondensed-LightItalic.ttf": "f0177f3fd234ac8664509f19aef620fb",
"assets/assets/fonts/RobotoCondensed-Regular.ttf": "52ee8b598488b1ffbaa93e50cbd6a2f4",
"assets/assets/images/background.jpg": "efb3ca1e2c8f5226dbec770ae275ca86",
"assets/assets/images/githubsearch/githubindex.jpeg": "b166ed90ea1b756157b55e5a89ec23c9",
"assets/assets/images/githubsearch/githublazy.jpeg": "1e7fc1613b7141e3310730b74b9fc3d2",
"assets/assets/images/komisains/komisainsbuku.jpeg": "0d5ae70d3bf1d0ef49033fb29b47f1f6",
"assets/assets/images/komisains/komisainsdashboard.jpeg": "8781eb15a970b79d9ba718a1f459fe8f",
"assets/assets/images/komisains/komisainsinfo.jpeg": "570c4165ff0e8da73165ce7a7df8373b",
"assets/assets/images/komisains/komisainsprofile.jpeg": "24ecaf36566183bf11e101ef5076f0ca",
"assets/assets/images/komisainsUI/bukusaku.png": "e6caf35152eb88740cee9b9e75a97c24",
"assets/assets/images/komisainsUI/dashboard.png": "1fca5857233214e607906f2a9c189227",
"assets/assets/images/komisainsUI/detailberita.png": "4f8a56f43b6c61d3123372aac60e79a0",
"assets/assets/images/komisainsUI/feed.png": "d1af8022920b85d3a66df8a9ed251b99",
"assets/assets/images/komisainsUI/infotraining.png": "4b0b439253c5054aceafb6128989738e",
"assets/assets/images/komisainsUI/profileapp.png": "4735b627a3731638bad176b8a49546d9",
"assets/assets/images/komisainsUI/signup.png": "6a74b2b5e06449f85fcf8cb507a73a5b",
"assets/assets/images/komisainsUI/splashscreen.png": "98dd316123bb86a8162371e87d59ab3a",
"assets/assets/images/komisainsUI/welcomescreen.png": "cd2ecc2672fd3ccfb2e40ede22647857",
"assets/assets/images/logex/checkharga.png": "2f651755285fcfc2a2762f5d5aea0a99",
"assets/assets/images/logex/editProfile.png": "a47144b8ba8839f2eac1e5c874e8f429",
"assets/assets/images/logex/Home.png": "b6895209f55e9c9f382400894f947549",
"assets/assets/images/logex/MyOrder.png": "4d799a1d2246fb7b75e42d37884ccf4b",
"assets/assets/images/logex/Order.png": "e6ff4623f934c93067b802368041be2f",
"assets/assets/images/logex/Profile.png": "6d4f6d7ed55f23f3b0d3b3e798808052",
"assets/assets/images/profile.png": "9d6d84f9877abbd7d3c1db30b3ee0da9",
"assets/assets/images/restaurantapps/order.png": "853d47b3847663d5f435189d3be084f4",
"assets/assets/images/restaurantapps/order2.png": "25e462a5d7a73417a3186eda0b12d560",
"assets/assets/images/restaurantapps/table.png": "fb8367c1e89749ef09bfabee1669f464",
"assets/FontManifest.json": "b8ca2c23d5a823d78dbf4c868f8a21a6",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "030071eddffb3d05e2a3c0c80657bfc0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "32cf3b8c4b7172f0b249645ccb8e7b49",
"/": "32cf3b8c4b7172f0b249645ccb8e7b49",
"main.dart.js": "c3b9efe814ff0ea7a08babaebf2389c5",
"manifest.json": "ba3d8c033410d862e211171922197dcb",
"version.json": "388a60d166f68e6644640c7a0b2aaa90"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
