         self.addEventListener("install", event => {
    console.log("service worker installed");
});
self.addEventListener("fetch", event => {
    event.respondWidth(fetch(event.request));
});
