import style from "../Cart.module.css";
import ItemCart from "../ItemCart/ItemCart";
import Total from "./Total/Total";

const OrderedPlace = ({items,totalPrice,getOrdered,setOrderComplete,setTotalPrice,setCart}) => {
    return (
        <>
            <div className={style.cartScope}>
                <h3>Корзина</h3>
                {items.map(el => {
                    if (el.isAdded) {
                        return (
                            <ItemCart setCart={setCart} setTotalPrice={setTotalPrice}
                                      code={el.code} img={el.img} tittle={el.tittle}
                                      price={el.price} key={el.id}/>
                        )
                    }
                })}
            </div>
            <Total totalPrice={totalPrice} setOrderComplete={setOrderComplete}
                   getOrdered={getOrdered} setTotalPrice={setTotalPrice}
            />
        </>
    )
}

export default OrderedPlace