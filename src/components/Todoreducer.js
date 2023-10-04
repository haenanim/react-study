import React from 'react';
import TODO_ACTION_TYPE from '../ACTION_TYPE';

function Todoreducer({ todo, dispatch, id, completed }) {
  return (
    <div>
      <span
        style={{
          textDecoration: completed ? 'line-through' : 'none',
          color: completed ? 'gray' : 'black',
        }}
        onClick={() => {
          dispatch({
            type: TODO_ACTION_TYPE.completed,
            payload: { id },
          });
        }}
      >
        {todo}
      </span>
      <button
        onClick={() => {
          dispatch({ type: TODO_ACTION_TYPE.del, payload: { id } });
        }}
      >
        삭제
      </button>
    </div>
  );
}

export default Todoreducer;
