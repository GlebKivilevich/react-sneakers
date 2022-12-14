import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
function  Header(props) {
  const {totalPrice} = useCart();

    return (
        <header className="d-flex justify-between align-center p-40">
        <Link to="/">
          <div className="d-flex align-center">
            <img width={40} hight={40} src="../../image/logo.png" alt="Logo"/>
            <div>
              <h3 className="text-uppercase">React Sneakers</h3>
              <p className="opacity-5">Магазин лучших кроссовок</p>
            </div>
          </div>   
        </Link>
             
        <ul className="headerRight d-flex ">
          <li onClick={() => props.onClickCart()} className="mr-30 cu-p" >
            <img width={18} hight={18} src="/image/cart.svg" alt="Корзина"/> 
            <span>{totalPrice} руб.</span>
          </li>
          <Link to="/favorites">
            <li>
              <img className="mr-20 cu-p" width={18} hight={18} src="/image/heart.svg" alt="Закладки"/>
            </li>
          </Link>
          <Link to="/orders">
            <li>
              <img width={18} hight={18} src="/image/user.svg" alt="Пользователь"/>
            </li>
          </Link>
         
        </ul>
      </header>
    )
}

export default Header;