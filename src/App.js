import { useState, useEffect } from "react";
import axios from "axios"
import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [searchValue, setSearchValue] = useState("");


  useEffect(() => {
      axios.get("https://6353e31eccce2f8c02fe9c98.mockapi.io/items")
        .then(res => {
          setItems(res.data);
      }); 
      axios.get("https://6353e31eccce2f8c02fe9c98.mockapi.io/cart")
        .then(res => {
          setCartItems(res.data);
      }); 
  }, []); 

  const onAddToCart = (obj) => { 
    axios.post("https://6353e31eccce2f8c02fe9c98.mockapi.io/cart", obj);
    setCartItems((prev) => [...prev, obj]);  
  } 

  const onRemoveItem = (id) => {
    console.log(id);
    axios.delete(`https://6353e31eccce2f8c02fe9c98.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter(items => items.id !== id)); 
  }
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }   

  return (
    <div className="wrapper clear">      
     {cartOpened ? 
        <Drawer 
        onRemove={onRemoveItem}
          onClose={() => setCartOpened(false)}
          items={cartItems}

        /> : null}
      <Header 
        onClickCart={() => setCartOpened(true)}
         
      />
      <div className="content p-40 ">
        <div className="d-flex align-center justify-between mb-40">
          <h1> {searchValue ? `Поиск по запросу: ${searchValue}`: "Все кроссовки"}</h1>
          <div className="search-block d-flex">
              <img src="/image/search.svg" alt="Search"/>
              {searchValue && <img onClick={() => setSearchValue("")} className="cu-p clear" src="/image/btn-remove.svg" alt="Close"/>}
              <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex flex-wrap	m-auto">
          {
            items.filter((item) => item.titel.toLowerCase().includes(searchValue.toLowerCase()))
            .map((item, index) => (
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
