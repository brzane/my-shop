import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route
            path='/checkout'
            element={
              <>
                <Header /> <Checkout />
              </>
            }></Route>
          <Route
            path='/'
            element={
              <>
                <Header /> <Home />
              </>
            }></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
