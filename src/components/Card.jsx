
function Card(props) {
    return (
        <div className="card">
            <div className="favorite">
              <img src={props.heartUnLike} alt="UnLike"/>
            </div>
            
            <img width={133} hight={133} src={props.sneakers} alt="Sneakers"/>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img className="d-flex" width={20} hight={20} src={props.plus} alt=""/>
              </button>
            </div>
        </div>
    );
}

export default Card;