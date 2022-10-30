import style from "../../Cart.module.css";

const Total = (props) => {
    return (
        <div>
            <p className={style.totalPrice}>Итого:{` ${props.totalPrice} грн.`}</p>
            <button className={style.orderBtn} onClick={() => {
                props.setOrderComplete(true);
                props.getOrdered();
                props.setTotalPrice();
            }}>Оформить заказ
            </button>
        </div>
    )
}

export default Total