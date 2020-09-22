import React from 'react';
import './App.css';
import RippleEffect from './components/RippleEffect/RippleEffect';

function App() {
  return (
    <div className="App">
      <RippleEffect className="MyButton">
        Ripple Button
      </RippleEffect>
    </div>
  );
}

export default App;
