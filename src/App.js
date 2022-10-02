import { useEffect, useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);
  return (
    <div className='App'>
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        <Router>
          <Header />
          <Routes>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/checkout' element={<Checkout />}></Route>
            <Route path='/' element={<Home products={products} />}></Route>
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
