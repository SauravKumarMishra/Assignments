import React, { useEffect, useState } from 'react';
import './clock.css';

export default function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setDate(new Date()), 1000);
    return () => {
      clearInterval(id);
    };
  }, []);
  return (
    <div id='clock'>
      <h1>
        {date.toLocaleTimeString()} {date.getHours() >= 12 ? 'PM' : 'AM'}
      </h1>
    </div>
  );
}
