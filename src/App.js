import logo from"./img/logo.png";
import cart from "./img/cart.svg"
import user from "./img/user.svg"
import plus from "./img/plus.svg";
import search from "./img/search.svg";
import sneakers from "./img/sneakers/sneakerF.jpg";
import heartUnLike from "./img/heartLike.svg";
import btnRemove from "./img/btn-remove.svg";
import arrow from "./img/arrow.svg";




function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
        <div className="drawer">
          <h2 className="d-flex justify-between">Корзина <img className="removeBtn cu-p" src={btnRemove} alt="Remove"/></h2>

          <div className="items">
              <div className="cartItem d-flex align-center mb-20 p-5">
                <img 
                  className="mr-20"
                  width={70} 
                  hight={70} 
                  src={sneakers} 
                  alt="sneakers"
                />               
                <div className="mr-20">
                  <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
                  <b>12 999 руб.</b>
                </div>
                <img className="removeBtn" src={btnRemove} alt="Remove"/>
              </div>  
              <div className="cartItem d-flex align-center mb-20">
                <img 
                  className="mr-20"
                  width={70} 
                  hight={70} 
                  src={sneakers} 
                  alt="sneakers"/>               
                <div className="mr-20">
                  <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
                  <b>12 999 руб.</b>
                </div>
                <img className="removeBtn" src={btnRemove} alt="Remove" />
              </div> 
              <div className="cartTotalBlock">
                <ul>
                  <li>
                    <span>Итого:</span>
                    <div></div>
                    <b>21 498 руб. </b>
                  </li>
                  <li>
                    <span>Налог 5%:</span>
                    <div></div>
                    <b>1074 руб. </b>
                  </li>
                </ul>   
                <button className="greenButton">Оформить заказ! <img src={arrow} alt="arrow" /></button>  
              </div>                         
          </div>               
        </div>
      </div>


      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} hight={40} src={logo}/>
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>        
        <ul className="headerRight d-flex ">
          <li className="mr-30">
            <img width={18} hight={18} src={cart} /> 
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={18} hight={18} src={user}/>
          </li>
        </ul>
      </header>
      <div className="content p-40 ">
        <div className="d-flex align-center justify-between mb-40">
          <h1 >Все кроссовки</h1>
          <div className="search-block d-flex">
              <img src={search} alt="Search" />
              <input placeholder="Поиск ..." />
          </div>
        </div>
        <div className="d-flex justify-center flex-wrap	">
          <div className="card">
            <div className="favorite">
              <img src={heartUnLike} alt="UnLike"/>
            </div>
            
            <img width={133} hight={133} src={sneakers} alt="Sneakers"/>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img className="d-flex" width={20} hight={20} src={plus} alt=""/>
              </button>
            </div>
          </div>
          <div className="card">
            <div className="favorite">
              <img src={heartUnLike} alt="UnLike"/>
            </div>
            
            <img width={133} hight={133} src={sneakers} alt="Sneakers"/>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img className="d-flex" width={20} hight={20} src={plus} alt=""/>
              </button>
            </div>
          </div>
          <div className="card">
            <div className="favorite">
              <img src={heartUnLike} alt="UnLike"/>
            </div>
            
            <img width={133} hight={133} src={sneakers} alt="Sneakers"/>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img className="d-flex" width={20} hight={20} src={plus} alt=""/>
              </button>
            </div>
          </div>
          <div className="card">
            <div className="favorite">
              <img src={heartUnLike} alt="UnLike"/>
            </div>
            
            <img width={133} hight={133} src={sneakers} alt="Sneakers"/>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img className="d-flex" width={20} hight={20} src={plus} alt=""/>
              </button>
            </div>
          </div>
        </div>
          
      </div>
    </div>
  );
}

export default App;
