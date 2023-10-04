import Button from './components/Button';
import Todo from './page/Todo';
import Poketmon from './page/Poketmon';
import Movieinfo from './page/Movieinfo';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Jsonserver from './page/Jsonserver';
import Contexttest from './page/Contexttest';
import Withoutredux from './page/Withoutredux';
import Appreducer from './page/Appreducer';
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
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Link to="/todo">투두</Link>
                <br />
                <Link to="/Pokemon">포켓몬</Link>
                <br />
                <Link to="/Movieinfo">무비</Link>
                <br />
                <Link to="/Movieinfo">무비</Link>
                <br />
                <Link to="/Contexttest">컨택스트 테스트</Link>
                <br />
                <Link to="/Withoutredux">리덕스</Link>
                <br />
                <Link to="/Appreducer">리듀서</Link>
              </div>
            }
          ></Route>
          <Route path="/Todo" element={<Todo />}></Route>
          <Route path="/Poketmon" element={<Poketmon />}></Route>
          <Route path="/Movieinfo" element={<Movieinfo />}></Route>
          <Route path="/Jsonserver" element={<Jsonserver />}></Route>
          <Route path="/Contexttest" element={<Contexttest />}></Route>
          <Route path="/Withoutredux" element={<Withoutredux />}></Route>
          <Route path="/Appreducer" element={<Appreducer />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
