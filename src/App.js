import logo from './logo.svg';
import './App.css';
import {fbDatabase} from './firebase.js';
import {useEffect,useState} from 'react';
import Header from './Header.js';

function App() {
  const [user,setUser] = useState('Teste');
  useEffect(()=>{
    console.log(fbDatabase);
  });

  return (
    <div className="App"> 
      <Header setUser={setUser} user={user}></Header>
    </div>
  );
}

export default App;