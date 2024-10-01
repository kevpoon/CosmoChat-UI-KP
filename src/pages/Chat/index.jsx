const API_KEY = process.env["REACT_APP_OPENAI_API_KEY "];
const openai = new OpenAI({apiKey: API_KEY, dangerouslyAllowBrowser:true} );

import React from 'react';

const LandingPage = ({ onStartChat }) => {
    return (
        <div>
            <div class="container">
                <h1>Welcome to the Chat App! 👋</h1>
                <button onClick={onStartChat}>Start Chat 💬</button>
            </div>

        </div>
    );
};

export default LandingPage;