import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SignUp from './components/SignUp';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="outer">
        <div className="inner">
          <SignUp />
        </div>
      </div>
    </div>
  )
}

export default App
