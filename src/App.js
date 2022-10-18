import logo from "./img/logo.png"
import cart from "./img/cart.svg"
import user from "./img/user.svg"
import plus from "./img/plus.svg";
import search from "./img/search.svg";
import sneakers from "./img/sneakers/sneakerF.jpg";
import heartUnLike from "./img/heartUnLike.svg";
import heartLike from "./img/heartLike.svg";
import btnRemove from "./img/btn-remove.svg";
import arrow from "./img/arrow.svg";

import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  return (
    <div className="wrapper clear">      
      <Drawer sneakers={sneakers} btnRemove={btnRemove} arrow={arrow} />
      <Header logo={logo} cart={cart} user={user} />

      <div className="content p-40 ">
        <div className="d-flex align-center justify-between mb-40">
          <h1 >Все кроссовки</h1>
          <div className="search-block d-flex">
              <img src={search} alt="Search" />
              <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex justify-center flex-wrap	">
          <Card heartUnLike={heartLike} sneakers={sneakers} plus={plus}/>
          <Card heartUnLike={heartLike} sneakers={sneakers} plus={plus}/>
          <Card heartUnLike={heartUnLike} sneakers={sneakers} plus={plus}/>
          <Card heartUnLike={heartUnLike} sneakers={sneakers} plus={plus}/>
          <Card heartUnLike={heartLike} sneakers={sneakers} plus={plus}/>
          <Card heartUnLike={heartLike} sneakers={sneakers} plus={plus}/>
          <Card heartUnLike={heartUnLike} sneakers={sneakers} plus={plus}/>
          <Card heartUnLike={heartUnLike} sneakers={sneakers} plus={plus}/>
          <Card heartUnLike={heartLike} sneakers={sneakers} plus={plus}/>
          <Card heartUnLike={heartLike} sneakers={sneakers} plus={plus}/>
          <Card heartUnLike={heartUnLike} sneakers={sneakers} plus={plus}/>
          <Card heartUnLike={heartUnLike} sneakers={sneakers} plus={plus}/>
        </div>         
      </div>
    </div>
  );
}

export default App;
