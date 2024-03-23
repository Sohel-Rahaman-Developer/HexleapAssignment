
import { useContext } from 'react';
import './App.css';
import Assignment from './Assignment/Assignment';
import MainContext from './Context/MainContext';
// created by Sohel Rahaman (MERN Stack Developer)
function App() {

  return (
    <MainContext>
      <Assignment/>
    </MainContext>

  
  );
}

export default App;
