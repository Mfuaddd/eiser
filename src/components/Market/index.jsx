import React, { useEffect, useState } from "react";
import "./index.scss";
import useLocalStorage from "../../hooks/useLocalStorage";

function Market() {
    const [basket, setBasket] = useLocalStorage("basket",[])
    const [wishList, setWishList] = useLocalStorage("wishList",[])
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setApiData(data);
    })();
  }, []);
  
  function addToWishList(x) {
    if(wishList.map(b=>b.id).includes(x.id)){
        
    }
    else setWishList([...wishList,x])
  }

  function addToBasket(x) {
    if(basket.map(b=>b.id).includes(x.id)){
        setBasket(basket.map(b=>b.id === x.id ? {...b,count:++b.count} : b))
    }
    else{
        x.count = 1
        setBasket([...basket,x])
    }
  }

  return (
    <>
      <div className="market">
        <div className="market__container">
          <div className="market__header">
            <h2>INSPIRED PRODUCTS</h2>
          </div>
          <div className="market__body">
            {apiData.map((x) => {
              return (
                <ul>
                  <img src={x.image} alt="" />
                  <li>{x.title}</li>
                  <li>{x.price}$</li>
                  <li><button onClick={()=>addToBasket(x)}>Add To Cart</button></li>
                  <li><button onClick={()=>addToWishList(x)}>Add To WishList</button></li>
                </ul>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Market;
