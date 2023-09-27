import React, { useEffect, useState } from 'react';

function Poketmon() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  async function fetchData() {
    const res = await fetch(
      'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
    )
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setIsLoading(false);
        console.log(data);
      });
    // const data = await res.json();
    // console.log(data);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return <div>{isLoading ? <div>Loading</div> : null}</div>;
}

export default Poketmon;
