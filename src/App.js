

import React, { useState } from 'react';
import Table from"./Components/TableData"
import Chart from"./Components/Chart"
import "./App.css"

const dummyData = [
  {
    "Id": 1,
    "Year": 2004,
    "Medals": 1
  },
  {
    "Id": 2,
    "Year": 2008,
    "Medals": 3
  },
  {
    "Id": 3,
    "Year": 2012,
    "Medals": 6
  },
  {
    "Id": 4,
    "Year": 2016,
    "Medals": 2
  },
  {
    "Id": 5,
    "Year": 2020,
    "Medals": 7
  }
];

const App = () => {
  const [showTable, setShowTable] = useState(true);

  const toggleView = () => {
    setShowTable(!showTable);
  };

  return (
    <div>
      <button onClick={toggleView}>{showTable ? 'Show Chart' : 'Show Table'}</button>
      {showTable ? (
        <Table data={dummyData} />
      ) : (
        <Chart data={dummyData} />
      )}
    </div>
  );
};

export default App;
