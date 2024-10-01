// ActivityDashboard.js
import React from 'react';
import { Bar } from 'react-chartjs-2';

const ActivityDashboard = () => {
    // Sample data for the chart
    const data = {
        labels: ['User A', 'User B', 'User C', 'User D'], // X-axis labels
        datasets: [
            {
                label: 'Activity Level', // Label for the dataset
                data: [12, 19, 3, 5], // Sample data points
                backgroundColor: 'rgba(75, 192, 192, 0.6)', // Bar color
                borderColor: 'rgba(75, 192, 192, 1)', // Border color
                borderWidth: 1, // Border width
            },
        ],
    };

    // Chart options (optional)
    const options = {
        scales: {
            y: {
                beginAtZero: true, // Start Y-axis at zero
            },
        },
    };

    return (
        <div>
            <h2>User Activity Dashboard</h2>
            <Bar data={data} options={options} /> {/* Render the Bar chart */}
        </div>
    );
};

export default ActivityDashboard;