import React from "react";
import axios from "axios";

import { Routes, Route, } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "./components/Header";
import Drawer from "./components/Drawer/Drawer";

// Pages
import Home from "./pages/Home";
import Favorits from "./pages/Favorits";
import Orders from "./pages/Orders";

// Context 
import AppContext from "./context";


function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {  
      try {
        setIsLoading(true);
        const [cartResponse, cartFavorit, itemsResponse] = await Promise.all([
            axios.get("https://6353e31eccce2f8c02fe9c98.mockapi.io/cart"),
            axios.get("https://6353e31eccce2f8c02fe9c98.mockapi.io/favorit"),
            axios.get("https://6353e31eccce2f8c02fe9c98.mockapi.io/items")
        ]);
        // Promise.all === ↓
        // const cartResponse = await 
        //   axios.get("https://6353e31eccce2f8c02fe9c98.mockapi.io/cart");
        // const cartFavorit = await 
        //   axios.get("https://6353e31eccce2f8c02fe9c98.mockapi.io/favorit");
        // const itemsResponse = await 
        //   axios.get("https://6353e31eccce2f8c02fe9c98.mockapi.io/items");         
        
        setIsLoading(false);
        setCartItems(cartResponse.data);
        setItems(itemsResponse.data);
        setFavorites(cartFavorit.data);
      } catch (error) {
        console.log("Что-то пошло не так =(", error);
        console.error(error);
      }      
    }

    fetchData();
    
  }, []); 

  const onAddToCart = async (obj) => {     
    try {
      const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id));
      if (findItem) {        
        setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)));
        await axios.delete(`https://6353e31eccce2f8c02fe9c98.mockapi.io/cart/${findItem.id}`);
      } else {
        setCartItems((prev) => [...prev, obj]); 
        const {data} = await axios.post("https://6353e31eccce2f8c02fe9c98.mockapi.io/cart", obj);
        setCartItems((prev) => [...prev.map(item => {
          if (item.parentId === data.parentId) {
            return {
              ...item,
              id: data.id
            } 
          }
          return item;
        })]); 
      }      
    } catch (error) {
      console.log("Ошибка при добавлении в корзину", error);
      console.error(error);
    }     
  } 
 
  const onRemoveItem = (id) => {
    try {
      axios.delete(`https://6353e31eccce2f8c02fe9c98.mockapi.io/cart/${id}`);
      setCartItems((prev) => prev.filter(items => Number(items.id) !== Number(id)));
      
    } catch (error) {
      console.log("Ошибка при удаление из корзины");
      console.error(error);
    }
    
  }

  const onAddToFavorit = async (obj) => { 
    try {      
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(`https://6353e31eccce2f8c02fe9c98.mockapi.io/favorit/${obj.id}`);
        setFavorites((prev) => prev.filter((items) => Number(items.id) !== Number(obj.id)));
      } else {
        const {data} = await axios.post("https://6353e31eccce2f8c02fe9c98.mockapi.io/favorit", obj);
        setFavorites((prev) => [...prev, data]);  

      }
    } catch (error) {
      alert("Не удалось добавить в закладки");
      console.error(error);
    } 
    
  } 

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }   
  
  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id))
  }

  return (
    <AppContext.Provider value={
      {cartItems, 
      favorites, 
      items,
      isItemAdded,
      onAddToFavorit, 
      onAddToCart,
      setCartOpened, 
      setCartItems}}
    >
      <div className="wrapper clear">      
      {
          <Drawer 
            onRemove={onRemoveItem}
            onClose={() => setCartOpened(false)}
            items={cartItems}
            oppened={cartOpened}
          />
        }
          
        <Header 
          onClickCart={() => setCartOpened(true)}
        />
        <Routes>
          <Route 
            path="/" 
            exact
            element={
              <Home 
                  items={items}
                  cartItems={cartItems}
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                  onChangeSearchInput={onChangeSearchInput}
                  onAddToCart={onAddToCart}
                  onAddToFavorit={onAddToFavorit}
                  isLoading={isLoading}
                />}
          />
          <Route 
            path="/favorites" 
            exact
            element={
              <Favorits 
                // items={favorites}
                // onAddToFavorit={onAddToFavorit}
              />}
          />
          <Route 
            path="/orders" 
            exact
            element={
              <Orders />}
          />
        </Routes>
      
      </div>

    </AppContext.Provider>
    
  );
}

export default App;
