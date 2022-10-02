import { useEffect, useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className='App'>
      {/* {console.log(products)} */}
      <Router>
        <Header />
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/checkout' element={<Checkout />}></Route>
          <Route path='/' element={<Home products={products} />}></Route>
        </Routes>
        {/* <Home products={products} /> */}
      </Router>
    </div>
  );
}

export default App;
