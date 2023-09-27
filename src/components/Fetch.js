fetch('https://jsonplaceholder.typicode.com/users')
  .then((res) => {
    res.json();
  })
  .then((json) => {
    JSON.stringify(json);
  })
  .then((str) => console.log(str));
