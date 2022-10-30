import { useState } from "react";
import styles from"./Card.module.scss";

function Card(props) {
    const {id, price, sneakers, titel, onPlus, onFavorit, favorited = false} = props;

    const [isAdded, setIsAdded] = useState(false);
    const [isFavorite, setIsFavorite] = useState(favorited);

    const onClickPlus = () => {
      onPlus({price, sneakers, titel});
      setIsAdded(!isAdded);
    }

    const onClickHeart = () => {
      onFavorit({id, titel, sneakers, price})
      setIsFavorite(!isFavorite);
    }

    return (
        <div className={styles.card}>
            <div onClick={() => onClickHeart()} className={styles.favorite}>
              <img src={isFavorite ? "/image/heartLike.svg" : "/image/heartUnLike.svg"} alt="UnLike"/>
            </div>            
            <img width={133} hight={133} src={sneakers} alt="Sneakers"/>
            <h5>{titel}</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>{price} руб</b>
              </div>
              <img className={styles.plus} onClick={() => onClickPlus()} src={isAdded ? "/image/btn-pluss-green.svg" : "/image/plus.svg" } alt=""/>
            </div>
        </div>
    );
}

export default Card;