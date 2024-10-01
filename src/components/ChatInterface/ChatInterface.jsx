import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BarChartComponent from "../ActivityDashboard/BarChartComponent";

const ChatInterface = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [socket, setSocket] = useState(null);
    const [number, setNumber] = useState(null);



    const sendMessage = async () => {
        console.log("Sending message");
        console.log(`API Key: ${process.env.REACT_APP_API_KEY}`);  // Only for debugging

        if (input.trim()) {
            const userMessage = { text: input, sender: 'user' };
            setMessages((prevMessages) => [...prevMessages, userMessage]);

            // Call OpenAI API
            try {
                const response = await axios.post('https://api.openai.com/v1/chat/completions', {
                    model: 'gpt-3.5-turbo', // or the model you want to use
                    messages: [{ role: 'user', content: input }],
                }, {
                    headers: {
                        'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`, // Replace with your OpenAI API key
                        'Content-Type': 'application/json',
                    },
                });

                const aiMessage = {
                    text: response.data.choices[0].message.content,
                    sender: 'ai',
                };
                setMessages((prevMessages) => [...prevMessages, aiMessage]);
            } catch (error) {
                console.error('Error calling OpenAI API:', error);
            }

            setInput('');
        }
    };

    return (
        <div>
            <div>
                {messages.map((msg, index) => (
                    <div key={index} className={msg.sender === 'user' ? 'outgoing' : 'incoming'}>
                        {msg.text}
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
            <br></br>
            <br></br>
            This shows your current message usage including both your requests and our AI's replies.
            <BarChartComponent xAxisData="2024-10-01" chartWidth={100} chartHeight={500} seriesData={messages.length}>

            </BarChartComponent>

        </div>
    );
};

export default ChatInterface;