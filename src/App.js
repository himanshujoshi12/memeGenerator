import React from 'react';
import { Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import Home from './Pages/Home';
import Editpage from './Pages/Editpage';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/edit' element={<Editpage/>}/>
      </Routes>
    </div>
  );
}

export default App;
