import { useState, useContext } from "react";
import styles from"./Card.module.scss";
import ContentLoader from "react-content-loader"
import AppContext from "../../context";

function Card({
    id,
    price, 
    sneakers, 
    titel, 
    onPlus, 
    onFavorit, 
    favorited = false,
    isLoading = false,
  }) {
    const {isItemAdded} = useContext(AppContext);
    const [isFavorite, setIsFavorite] = useState(favorited);
    const itemObj = { id, parentId: id ,price, sneakers, titel }
    // или Context, или useEffect, результат один и тот-же,
    // ...мб useEffect работает чуть быстрее

    // useEffect(() => {
    //   setIsAdded(added);
    //   setIsFavorite(favorited); 
    // }, [added, favorited]);

    const onClickPlus = () => {
      onPlus(itemObj);
    }
    
    const onClickHeart = () => {
      onFavorit(itemObj)
      setIsFavorite(!isFavorite);
    }

    return (      
        <div className={styles.card}>
          { 
            isLoading ?
            
            <ContentLoader 
                speed={2}
                width={180}
                height={250}
                viewBox="0 0 160 250"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
              >
                <rect x="0" y="0" rx="10" ry="10" width="160" height="115" /> 
                <rect x="0" y="135" rx="3" ry="3" width="160" height="15" /> 
                
                <rect x="0" y="160" rx="3" ry="3" width="95" height="15" /> 
                <rect x="0" y="188" rx="8" ry="8" width="80" height="25" /> 
                <rect x="128" y="181" rx="10" ry="10" width="32" height="32" />
              </ContentLoader> 
              : 
              <>
                { onFavorit &&
                  <div onClick={() => onClickHeart()} className={styles.favorite}>
                    <img src={isFavorite ? "/image/heartLike.svg" : "/image/heartUnLike.svg"} alt="UnLike"/>
                  </div> 
                }         
                <img width={133} hight={133} src={sneakers} alt="Sneakers"/>
                <h5>{titel}</h5>
                <div className="d-flex justify-between align-center">
                  <div className="d-flex flex-column">
                    <span>Цена: </span>
                    <b>{price} руб</b>
                  </div>
                  {onPlus &&  <img 
                    className={styles.plus} 
                    onClick={() => onClickPlus()} 
                    src={isItemAdded(id) ? "/image/btn-pluss-green.svg" : "/image/plus.svg" } alt=""/>
                  }
                </div> 
              </>
          }
        </div>
    );
}

export default Card;