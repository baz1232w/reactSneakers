import {connect} from "react-redux";
import style from './Header.module.css'
import Logo from "./Logo/Logo";
import {NavLink} from "react-router-dom";
import {setOrderComplete, toggleCart} from "../Cart/cart-reducer";
import {IonIcon} from "@ionic/react";
import {cartOutline, heartCircleOutline, personOutline} from "ionicons/icons";

export const Header = ({toggleCart,setOrderComplete,totalPrice}) => {

    const cartToggling = () =>{
        const body = document.querySelector('body')
        body.classList.add('hidden')
        setOrderComplete(false)
        toggleCart()
    }

    return (
        <div className={style.header}>
            <div>
                <Logo/>
            </div>
            <div className={style.navigation}>
                <div><IonIcon onClick={cartToggling
                } icon={cartOutline}></IonIcon></div>
                <div>
                    <span className={style.totalPrice}>{totalPrice ? `${totalPrice} грн.` : null }</span>
                </div>
                <NavLink to={'/prefer'}><IonIcon icon={heartCircleOutline}></IonIcon></NavLink>
                <NavLink to={'/profile'}><IonIcon icon={personOutline}></IonIcon></NavLink>
            </div>
        </div>


    )
}

const mapStateToProps = (state) => ({
    totalPrice:state.mainPage.totalPrice,
})


export default connect(mapStateToProps, {
    toggleCart,
    setOrderComplete
})(Header)