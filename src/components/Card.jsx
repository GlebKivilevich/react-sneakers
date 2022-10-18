// // import sneakers from "../img/sneakers/sneakerF.jpg";
// // import sneakersTwo from "../img/sneakers/sneakerS.jpg";
// // import sneakersThree from "../img/sneakers/sneakerTh.jpg";
// import heartUnLike from "../img/heartUnLike.svg";
// import heartLike from "../img/heartLike.svg";
// import btnRemove from "../img/btn-remove.svg";
// import plus from "../img/plus.svg";

function Card(props) {
    return (
        <div className="card">
            <div className="favorite">
              <img src={props.userLike ? "/image/heartLike.svg" : "/image/heartUnLike.svg"} alt="UnLike"/>
            </div>
            
            <img width={133} hight={133} src={props.sneakers} alt="Sneakers"/>
            <h5>{props.titel}</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>{props.price}</b>
              </div>
              <button className="button">
                <img className="d-flex" width={20} hight={20} src="../../public/image/plus" alt=""/>
              </button>
            </div>
        </div>
    );
}

export default Card;