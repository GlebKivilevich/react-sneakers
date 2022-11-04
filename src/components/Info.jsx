import {useContext} from 'react'
import AppContext from '../context';

const Info = ({titel, img, description}) => {
    const {setCartOpened} = useContext(AppContext);
  return (
    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
        <img className="mb-20" width="120px" src={img} alt="Empty"/>
        <h2>{titel}</h2>
        <p className="opacity-6">{description}</p>
        <button onClick={() => setCartOpened(false)} className="greenButton">
            <img src="/image/arrow.svg" alt="Arrow"/>
            Вернуться назад
        </button>
    </div>
  )
}
export default Info;