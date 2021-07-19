import React from 'react';
import ButtonPanel from './ButtonPanel';
// import {Component} from 'react';
import Display from './Display';
// import ButtonPanel from 'ButtonPanel';
// import Button from 'Button';

// import logo from './logo.svg';
// import './App.css';

const divStyle = {
  // color: 'blue',
  // backgroundImage: 'url(' + imgUrl + ')',
  width: '500px',
  margin: 'auto',
};

function App() {
  return (
    <div style={divStyle}>
      <Display />
      <ButtonPanel />
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit
//           <code>src/App.js</code>
//           and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
