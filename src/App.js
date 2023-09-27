import Button from './components/Button';
import Todo from './page/Todo';
function App() {
  // fetch('https://jsonplaceholder.typicode.com/users').then((res) => {
  //   console.log(res);
  // });
  // async function jsonFetch() {
  //   let res = await fetch('https://jsonplaceholder.typicode.com/users');
  //   let jsonData = await res.json();
  //   let strData = await JSON.stringify(jsonData);
  //   console.log(strData);
  // }
  return (
    <div className="App">
      <Todo></Todo>
    </div>
  );
}

export default App;
