      if ("serviceWorker" in navigator) {
  if (navigator.serviceWorker.controller) {
    console.log("An active service worker found, no need to register");
  } else {
    // Register the service worker
    navigator.serviceWorker
      .register("https://monsoonmalabar.com/sona/serviceworker.js", {
        scope: "https://monsoonmalabar.com/sona/"
      })
      .then(function (reg) {
        console.log("Service worker has been registered for scope: " + reg.scope);
      });
  }
}


