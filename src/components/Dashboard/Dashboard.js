import React, { useEffect, useState } from 'react';
import './Dashboard.css'
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, LineChart, Scatter, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const [charts, setCharts] = useState([]);
    useEffect(() => {
        fetch('charts.json')
            .then(res => res.json())
            .then(data => setCharts(data));
    }, []);


    return (
        <div className='charts'>

            <div className="line-chart pt-10">
                <p className='text-xl font-semibold text-blue-500'> Month wise Sell</p>
                <LineChart width={400} height={400} data={charts}>
                    <Line type='monotone' dataKey='sell'></Line>
                    <XAxis dataKey='month'></XAxis>
                    <Tooltip></Tooltip>
                    <YAxis dataKey='sell'></YAxis>
                </LineChart>
                <p className='text-xl font-semibold'>Line Chart</p>
            </div>


            <div className="bar-Chart pt-10">
                <p className='text-xl font-semibold text-blue-500'> Printed VS Sell</p>
                <BarChart width={400} height={400} data={charts} margin={{ top: 5, right: 30, left: 20, bottom: 5, }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey='printed' ></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                    <Bar dataKey="sell" fill="#8884d8" />
                    <Bar dataKey="month" fill="#82ca9d" />
                </BarChart>
                <p className='text-xl font-semibold'>Bar Chart</p>
            </div>

            <div className="composed-chart">
                <p className='text-xl font-semibold text-blue-500'>Investment VS Revenue </p>
                <ComposedChart width={400} height={400} data={charts} margin={{ top: 20, right: 20, left: 20, bottom: 20, }}>
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="sell" scale="band" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="revenue" fill="#8884d8" stroke="#8884d8" />
                    <Bar dataKey="investment" barSize={20} fill="#413ea0" />
                    <Line type="monotone" dataKey="sell" stroke="#ff7300" />
                    <Scatter dataKey="printed" fill="red" />
                </ComposedChart>
                <p className='text-xl font-semibold'>Composed Chart</p>
            </div>

            <div className="area-chart">
                <p className='text-xl font-semibold text-blue-500'> Month VS Investment</p>
                <AreaChart
                    width={500} height={400} data={charts} margin={{ top: 10, right: 30, left: 0, bottom: 0, }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="investment" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
                <p className='text-xl font-semibold'>Area Chart</p>
            </div>

        </div>
    );
};

export default Dashboard;