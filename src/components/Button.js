import { useEffect, useState } from 'react';

function Button() {
  const [count, setCount] = useState(0);
  function incrementBtn() {
    setCount(count + 1);
  }
  useEffect(() => {
    console.log('asdf');
  }, []);
  return (
    <div>
      <h1>Function components</h1>
      <p>{count}</p>
      <button onClick={incrementBtn}>start</button>
    </div>
  );
}

export default Button;
