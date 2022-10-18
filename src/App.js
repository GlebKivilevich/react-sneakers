import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr = [
  {titel: "Мужские Кроссовки Nike Blazer Mid Suede", price: 12999, sneakers: "/image/sneakers/sneakerTh.jpg", userLike: false},
  {titel: "Мужские Кроссовки Nike Air Max 270", price: 15650, sneakers: "../../image/sneakers/sneakerF.jpg", userLike: true},
  {titel: "Мужские Кроссовки Nike Blazer Mid Suede", price: 12999, sneakers: "../../image/sneakers/sneakerTh.jpg", userLike: false},
  {titel: "Мужские Кроссовки Nike Air Max 270", price: 21650, sneakers: "../../image/sneakers/sneakerS.jpg", userLike: true},
  {titel: "Мужские Кроссовки Nike Eazy Boost 320", price: 9999, sneakers: "../../image/sneakers/sneakerF.jpg", userLike: true},
  {titel: "Мужские Кроссовки Nike Air Max 150", price: 15650, sneakers: "../../image/sneakers/sneakerF.jpg", userLike: true},
  {titel: "Мужские Кроссовки Nike Blazer Bock", price: 6999, sneakers: "../../image/sneakers/sneakerTh.jpg", userLike: false},
  {titel: "Мужские Кроссовки Nike Air Max 270", price: 5650, sneakers: "../../image/sneakers/sneakerS.jpg", userLike: false},
  {titel: "Мужские Кроссовки Nike Air Max 150", price: 15650, sneakers: "../../image/sneakers/sneakerF.jpg", userLike: true},
]

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
          {/* <Card price={"12 990"} titel={"Мужские Кроссовки Nike Blazer Mid Suede"} sneakers={sneakersTwo} />
          <Card price={"15 645"} titel={"Мужские Кроссовки Nike Air Max 270"} sneakers={sneakers} /> */}
          {
            arr.map((item, index) => (
              <Card 
                key={index} 
                titel={item.titel} 
                price={item.price} 
                sneakers={item.sneakers}
                userLike={item.userLike}
              />
            ))

            // arr.map((val) => (
            //   <Card/>
            // ))
          }
          {/* <Card heartUnLike={heartLike} sneakers={sneakers} plus={plus}/>
          <Card heartUnLike={heartLike} sneakers={sneakers} plus={plus}/>
          <Card heartUnLike={heartUnLike} sneakers={sneakers} plus={plus}/>
          <Card heartUnLike={heartUnLike} sneakers={sneakers} plus={plus}/>
          <Card heartUnLike={heartLike} sneakers={sneakers} plus={plus}/>
          <Card heartUnLike={heartLike} sneakers={sneakers} plus={plus}/>          <Card heartUnLike={heartLike} sneakers={sneakers} plus={plus}/> */}

        </div>         
      </div>
    </div>
  );
}

export default App;
