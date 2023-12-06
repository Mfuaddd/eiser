import React, { useState } from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useLocalStorage from "../../hooks/useLocalStorage";

function Header() {
  const [basket, setBasket] = useLocalStorage("basket",[])
  const [wishList, setWishList] = useLocalStorage("wishList",[])
  const [basketMenu, setBasketMenu] = useState(false)
  const [wishListMenu, setWishListMenu] = useState(false)
  return (
    <>
      <div className="header">
        <div className="header__container">
          <div className="header__left">
            <img
              src="https://preview.colorlib.com/theme/eiser/img/logo.png.webp"
              alt=""
            />
          </div>
          <nav className="header__navbar">
            <ul>
              <li>HOME</li>
              <li>SHOP</li>
              <li>BLOG</li>
              <li>PAGES</li>
              <li>CONTACT</li>
            </ul>
          </nav>
          <div className="header__right">
            <ul>
              <li>
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
              </li>
              <li onClick={()=>setBasketMenu(!basketMenu)}>
                <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
                <div className="basket__aside" style={
                basketMenu
                  ? { transform: "scaleY(100%)" }
                  : { transform: "scaleY(0)" }
              }>
                  {basket.map(x=>
                    <ul key={x.id}>
                      <li>{x.title}</li>
                      <li>{x.price}</li>
                      <li>{x.count}</li>
                    </ul>
                  )}
                </div>
              </li>
              <li>
                <FontAwesomeIcon icon="fa-solid fa-user" />
              </li>
              <li onClick={()=>setWishListMenu(!basketMenu)}>
                <FontAwesomeIcon icon="fa-solid fa-heart" />
                <div className="wishlist__aside" style={
                basketMenu
                  ? { transform: "scaleY(100%)" }
                  : { transform: "scaleY(0)" }
              }>
              </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
