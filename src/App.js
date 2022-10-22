import { useState, useEffect, useContext } from "react";

import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    fetch("https://6353e31eccce2f8c02fe9c98.mockapi.io/items")
      .then(res => res.json())
      .then(json => {
        setItems(json)
      });
  }, []);  
  
  const onAddToCart = (obj) => { 
    setCartItems([...cartItems, obj]);
      
  }    
  return (
    <div className="wrapper clear">      
     {cartOpened ? 
        <Drawer 
          onClose={() => setCartOpened(false)}
          items={cartItems}

        /> : null}
      <Header 
        onClickCart={() => setCartOpened(true)}
         
      />
      <div className="content p-40 ">
        <div className="d-flex align-center justify-between mb-40">
          <h1 >Все кроссовки</h1>
          <div className="search-block d-flex">
              <img src="/image/search.svg" alt="Search" />
              <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex flex-wrap	m-auto">
          {
            items.map((item, index) => (
              <Card 
                key={index} 
                titel={item.titel} 
                price={item.price} 
                sneakers={item.sneakers}
                userLike={item.userLike}
                onPlus={obj => onAddToCart(obj)}
              />
            ))
          }
        </div>         
      </div>
    </div>
  );
}

export default App;
