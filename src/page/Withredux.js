import React, { useState } from 'react';
import Withoutreduxbtn from './Withoutreduxbtn';
import { createStore } from 'redux';
import { Provider, useDispatch, useSelector } from 'react-redux';

function reducer(state, action) {
  console.log(state);
  if (action.type === 'changeColor') {
    return {
      ...state,
      color: action.payload,
    };
  } else {
    return state;
  }
}
const initialState = { color: 'yellow' };
let store = createStore(reducer, initialState);
// console.log(store.getState());

function Withredux() {
  return (
    <>
      <Provider store={store}>
        <RedContainer text="red" />
        {/* <GreenContainer />
      <BlueContainer />
      <PurpleContainer /> */}
      </Provider>
    </>
  );
}

function RedContainer(props) {
  const dispatch = useDispatch();
  const changedColor = useSelector((state) => state.color);
  const style = {
    backgroundColor: changedColor,
  };
  const onClick = () => {
    dispatch({ type: 'changeColor', payload: 'red' });
  };
  return (
    <div className="container" style={style}>
      <h3>{props.text}</h3>
      <Withoutreduxbtn text={props.text} onClick={onClick} />
    </div>
  );
}
// function GreenContainer(props) {
//   const onClick = () => {
//     props.setColor('green');
//   };
//   return (
//     <div className="container" style={props.style}>
//       <h3>{props.text}</h3>
//       <Withoutreduxbtn text={props.text} onClick={onClick} />
//     </div>
//   );
// }
// function BlueContainer(props) {
//   const onClick = () => {
//     props.setColor('blue');
//   };
//   return (
//     <div className="container" style={props.style}>
//       <h3>{props.text}</h3>
//       <Withoutreduxbtn text={props.text} onClick={onClick} />
//     </div>
//   );
// }
// function PurpleContainer(props) {
//   const onClick = () => {
//     props.setColor('purple');
//   };
//   return (
//     <div className="container" style={props.style}>
//       <h3>{props.text}</h3>
//       <Withoutreduxbtn text={props.text} onClick={onClick} />
//     </div>
//   );
// }

export default Withredux;
