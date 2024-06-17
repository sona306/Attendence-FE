import logo from './logo.svg';
import './App.css';
import Signin from './components/Signin';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signin/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
