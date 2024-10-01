import logo from './logo.svg';
import './App.css';

import React, {useEffect, useState} from 'react';
import LandingPage from './components/LandingPage/LandingPageComponent'; // Adjust the path as needed
import ChatInterface from './components/ChatInterface/ChatInterface'; // This will be created in Step 2
import ChatSession from "./components/ChatSession/ChatSessionComponent";
// import ActivityDashboard from "./components/ActivityDashboard/ActivityDashboard";
import { messaging, requestNotifications } from './components/NotificationComponent/firebase';
import {onMessage} from "firebase/messaging";
import NotificationComponent from "./components/NotificationComponent/NotificationComponent"; // Adjust the path as

const App = () => {
  const [isChatActive, setIsChatActive] = useState(false);

  const startChat = () => {
    setIsChatActive(true);
  };

    // useEffect(() => {
    //     // Request permission and handle messaging token
    //     requestNotifications();
    //
    //     // Listen for incoming messages
    //     const unsubscribeOnMessage = onMessage(messaging, (payload) => {
    //         console.log('Message received. ', payload);
    //         const notificationTitle = payload.notification.title;
    //         const notificationOptions = {
    //             body: payload.notification.body,
    //             icon: payload.notification.icon,
    //         };
    //
    //         // Display the notification
    //         new Notification(notificationTitle, notificationOptions);
    //     });
    //
    //     // Clean up listener when the component unmounts
    //     return () => {
    //         unsubscribeOnMessage();
    //     };
    // }, []);


    return (
      <div>
        <h1>Welcome to CosmoChat-UI</h1>

        Please enter a message below to chat with your personal AI Assistant!
        {!isChatActive ? (
            <LandingPage onStartChat={startChat} />
        ) : (
            <ChatInterface /> // This will be your chat component
        )}

        <ChatSession></ChatSession>
          <NotificationComponent></NotificationComponent>
          {/*<ActivityDashboard></ActivityDashboard>*/}
      </div>
  );
};

export default App;
