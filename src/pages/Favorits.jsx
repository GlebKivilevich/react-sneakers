import Card from "../components/Card/Card";
function Favorits({items, onAddToFavorit, loading = false}) {
    return (
        <div className="content p-40 ">
        <div className="d-flex align-center justify-between mb-40">   
            <h1>Мои закладки</h1>        
        </div>
        <div className="d-flex flex-wrap" style={{color: "#222"}}>        
        {
            items.map((item, index) => (
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