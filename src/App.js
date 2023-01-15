import logo from './logo.svg';
import './App.css';
import {fbDatabase} from './firebase.js';
import {useEffect} from 'react';

function App() {

  useEffect(()=>{
    console.log(fbDatabase);
  });



  return (
    <div className="App">
    
    </div>
  );
}

export default App;