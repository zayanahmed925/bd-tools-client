import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AddReview from './Page/Dashboard/AddReview';
import AllUser from './Page/Dashboard/AllUser';
import Dashboard from './Page/Dashboard/Dashboard';
import MyOrders from './Page/Dashboard/MyOrders';
import MyProfile from './Page/Dashboard/MyProfile';
import AddTools from './Page/Dashboard/AddTools';
import Home from './Page/Home/Home';
import Login from './Page/Login/Login';
import Register from './Page/Login/Register';
import RequireAdmin from './Page/Login/RequireAdmin';
import RequireAuth from './Page/Login/RequireAuth';
import Purchase from './Page/Purchase/Purchase';
import Navbar from './Page/Shared/Navbar/Navbar';
import ManageTools from './Page/Dashboard/ManageTools';
import Payment from './Page/Dashboard/Payment';
import UpdateProfile from './Page/Dashboard/UpdateProfile';
import Portfolio from './Page/Portfolio/Portfolio';
import NotFound from './Page/NotFound/NotFound';
import Blogs from './Page/Blogs/Blogs';
function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
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
          <Route path='myProfile' element={<MyProfile></MyProfile>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='updateProfile' element={<UpdateProfile></UpdateProfile>}></Route>
          <Route path='allUsers' element={
            <RequireAdmin>
              <AllUser></AllUser>
            </RequireAdmin>
          }></Route>
          <Route path='addTools' element={
            <RequireAdmin>
              <AddTools></AddTools>
            </RequireAdmin>
          }></Route>
          <Route path='manageTools' element={
            <RequireAdmin>
              <ManageTools></ManageTools>
            </RequireAdmin>
          }></Route>

        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
