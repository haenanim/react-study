import React, { useState } from 'react';
import Withoutreduxbtn from './Withoutreduxbtn';
import { legacy_createStore as createStore } from 'redux';

function reducer(state, action) {
  if (state === undefined) {
    // 초기화 단계
    return { color: 'white' };
  }
}
let store = createStore(reducer);
console.log(store.getState());

function Withoutredux() {
  return <Parent />;
}

function Parent(props) {
  const [color, setColor] = useState('white');
  const style = {
    backgroundColor: color,
  };
  return (
    <>
      <RedContainer text="red" />
      <GreenContainer text="green" />
      <BlueContainer text="blue" />
      <PurpleContainer text="purple" />
    </>
  );
}
function RedContainer({ text }) {
  let state = store.getState();
  console.log(state.color);
  const style = {
    backgroundColor: state.color,
  };
  return (
    <div className="container" style={style}>
      <h3>{text}</h3>
      <Withoutreduxbtn text={text} />
      {/*</Button> onClick = {onClick} /> */}
    </div>
  );
}
function GreenContainer(props) {
  const onClick = () => {
    props.setColor('green');
  };
  return (
    <div className="container" style={props.style}>
      <h3>{props.text}</h3>
      <Withoutreduxbtn text={props.text} onClick={onClick} />
    </div>
  );
}
function BlueContainer(props) {
  const onClick = () => {
    props.setColor('blue');
  };
  return (
    <div className="container" style={props.style}>
      <h3>{props.text}</h3>
      <Withoutreduxbtn text={props.text} onClick={onClick} />
    </div>
  );
}
function PurpleContainer(props) {
  const onClick = () => {
    props.setColor('purple');
  };
  return (
    <div className="container" style={props.style}>
      <h3>{props.text}</h3>
      <Withoutreduxbtn text={props.text} onClick={onClick} />
    </div>
  );
}

export default Withoutredux;
