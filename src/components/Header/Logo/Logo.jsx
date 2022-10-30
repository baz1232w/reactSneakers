import style from "../Header.module.css";
import logoImage from "../../../assets/img/logo.png";
import {NavLink} from "react-router-dom";

const Logo = () => {
    return (
        <div className={style.logo}>
            <img src={logoImage} alt="logo"/>
            <div>
                <NavLink to={'/main'}><h1 className={style.tittle}>REACT SNEAKERS</h1></NavLink>
                <h2 className={style.afterTittle}>Магазин лучших кроссовок</h2>
            </div>
        </div>
    )
}

export default Logo