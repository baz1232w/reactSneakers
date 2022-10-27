import Item from './Item/Item';
import style from '../MainePage.module.css'

const Items = ({items, ...props}) => {
    return (
        <div className={style.itemsPage}>
            <div className={style.headOfItemsPage}>
                <h2>Все кроссовки</h2>
                <input type='search' placeholder={'Поиск...'}/>
            </div>
            <div className={style.gridItems}>
                {items.map(el => {
                    return (
                        <Item deleteCartItem={props.deleteCartItem} deleteFromCart={props.deleteFromCart} unPreferItem={props.unPreferItem} id={el.id}
                              code={el.code} preferItem={props.preferItem}
                              addToPrefer={props.addToPrefer} addToCart={props.addToCart} key={el.id}
                              img={el.img} tittle={el.tittle} price={el.price} isPrefer={el.isPrefer}
                              addedToCart={props.addedToCart} isAdded={el.isAdded}/>
                    )
                })}
            </div>
        </div>

    )
}

export default Items