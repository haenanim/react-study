import React from 'react';

function Withoutreduxbtn({ text, onClick }) {
  return <button onClick={onClick}>{text}</button>;
}

export default Withoutreduxbtn;
