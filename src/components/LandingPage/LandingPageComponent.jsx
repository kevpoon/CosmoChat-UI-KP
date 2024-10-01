import React from 'react';

const LandingPage = ({ onStartChat }) => {
    return (
        <div>
            <h1>Welcome to the Chat App! 👋</h1>
            <button onClick={onStartChat}>Start Chat 💬</button>
        </div>
    );
};

export default LandingPage;