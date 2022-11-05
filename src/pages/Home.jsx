import Card from "../components/Card/Card";
function Home({
    items,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToCart,
    onAddToFavorit,
    isLoading
}) {
    const renderItems = () => {
        const filteredItems = items.filter((item) => 
            item.titel.toLowerCase().includes(searchValue.toLowerCase()),
        );
        return ( isLoading ? [...Array(8)] : filteredItems).map((item, index) => (
            <Card 
                key={index}
                onPlus={(obj) => onAddToCart(obj)}
                onFavorit={obj => onAddToFavorit(obj)}
                isLoading={isLoading}   
                {...item}                                                        
            />
        ))
    }

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
        <div className="d-flex flex-wrap m-auto justify-center">
            {renderItems()}
        </div>         
        </div>
    );
}

export default Home;