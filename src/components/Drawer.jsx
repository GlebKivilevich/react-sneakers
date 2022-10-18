

function Drawer(props) {
    return (
        <div style={{display: "none"}} className="overlay">
            <div className="drawer">
            <h2 className="d-flex justify-between mb-20">Корзина <img className="removeBtn cu-p" src={props.btnRemove} alt="Remove"/></h2>

            <div className="items">
                <div className="cartItem d-flex align-center mb-20 p-5">
                    <img 
                    className="mr-20"
                    width={70} 
                    hight={70} 
                    src={props.sneakers} 
                    alt="sneakers"
                    />               
                    <div className="mr-20">
                    <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
                    <b>12 999 руб.</b>
                    </div>
                    <img className="removeBtn" src={props.btnRemove} alt="Remove"/>
                </div>  
                <div className="cartItem d-flex align-center mb-20">
                    <img 
                    className="mr-20"
                    width={70} 
                    hight={70} 
                    src={props.sneakers} 
                    alt="sneakers"/>               
                    <div className="mr-20">
                    <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
                    <b>12 999 руб.</b>
                    </div>
                    <img className="removeBtn" src={props.btnRemove} alt="Remove" />
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
                    <button className="greenButton">Оформить заказ! <img src={props.arrow} alt="arrow" /></button>  
                </div>                         
            </div>               
            </div>
        </div>
    );
}

export default Drawer;