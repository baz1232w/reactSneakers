import style from "../Header.module.css";
import {IonIcon} from "@ionic/react";
import {cartOutline, heartCircleOutline, homeOutline, personOutline} from "ionicons/icons";
import {NavLink} from "react-router-dom";

const Navigation = ({cartToggling,totalPrice}) => {
    return(
        <div className={style.navigation}>
            <NavLink to={'/main'}><IonIcon icon={homeOutline}></IonIcon></NavLink>
            <div><IonIcon onClick={cartToggling
            } icon={cartOutline}></IonIcon></div>
            <div>
                <span onClick={cartToggling} className={style.totalPrice}>{totalPrice ? `${totalPrice} грн.` : null }</span>
            </div>
            <NavLink to={'/prefer'}><IonIcon icon={heartCircleOutline}></IonIcon></NavLink>
            <NavLink to={'/profile'}><IonIcon icon={personOutline}></IonIcon></NavLink>
        </div>
    )
}

export default Navigation