import React, { useEffect, useState } from 'react';
import './App.css';
import Axios from 'axios';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  });

  const getData = () => {
    Axios.get('https://api.covidindiatracker.com/state_data.json')
      .then(response => {
        setData(response.data)
        // console.log(response.data.state)
      })
  }


  return (
    <div className="App">
      <div className="box head">
        <table>
          <tr>
            <th>State</th>
            <th>Confirmed</th>
            <th>Active</th>
            <th>Recovered</th>
            <th>Deaths</th>
          </tr>
        </table>
      </div>
      {data.map((info, index) => (
        <div key={index} className="box">
          <table>
            <tr style={index % 2 ? { backgroundColor: 'rgb(44, 38, 38)' } : { backgroundColor: ' rgb(27, 25, 25)' }}>
              <th style={{ backgroundColor: 'rgb(44, 38, 38)', textAlign: 'left' }}>{info.state}</th>
              <th>{info.confirmed}</th>
              <th>{info.active}</th>
              <th>{info.recovered}</th>
              <th>{info.deaths}</th>
            </tr>
          </table>
        </div>
      ))}
    </div>
  );
}
export default App;

