

function Header(props) {
    return (
        <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} hight={40} src="../../image/logo.png"/>
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>        
        <ul className="headerRight d-flex ">
          <li className="mr-30">
            <img width={18} hight={18} src="/image/cart.svg" /> 
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={18} hight={18} src="/image/user.svg"/>
          </li>
        </ul>
      </header>
    )
}

export default Header;