import style from "../../MainPage/MainPage.module.css";
import Item from "../../MainPage/ItemsPage/Items/Item";

const OrderedItems = ({items,setTotalPrice,setCart,setPrefer}) => {
    return (
        <div className={style.itemsPage}>
            <div className={style.headOfItemsPage}>
                <h2>Мои покупки</h2>
            </div>
            <div className={style.gridItems}>
                {items.map(el => {if(el.isOrdered){
                    return (
                        <Item
                            setTotalPrice={setTotalPrice}
                            setCart={setCart} setPrefer={setPrefer}
                            code={el.code} key={el.id} id={el.id} img={el.img} tittle={el.tittle}
                            price={el.price} isPrefer={el.isPrefer} isAdded={el.isAdded}

                        />
                    )
                }})
                }
            </div>
        </div>
    )
}

export default OrderedItems