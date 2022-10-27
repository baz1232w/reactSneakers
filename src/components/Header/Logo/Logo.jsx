import style from "../Header.module.css";
import logoImage from "../../../assets/img/logo.png";
import {NavLink} from "react-router-dom";

const Logo = ({logo}) => {
    return (
        <div className={style.logo}>
            <img src={logoImage} alt="logo"/>
            <div>
                <NavLink to={'/main'}><h1 className={style.tittle}>{logo.tittle}</h1></NavLink>
                <h2 className={style.afterTittle}>{logo.afterTittle}</h2>
            </div>
        </div>
    )
}

export default Logo