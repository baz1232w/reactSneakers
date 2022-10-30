import style from "../../MainPage/MainPage.module.css";
import Item from "../../MainPage/ItemsPage/Items/Item";

const PreferItems = (props) => {
    return (
        <div className={style.itemsPage}>
            <div className={style.headOfItemsPage}>
                <h2>Мои закладки</h2>
            </div>
            <div className={style.gridItems}>
                {props.items.map(el => {
                    if (el.isPrefer) {
                        return (
                            <Item
                                setCart={props.setCart}
                                setPrefer={props.setPrefer} setTotalPrice={props.setTotalPrice}
                                isPrefer={el.isPrefer}
                                code={el.code}
                                id={el.id} key={el.id} img={el.img} tittle={el.tittle} price={el.price}
                                isAdded={el.isAdded}/>
                        )
                    }
                })
                }
            </div>
        </div>
    )
}

export default PreferItems