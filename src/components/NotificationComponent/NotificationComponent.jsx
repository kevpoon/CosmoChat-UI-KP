import React from 'react';
import { messaging } from './firebase'; // Ensure correct path
import { onMessage, getToken } from 'firebase/messaging';

const NotificationComponent = () => {
    // Handler for the button click to request permissions and retrieve token
    const handleRequestPermissions = () => {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                console.log('Notification permission granted.');

                // Get the token
                getToken(messaging, { vapidKey: 'your-vapid-key' })  // Replace 'your-vapid-key' with your actual VAPID key from Firebase project settings
                    .then((token) => {
                        console.log('FCM Token:', token);  // Print the FCM token to console
                    })
                    .catch((error) => {
                        console.error('Unable to get the token', error);
                    });

            } else {
                console.error('Permission not granted for Notifications');
            }
        });
    };

    // Set up message listener
    React.useEffect(() => {
        const unsubscribe = onMessage(messaging, (payload) => {
            console.log('Message received. ', payload);
            const notificationTitle = payload.notification.title;
            const notificationOptions = {
                body: payload.notification.body,
                icon: payload.notification.icon
            };

            // Display the notification
            new Notification(notificationTitle, notificationOptions);
        });

        // Clean up the listener when the component unmounts
        return () => unsubscribe();
    }, []);

    return (
        <div>
            <button onClick={handleRequestPermissions}>Enable Notifications</button>
            {/* Other component content */}
        </div>
    );
};

export default NotificationComponent;
