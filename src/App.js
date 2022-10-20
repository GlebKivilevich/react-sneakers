import {useState} from "react"

import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr = [
  {title: "Мужские Кроссовки Nike Blazer Mid Suede", price: 12999, sneakers: "/image/sneakers/1.jpg", userLike: false},
  {title: "Мужские Кроссовки Nike Air Max 270", price: 11650, sneakers: "/image/sneakers/2.jpg", userLike: true},
  {title: "Мужские Кроссовки Nike Blazer Mid Suede", price: 8599, sneakers: "/image/sneakers/3.jpg", userLike: false},
  {title: "Кроссовки Puma X Aka Boku Future Rider", price: 7650, sneakers: "/image/sneakers/4.jpg", userLike: true},
  {title: "Мужские Кроссовки Under Armour Curry 8", price: 15150, sneakers: "/image/sneakers/5.jpg", userLike: true},
  {title: "Мужские Кроссовки Nike Blazer Mid Suede", price: 12999, sneakers: "/image/sneakers/1.jpg", userLike: false},
  {title: "Мужские Кроссовки Nike Air Max 270", price: 11650, sneakers: "/image/sneakers/2.jpg", userLike: true},
  {title: "Мужские Кроссовки Nike Blazer Mid Suede", price: 8599, sneakers: "/image/sneakers/3.jpg", userLike: false},
  {title: "Кроссовки Puma X Aka Boku Future Rider", price: 7650, sneakers: "/image/sneakers/4.jpg", userLike: true},
  {title: "Мужские Кроссовки Under Armour Curry 8", price: 15150, sneakers: "/image/sneakers/5.jpg", userLike: true},
  {title: "Кроссовки Puma X Aka Boku Future Rider", price: 7650, sneakers: "/image/sneakers/4.jpg", userLike: true},
  {title: "Мужские Кроссовки Under Armour Curry 8", price: 15150, sneakers: "/image/sneakers/5.jpg", userLike: true},

];

function App() {
  return (
    <div className="wrapper clear">      
      <Drawer/>
      <Header/>
      <div className="content p-40 ">
        <div className="d-flex align-center justify-between mb-40">
          <h1 >Все кроссовки</h1>
          <div className="search-block d-flex">
              <img src="/image/search.svg" alt="Search" />
              <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex justify-between flex-wrap	m-auto">
          {
            arr.map((item, index) => (
              <Card 
                key={index} 
                titel={item.title} 
                price={item.price} 
                sneakers={item.sneakers}
                userLike={item.userLike}
                onFavourite={() => console.log("Добавили в закладки")}
                onPlus={() => console.log("Нажали на плюс.")}
              />
            ))
          }
        </div>         
      </div>
    </div>
  );
}

export default App;
