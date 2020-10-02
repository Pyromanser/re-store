import React from 'react';
import {Link} from "react-router-dom";


import './shop-header.css';

const ShopHeader = ({numItems, total}) => {
  return (
    <header className="shop-header row">
      <div className="logo">
        <Link to="/">
          <span className="text-dark">ReStore</span>
        </Link>
      </div>
      <div className="shopping-cart">
        <Link to="/cart">
          <i className="cart-icon fa fa-shopping-cart"/>
          {numItems} items (${total})
        </Link>
      </div>
    </header>
  );
};

export default ShopHeader;