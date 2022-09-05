import React from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import "./Header.css";
const Header = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className='header'>
      <Link to='/' style={{ textDecoration: "none" }}>
        <div className='header-logo'>
          <StorefrontIcon className='header-logo-image' fontSize='large' />
          <h2 className='header-logo-title'>myShop </h2>
        </div>
      </Link>
      <div className='header-search'>
        <input type='text' className='header-search-input' />
        <SearchIcon className='header-search-icon' />
      </div>
      <div className='header-nav'>
        <Link to='/login' style={{ textDecoration: "none" }}>
          {localStorage.getItem("user") ? (
            <div className='nav-item'>
              <span className='nav-itemLineOne'>
                Hello{" "}
                {localStorage
                  .getItem("user")
                  .substring(0, localStorage.getItem("user").indexOf("@"))}
              </span>
              <span
                className='nav-itemLineTwo'
                onClick={() => localStorage.clear()}>
                Sign Out
              </span>
            </div>
          ) : (
            <div className='nav-item'>
              <span className='nav-itemLineOne'>Hello Guest</span>
              <span className='nav-itemLineTwo'>Sign In</span>
            </div>
          )}
        </Link>
        <div className='nav-item'>
          <span className='nav-itemLineOne'>Your</span>
          <span className='nav-itemLineTwo'>Shop</span>
        </div>
        <Link to='/checkout' style={{ textDecoration: "none" }}>
          <div className='nav-item-basket'>
            <ShoppingBasketIcon />
            <span className='nav-itemLineTwo nav-item-count'>
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
