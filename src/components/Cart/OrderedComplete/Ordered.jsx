import style from "../Cart.module.css";
import orderImage from "../../../assets/img/eventImages/orderPage.jpg";
import {NavLink} from "react-router-dom";

const OrderedComplete = (props) => {
    return (
        <div>
            <h3>Корзина</h3>
            <div className={style.emptyPage}>
                <div>
                    <img src={orderImage} alt="image"/>
                    <h3>Заказ оформлен!</h3>
                    <p>Ваш заказ #18 скоро будет передан</p>
                    <p>курьерской доставке</p>
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

export default OrderedComplete