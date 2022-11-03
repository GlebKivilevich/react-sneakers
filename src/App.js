import { Routes, Route, } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios"
import Header from "./components/Header";
import Drawer from "./components/Drawer";

// Pages
import Home from "./pages/Home";
import Favorits from "./pages/Favorits";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  let fullPrice = 0;
  cartItems.map((item) => {        
    return fullPrice += item.price;
  });

  useEffect(() => {
    async function fetchData() {  
      setIsLoading(true);

      const cartResponse = await 
        axios.get("https://6353e31eccce2f8c02fe9c98.mockapi.io/cart");
      const cartFavorit = await 
        axios.get("https://6353e31eccce2f8c02fe9c98.mockapi.io/favorit");
      const itemsResponse = await 
        axios.get("https://6353e31eccce2f8c02fe9c98.mockapi.io/items");         
      
      setIsLoading(false);

      setCartItems(cartResponse.data);
      setItems(itemsResponse.data);
      setFavorites(cartFavorit.data);
    }

    fetchData();
    
  }, []); 

  const onAddToCart = (obj) => { 
    try {
      if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
        axios.delete(`https://6353e31eccce2f8c02fe9c98.mockapi.io/cart/${obj.id}`)
        setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));

      } 
      else {
        axios.post("https://6353e31eccce2f8c02fe9c98.mockapi.io/cart", obj);
        setCartItems((prev) => [...prev, obj]); 
      }      
    } catch (error) {
      console.log("Что-то пошло не так");
    }     
  } 

  const onRemoveItem = (id) => {
    axios.delete(`https://6353e31eccce2f8c02fe9c98.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter(items => items.id !== id)); 
  }

  const onAddToFavorit = async (obj) => { 
    try {      
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(`https://6353e31eccce2f8c02fe9c98.mockapi.io/favorit/${obj.id}`);
        // setFavorites((prev) => prev.filter(items => items.id !== obj.id)); 
      } else {
        const {data} = await axios.post("https://6353e31eccce2f8c02fe9c98.mockapi.io/favorit", obj);
        setFavorites((prev) => [...prev, data]);  
      }
    } catch (error) {
      alert("Не удалось добавить в фавориты")
    } 
    
  } 

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }   

  return (
    <div className="wrapper clear">      
     {
      cartOpened ? 
        <Drawer 
          onRemove={onRemoveItem}
          onClose={() => setCartOpened(false)}
          items={cartItems}
          price={fullPrice}
        /> : null
      }
        
      <Header 
        onClickCart={() => setCartOpened(true)}
        price={fullPrice}
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
              items={favorites}
              onAddToFavorit={onAddToFavorit}
            />}
        />
      </Routes>
      
    </div>
  );
}

export default App;
