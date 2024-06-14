import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [incrementValue, setIncrementValue] = useState(1);
  const [decrementValue, setDecrementValue] = useState(1);

  const handleSubmit = (action) => {
    if (action === 'increment') {
      setCount(count + incrementValue);
    } else if (action === 'decrement') {
      setCount(count - decrementValue);
    }
  };

  return (
    <div className="container text-center mt-5">
      <h1>Counter Page</h1>
      <p className="display-4">Count: {count}</p>
      <div className="btn-group" role="group" aria-label="Counter controls">
        <button className="btn btn-primary" onClick={() => handleSubmit('increment')}>
          Increment by {incrementValue}
        </button>
        <input
          type="number"
          value={incrementValue}
          onChange={(e) => setIncrementValue(parseInt(e.target.value))}
          style={{ width: '70px', textAlign: 'center', marginRight: '5px' }}
        />
        <button className="btn btn-primary mx-3" onClick={() => handleSubmit('decrement')}>
          Decrement by {decrementValue}
        </button>
        <input
          type="number"
          value={decrementValue}
          onChange={(e) => setDecrementValue(parseInt(e.target.value))}
          style={{ width: '70px', textAlign: 'center', marginRight: '5px' }}
        />
        <button className="btn btn-secondary" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
}
