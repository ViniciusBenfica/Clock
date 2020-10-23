import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() =>{
    schedule()
  },[])

  const schedule = () => {

    setInterval(() => {
      const changeDate = 6
      const date = new Date();
      setSecond(date.getSeconds() * changeDate)
      setMinute(date.getMinutes() * changeDate)
      setHour((date.getHours() * 30) + (minute/12))
    })
  }

  return (
    <div class="clock">
      <div class="hour">
        <div style={{transform: `rotate(${hour}deg)`}} class="hr"></div>
      </div>

      <div class="min">
        <div style={{transform: `rotate(${minute}deg)`}} class="mn"></div>
      </div>

      <div class="sec">
        <div style={{transform: `rotate(${second}deg)`}} class="sc"></div>
      </div>

    </div>
  );
}

export default App;

