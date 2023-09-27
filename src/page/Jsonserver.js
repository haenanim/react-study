import React, { useEffect } from 'react';

function Jsonserver() {
  async function fetchData() {
    const res = await fetch('http://localhost:3000/posts');
    const data = res.json();
    data.then((res) => console.log(res));
  }
  useEffect(() => {
    fetchData();
  });
  return <div>Jsonserver</div>;
}

export default Jsonserver;
