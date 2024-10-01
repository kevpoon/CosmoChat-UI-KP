import React, { useState, useEffect } from 'react';

// Function to simulate chat session management
const ChatSession = () => {
    const [isActive, setIsActive] = useState(false);
    const [currentSessionMessages, setSessionMessages] = useState(0);

    // Function to start a chat session
    const startChat = () => {
        setIsActive(true);
        console.log("Chat session started!");
    };

    // Function to end a chat session
    const endChat = () => {
        setIsActive(false);
        console.log("Chat session ended!");
    };

    useEffect(() => {
        // Simulate session termination after 5 minutes
        const timer = setTimeout(() => {
            if (isActive) {
                endChat();
            }
        }, 300000); // 5 minutes in milliseconds

        return () => clearTimeout(timer); // Cleanup timer on component unmount
    }, [isActive]);

    return (
        <div>
            <h2>Chat Session Management</h2>
            <button onClick={startChat} disabled={isActive}>Start Chat</button>
            <button onClick={endChat} disabled={!isActive}>End Chat</button>
            <p>{isActive ? "Chat is active!" : "No active chat session."}</p>
        </div>
    );
};

export default ChatSession;