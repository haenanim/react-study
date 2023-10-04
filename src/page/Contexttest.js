import { createContext, useContext } from 'react';
import React from 'react';

const ThemeContext = createContext('light');

function Contexttest() {
  const theme = useContext(ThemeContext);
  console.log(theme);
  return <div>Contexttest</div>;
}

export default Contexttest;
