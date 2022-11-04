import { useContext } from "react";

import Card from "../components/Card/Card";
//
import AppContext from "../context";

function Favorits({onAddToFavorit, loading = false}) {

    const {favorites} = useContext(AppContext)
    console.log(favorites);
    return (
        <div className="content p-40 ">
        <div className="d-flex align-center justify-between mb-40">   
            <h1>Мои закладки</h1>        
        </div>
        <div className="d-flex flex-wrap" style={{color: "#222"}}>        
        {
            favorites.map((item, index) => (
            <Card 
                key={index} 
                favorited={true}
                onFavorit={onAddToFavorit}
                {...item}  
                loading={false}             
            /> 
            ))
        }
        </div>         
        </div>
    );
}

export default Favorits;