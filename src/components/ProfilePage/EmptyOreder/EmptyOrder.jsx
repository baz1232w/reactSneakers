import style from "../../MainPage/MainPage.module.css";
import emptyImage from "../../../assets/img/eventImages/emptyImage2.png";
import {NavLink} from "react-router-dom";

const EmptyOrder = () => {
    return (
        <div className={style.emptyPage}>
            <div>
                <img src={emptyImage} alt="image"/>
                <h3>У вас нет заказов</h3>
                <p>Вы нищеброд? </p>
                <p>Оформите хотя бы один заказ.</p>
                <div >
                    <NavLink to={'/main'}><button className={style.backBtn}>Вернуться назад</button></NavLink>
                </div>
            </div>
        </div>
    )
}

export default EmptyOrder