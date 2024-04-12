import React from 'react';
import "./style/css/style.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import Home from './components/Home';
import UserList from './components/UserList';
import Cart from './components/Cart';
import Login from './components/Login';
import useToken from './customHook/useToken';
import Footer from './components/Footer';
import ProductList from './components/productList';
import Navbar from './components/navbar';


function App() {
  const { token, setToken }: { token: any, setToken: any} = useToken();

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/products' element={<ProductList/>} />
            <Route path='/products/:id' element={<ProductDetail />} />
            <Route path='/users' element={<UserList />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
