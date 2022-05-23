import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AddReview from './Page/Dashboard/AddReview';
import AllUser from './Page/Dashboard/AllUser';
import Dashboard from './Page/Dashboard/Dashboard';
import MyOrders from './Page/Dashboard/MyOrders';
import Home from './Page/Home/Home';
import Login from './Page/Login/Login';
import Register from './Page/Login/Register';
import RequireAdmin from './Page/Login/RequireAdmin';
import RequireAuth from './Page/Login/RequireAuth';
import Purchase from './Page/Purchase/Purchase';
import Navbar from './Page/Shared/Navbar/Navbar';
function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/tools/:itemsId' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='addReview' element={<AddReview></AddReview>}></Route>
          <Route path='allUsers' element={
            <RequireAdmin>
              <AllUser></AllUser>
            </RequireAdmin>
          }></Route>

        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
