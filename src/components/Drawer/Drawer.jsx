import React, { useState } from "react";
import axios from "axios";

import { useCart } from "../../hooks/useCart";
import Info from "../Info";

import styles from "./Drawer.module.scss";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

function Drawer({onClose, items = [], onRemove, oppened}) {
    const {cartItems, setCartItems, totalPrice} = useCart();
    const [isOrderComplete, setIsOrderComplete] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [orderId, setOrderId] = useState(0);


    const onRemoveDrawer = async () => {
         for (let i = 0; i < cartItems.length; i++) {
            const item = cartItems[i];
            await axios.delete(`https://6353e31eccce2f8c02fe9c98.mockapi.io/cart/${item.id}`);
            await delay(1000);
        }     
    }

    const onClickOrder = async () => {
        try {            
            setIsLoading(true);            
                const {data} = await axios.post("https://6353e31eccce2f8c02fe9c98.mockapi.io/orders", {
                    items: cartItems,
            });   
            setOrderId(data.id);  
            setIsOrderComplete(true);
            onRemoveDrawer();
            setCartItems([]); 
            
        } catch (error) {
            alert("Ошибка при создании заказа =(");
        }
        setIsLoading(false);         
    }

    return (
        <div className={`${styles.overlay} ${oppened ? styles.overlayVisible : ""}`}>
            <div className={styles.drawer}>
            <h2 className="d-flex justify-between mb-20">Корзина <img onClick={() => onClose()} className="removeBtn cu-p" src="/image/btn-remove.svg" alt="Close"/></h2>
            {
                items.length > 0 ? 
                ( 
                <div className="d-flex flex-column flex">
                    <div className="items flex">
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
                                <b>{totalPrice}руб.</b>
                            </li>
                            <li>
                                <span>Налог 5%:</span>
                                <div></div>
                                <b>{((totalPrice / 100) * 5).toFixed(2)} руб. </b>
                            </li>
                            </ul>   
                            <button disabled={isLoading} onClick={onClickOrder} className="greenButton">Оформить заказ! <img src="/image/arrow.svg" alt="arrow" /></button>  
                        </div>                         
                    </div> 
                </div>
                
                ) 
                : 
                (
                    <Info 
                        titel={isOrderComplete ? "Заказ оформлен!" : "Корзина пуста" }
                        img={isOrderComplete ? "/image/complete-order.jpg" :"/image/empty-cart.jpg"} 
                        description={isOrderComplete ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."}
                    />
                
                )
            }             
            </div>
        </div>
    );
}
export default Drawer;
