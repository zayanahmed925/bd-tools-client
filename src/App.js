import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Page/Home/Home';
import Navbar from './Page/Shared/Navbar/Navbar';
function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
