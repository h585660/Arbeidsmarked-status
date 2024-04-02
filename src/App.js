import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import ChartControls from './Components/keyCollection';

const App = () => {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState('');



  const handleSelectKey = (key) => {
    setInputValue(key);
  };

  useEffect(() => {
    Papa.parse('/Jobs.csv', {
      download: true,
      complete: (csvData) => {
        const filteredData = csvData.data
          .map(line => line[0].split(';'))
          .map(values => values.map(value => value.replace(/"/g, '')))
          .filter(values => values[0].startsWith(inputValue))
          .reduce((accumulator, current) => {
            const quarter = current[1];
            if (!accumulator[quarter]) {
              accumulator[quarter] = current;
            }
            return accumulator;
          }, {});

        const adjustedData = Object.values(filteredData).map(entry => ({
          date: entry[1],
          ledigeStillingar: Number(entry[3])
        }));

        setData(adjustedData);
      }
    });
  }, [inputValue]); 

  return (
    <div>
      <h1>Ledige stillinger i Norge ifh til sektor</h1>
      <LineChart width={800} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="ledigeStillingar" stroke="#8884d8" />
      </LineChart>
      <ChartControls onSelectKey={handleSelectKey} />

    </div>
  );
};

export default App;
