import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

import Card from "../components/Card/Card"; 
import AppContext from "../context";

function Orders(props) {
    const {onAddToCart, onAddToFavorit} = useContext(AppContext);
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect (() => {
        async function fetchOrder () {
            try {
                const { data } = await axios.get("https://6353e31eccce2f8c02fe9c98.mockapi.io/orders");
                setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
                 
                 setIsLoading(false)
            } catch (error) {
                alert("Ошибка при запросе заказов")
                console.error(error);
            }            
        }
        fetchOrder();
    }, []);
   
    return (
        <div className="content p-40 ">
        <div className="d-flex align-center justify-between mb-40">   
            <h1>Мои заказы</h1>        
        </div>
        <div className="d-flex flex-wrap" style={{color: "#222"}}>        
        {( isLoading ? [...Array(4)] : orders).map((item, index) => (
            <Card
                key={index}
                isLoading={isLoading}   
                {...item}    
            /> 
            ))
        }
        </div>         
        </div>
    );
}

export default Orders;