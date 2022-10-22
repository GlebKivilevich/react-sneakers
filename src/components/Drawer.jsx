function Drawer({onClose, items = []}) {
    console.log(items);
    return (
        <div className="overlay">
            <div className="drawer">
            <h2 className="d-flex justify-between mb-20">Корзина <img onClick={() => onClose()} className="removeBtn cu-p" src="/image/btn-remove.svg" alt="Close"/></h2>

            <div className="items">
                {items.map((obj, index) => (
                    <div key={index} className="cartItem d-flex align-center mb-20">
                        <img 
                            className="mr-20"
                            width={70} 
                            hight={70} 
                            src={obj.sneakers}
                            alt="sneakers"
                        />               
                        <div className="mr-20">
                        <p className="mb-5">{obj.titel}</p>
                        <b>{obj.price} руб.</b>
                        </div>
                        <img className="removeBtn" src="/image/btn-remove.svg" alt="Remove" />
                    </div> 
                ))
                }
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
                    <button className="greenButton">Оформить заказ! <img src="/image/arrow.svg" alt="arrow" /></button>  
                </div>                         
            </div>               
            </div>
        </div>
    );
}

export default Drawer;