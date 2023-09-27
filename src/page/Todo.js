import { useRef, useState } from 'react';
function Todo() {
  const [todo, setTodo] = useState([]);
  const [content, setContent] = useState('');
  const inputBox = useRef();
  const onSubmit = (event) => {
    event.preventDefault();
    setTodo([content, ...todo]);
    inputBox.current.value = '';
  };
  return (
    <div>
      <h1>TodoList</h1>
      <form onSubmit={onSubmit}>
        <input
          placeholder="할 일을 입력 해 주세요"
          onChange={(e) => {
            setContent(e.target.value);
          }}
          ref={inputBox}
        ></input>
        <button type="submit">입력</button>
      </form>
      <hr></hr>
      <ul>
        {todo.map((e, i) => {
          return <li key={i}>{e}</li>;
        })}
      </ul>
    </div>
  );
}
export default Todo;
