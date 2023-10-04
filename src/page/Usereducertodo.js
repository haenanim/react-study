import React, { useReducer, useState } from 'react';
import TODO_ACTION_TYPE from '../ACTION_TYPE';
import Todoreducer from '../components/Todoreducer';

const reducer = (state, action) => {
  switch (action.type) {
    case TODO_ACTION_TYPE.add:
      const newTodo = {
        id: Date.now(),
        todo: action.payload,
        completed: false,
      };
      return {
        count: state.count + 1,
        todoList: [...state.todoList, newTodo],
      };
    case TODO_ACTION_TYPE.del:
      return {
        count: state.count - 1,
        todoList: state.todoList.filter(
          (todo) => todo.id !== action.payload.id
        ),
      };
    case TODO_ACTION_TYPE.completed:
      return {
        count: state.count,
        todoList: state.todoList.map((todos) => {
          if (todos.id === action.payload.id) {
            return { ...todos, completed: !todos.completed };
          } else {
            return todos;
          }
        }),
      };
    default:
      return state;
  }
};

const initialState = {
  count: 0,
  todoList: [],
};

function Usereducertodo() {
  const [todo, setTodo] = useState('');
  const [todoList, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>Todolist -reducer</h2>
      <p>Total TodoList Count : {todoList.count}</p>
      <input
        type="text"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        placeholder="할일 입력"
      />
      <button
        onClick={() => {
          dispatch({ type: TODO_ACTION_TYPE.add, payload: todo });
          console.log(todoList);
        }}
      >
        add
      </button>
      <hr />

      {todoList.todoList.map((c, i) => {
        return (
          <Todoreducer
            key={i}
            todo={c.todo}
            dispatch={dispatch}
            id={c.id}
            completed={c.completed}
          />
        );
      })}
    </div>
  );
}

export default Usereducertodo;
