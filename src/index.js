import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const formatName = function(name){
  return name.firstName + " " + name.lastName;
}

const name = {
  firstName: "Soyeon",
  lastName: "Park"
};
const element = <h1>Hello, {formatName(name)}!</h1>

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

