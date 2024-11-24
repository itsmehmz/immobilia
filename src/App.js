import './App.css';
import { Route , Routes } from "react-router-dom"
import Navbar from './Components/navbar';
import Home from './pages/Home';
import Createpost from './pages/Createpost';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>} />
        <Route path='/createpost' element={<Createpost/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </div>
  );
}

export default App;
