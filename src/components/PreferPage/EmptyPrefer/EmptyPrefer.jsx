import style from "../../MainPage/MainPage.module.css";
import emptyImage from "../../../assets/img/eventImages/emptyImage1.png";
import {NavLink} from "react-router-dom";

const EmptyPrefer = () => {
    return (
        <div className={style.emptyPage}>
            <div>
                <img src={emptyImage} alt="image"/>
                <h3>Закладок нет :(</h3>
                <p>Вы ничего не добавляли в закладки</p>
                <div>
                    <NavLink to={'/main'}>
                        <button className={style.backBtn}>Вернуться назад</button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default EmptyPrefer