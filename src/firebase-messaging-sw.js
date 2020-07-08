// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
  apiKey: "AIzaSyBZLPLpEaDqHmmXjAe0GSxt49k02QUj0Bc",
  authDomain: "angular-pwa-platzi-5cda0.firebaseapp.com",
  databaseURL: "https://angular-pwa-platzi-5cda0.firebaseio.com",
  projectId: "angular-pwa-platzi-5cda0",
  storageBucket: "angular-pwa-platzi-5cda0.appspot.com",
  messagingSenderId: "868687174093",
  appId: "1:868687174093:web:9be05cf042e8e301bb8c84"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();