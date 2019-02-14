import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

const FrequencyGraph = (props) => {
  const { userInput: data } = props.data;

  return (
    <ResponsiveContainer className="graph" width="90%" height={500}>
        <BarChart width={1500} height={100} data={data}
              margin={{top: 5, right: 30, left: 20, bottom: 5}}>
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="word" style={{display: "none"}}/>
          <YAxis scale="log" domain={['dataMin', 'dataMax']} allowDataOverflow/>
          <Tooltip/>
          <Bar dataKey="count" fill="#5A87A9" />
        </BarChart>
    </ResponsiveContainer>
  );
}

export default FrequencyGraph;
