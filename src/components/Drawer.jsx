function Drawer({onClose, items = [], onRemove}) {
    
    return (
        <div className="overlay">
            <div className="drawer">
            <h2 className="d-flex justify-between mb-20">Корзина <img onClick={() => onClose()} className="removeBtn cu-p" src="/image/btn-remove.svg" alt="Close"/></h2>
            {
                items.length > 0 ? 
                ( 
                <div className="items">
                {   items.map((obj, index) => (
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
                            <img onClick={() => onRemove(obj.id)} className="removeBtn" src="/image/btn-remove.svg" alt="Remove" />
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
                ) 
                : 
                (
                <div className="cartEmpty d-flex align-center justify-center flex-column flex">
                    <img className="mb-20" width="120px" height="120px" src="/image/empty-cart.jpg" alt=""/>
                    <h2>Корзина пуста</h2>
                    <p className="opacity-6">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                    <button onClick={() => onClose()} className="greenButton">
                        <img src="/image/arrow.svg" alt="Arrow"/>
                        Вернуться назад
                    </button>
                </div>
                )
            }
            

                          
            </div>
        </div>
    );
}

export default Drawer;