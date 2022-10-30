import style from "../Cart.module.css";
import {NavLink} from "react-router-dom";
import emptyImage from "../../../assets/img/eventImages/emptyCart.png";

const Empty = (props) => {
    return (
        <div>
            <h3>Корзина</h3>
            <div className={style.emptyPage}>
                <div>
                    <img src={emptyImage} alt="image"/>
                    <h3>Корзина пустая</h3>
                    <p>Добавьте хотя бы одну пару</p>
                    <p>кроссовок, чтобы сделать заказ.</p>
                    <div>
                        <NavLink onClick={props.cartToggling} to={'/main'}>
                            <button className={style.backBtn}>Вернуться назад</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Empty