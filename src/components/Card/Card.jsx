import styles from"./Card.module.scss";

console.log(styles);
function Card(props) {
    const {price, userLike, sneakers, titel} = props;

    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
              <img src={userLike ? "/image/heartLike.svg" : "/image/heartUnLike.svg"} alt="UnLike"/>
            </div>            
            <img width={133} hight={133} src={sneakers} alt="Sneakers"/>
            <h5>{titel}</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>{price} руб</b>
              </div>
              <button className="button">
                <img className="d-flex" width={20} hight={20} src="/image/plus.svg" alt=""/>
              </button>
            </div>
        </div>
    );
}

export default Card;