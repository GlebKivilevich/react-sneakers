import Card from "../components/Card/Card";
function Home({
    items,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToCart,
    onAddToFavorit,
}) {
    return (
        <div className="content p-40 ">
        <div className="d-flex align-center justify-between mb-40">
            <h1> {searchValue ? `Поиск по запросу: ${searchValue}`: "Все кроссовки"}</h1>
            <div className="search-block d-flex">
                <img src="/image/search.svg" alt="Search"/>
                {searchValue && <img onClick={() => setSearchValue("")} className="cu-p clear" src="/image/btn-remove.svg" alt="Close"/>}
                <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
            </div>
        </div>
        <div className="d-flex flex-wrap m-auto">
        {
            items.filter((item) => item.titel.toLowerCase().includes(searchValue.toLowerCase()))
            .map((item, index) => (
            <Card 
                key={index} 
                id={item.id}
                titel={item.titel} 
                price={item.price} 
                sneakers={item.sneakers}
                userLike={item.userLike}
                onPlus={obj => onAddToCart(obj)}
                onFavorit={obj => onAddToFavorit(obj)}
            />
            ))
        }
        </div>         
        </div>
    );
}

export default Home;