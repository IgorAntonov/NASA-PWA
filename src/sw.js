/* eslint-disable no-restricted-globals */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */

if (workbox) {
  console.log('WORKBOX EXISTS')
  workbox.precaching.precacheAndRoute(self.__precacheManifest || [])
} else {
  console.log('NOOOO')
  console.log("Workbox didn't load")
}
