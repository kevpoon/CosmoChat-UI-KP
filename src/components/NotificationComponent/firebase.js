// Import necessary Firebase modules
import { initializeApp } from 'firebase/app';
import { getMessaging, onMessage, getToken } from 'firebase/messaging';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCOZHemFV-GHy8l_2SOCFiAN1aYe8qVlHc",
    authDomain: "cosmochat-ui-e23ab.firebaseapp.com",
    projectId: "cosmochat-ui-e23ab",
    storageBucket: "cosmochat-ui-e23ab.appspot.com",
    messagingSenderId: "901196094111",
    appId: "1:901196094111:web:59faf953e2065142eae0aa",
    measurementId: "G-KMTSVGC89P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Messaging
const messaging = getMessaging(app);

// Function to request notification permissions and get token
function requestNotifications() {
    Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
            console.log('Notification permission granted.');

            // Get the token
            // getToken(messaging, { vapidKey: 'your-vapid-key-here' }) // You need to replace 'your-vapid-key-here' with your actual VAPID key from Firebase console
            //     .then((token) => {
            //         console.log('FCM Token:', token);
            //         // You can send this token to your server here
            //     })
            //     .catch((error) => {
            //         console.error('Unable to get token', error);
            //     });
        } else {
            console.error('Unable to get permission to notify.');
        }
    });
}

// Listen for incoming messages
onMessage(messaging, (payload) => {
    console.log('Message received. ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.icon,
    };

    // Display the notification
    new Notification(notificationTitle, notificationOptions);
});

// Export messaging and the requestNotifications function for use elsewhere
export { messaging, requestNotifications };
