
import './App.css';
import AuthProvider from './context/AuthProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './Pages/SharedPages/Navigation/Navigation';
import Home from './Pages/HomePages/Home/Home';
import LogIn from './Pages/SharedPages/LogIn/LogIn';
import Register from './Pages/SharedPages/Register/Register';
import Pay from './Pages/Dashboard/Pay/Pay';
import PageNotFound from './Pages/SharedPages/PageNotFound/PageNotFound';
import Footer from './Pages/SharedPages/Footer/Footer';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Purchase from './Pages/Dashboard/Purchase/Purchase';
import AllProducts from './Pages/Dashboard/AllProducts/AllProducts';
import ManageProducts from './Pages/Dashboard/ManageProducts/ManageProducts';
// import PrivateRoute from './Pages/SharedPages/PrivateRoute/PrivateRoute';
import AddReview from './Pages/Dashboard/AddReview/AddReview';
import AddProducts from './Pages/Dashboard/AddProducts/AddProducts';
import ManageOrders from './Pages/Dashboard/ManageOrders/ManageOrders';
import AddAdmin from './Pages/Dashboard/AddAdmin/AddAdmin';
import MyOrder from './Pages/Dashboard/MyOrder/MyOrder';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navigation></Navigation>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='pd/:_id' element={<Purchase />} />
          <Route path='login' element={<LogIn />} />
          <Route path='register' element={<Register />} />
          <Route path='dashboard' element={<Dashboard />}>
            <Route path='manageproducts' element={<ManageProducts />} />
            <Route  path='admin' element={<AddAdmin />} />
            <Route  path='addproducts' element={<AddProducts />} />
            <Route  path='manageorders' element={<ManageOrders />} />
            <Route  path='review' element={<AddReview />} />
            <Route  path='myorder' element={<MyOrder />} />
            <Route  path='pay' element={<Pay />} />
          </Route>
          <Route  path='allproducts' element={<AllProducts />} />
          <Route  path='*' element={<PageNotFound />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;


// <Route path='/home'>
// <Home></Home>
// </Route>
// <PrivateRoute path='/pd/:_id'>
// <Purchase></Purchase>
// </PrivateRoute>
// <Route path='/login'>
// <LogIn></LogIn>
// </Route>
// <Route path='/register'>
// <Register></Register>
// </Route>
// <Route path='/pay'>
// <Pay></pay>
// </Route>
// <Route path='/dashboard'>
// <Dashboard></Dashboard>
// </Route>
// <Route path='/allproducts'>
// <AllProducts></AllProducts>
// </Route>
// <Route path='/manageproducts'>
// <ManageProducts></ManageProducts>
// </Route>
// <Route path='/review'>
// <AddReview></AddReview>
// </Route>
// <Route path='*'>
// <PageNotFound></PageNotFound>
// </Route>
