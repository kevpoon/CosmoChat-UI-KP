import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const BarChartComponent = ({ xAxisData, seriesData, chartWidth, chartHeight }) => {
    const sessionDates = ["2024-09-01", xAxisData];
    const sessionChatLengths = [5, seriesData];
    console.log(sessionDates)
    console.log(sessionChatLengths)
    return (
        // <BarChart
        //     xAxis={{ scaleType: "band", data: sessionDates }}
        //     series={{ data: sessionChatLengths }}
        //     width={chartWidth}
        //     height={chartHeight}
        // />
    <BarChart
        xAxis={[{ scaleType: 'band', data: sessionDates }]}
        series={[{ data: sessionChatLengths }]}
        width={500}
        height={250}
    />
    );


}


export default BarChartComponent;
