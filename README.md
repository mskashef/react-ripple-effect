# Ripple Effect in React
In this project I have implemented the Ripple Effect with using no libraries. and you can use it simply after reading this document.
## Screenshot
<p align="center">
    <img src="screenshot.gif" />
</p>

## Attraction
- ✅ Zero dependencies
- 🚀 Tiny and blazing fast (Pure Component)
- 🎨 Pure CSS animation

## Installation
Fork/Download the source code and in the project directory, run `npm install` to install the project.

## Starting

In the project directory, run `npm start` command. Then Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

```JSX
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

```

## API

### Props
```JAVASCRIPT
RippleEffect.propTypes = {
    children: PropTypes.any,
    duration: PropTypes.number,
    rippleColor: PropTypes.string,
    onClick: PropTypes.func
}

RippleEffect.defaultProps = {
    children: null,
    duration: 0.3, // in seconds
    rippleColor: 'rgba(255,255,255,0.4)',
    onClick: () => {}
}
```

| Property    | Description                                                 | Default Value         |
|-------------|-------------------------------------------------------------|-----------------------|
| duration    | The css animate duration [s]                                | 0.3                   |
| rippleColor | The ripple's background color                               | rgba(255,255,255,0.4) |
| onClick     | The onClick Method which is triggered when use clicks on it | () => {}              |