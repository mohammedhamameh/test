import logo from './logo.svg';
import './App.css';
import Layout from './component/Layout/Layout';
import Home from './component/Home/Home'
import Products from './component/Products/Products'
import Details from './component/Details/Details'
import Category from './component/Category/Category'
import Brands from './component/Brands/Brands'
import Signin from './component/Signin/Signin'
import Signup from './component/Signup/Signup'
import Cart from './component/Cart/Cart'
import Register from './component/Register/Register'
import Notfound from './component/Notfound/Notfound'
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
const router=createBrowserRouter([
{path:'',element:<Layout/>,children:[
  {path:'home',element:<Home/>},
  {path:'products',element:<Products/>},
  {path:'details',element:<Details/>},
  {path:'category',element:<Category/>},
  {path:'brands',element:<Brands/>},
  {path:'cart',element:<Cart/>},
  {path:'signup',element:<Signup/>},
  {path:'signin',element:<Signin/>},
  {path:'register',element:<Register/>},
  {path:'*',element:<Notfound/>}
]}
])
function App() {
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    
    </>
  );
}

export default App;
