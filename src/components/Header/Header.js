import {connect} from "react-redux";
import style from './Header.module.css'
import Logo from "./Logo/Logo";
import {NavLink} from "react-router-dom";
import {getItemsInCartThunk, setOrderComplete, toggleCart} from "../Cart/cart-reducer";

export const Header = ({logo,toggleCart,totalPrice,setOrderComplete}) => {

    const cartToggling = () =>{
        const body = document.querySelector('body')
        body.classList.add('hidden')
        setOrderComplete(false)
        toggleCart()
    }

    return (
        <div className={style.header}>
            <div>
                <Logo logo={logo}/>
            </div>
            <div className={style.navigation}>
                <div><ion-icon onClick={cartToggling
                } name="cart-outline"></ion-icon></div>
                <div>
                    <span className={style.totalPrice}>{totalPrice ? `${totalPrice} грн.` : null }</span>
                </div>
                <NavLink to={'/prefer'}><ion-icon name="heart-outline"></ion-icon></NavLink>
                <NavLink to={'/profile'}><ion-icon name="person-outline"></ion-icon></NavLink>
            </div>
        </div>


    )
}

const mapStateToProps = (state) => ({
    logo: state.header.logo,
    totalPrice: state.cart.totalPrice
})


export default connect(mapStateToProps, {
    toggleCart,
    getItemsInCartThunk,
    setOrderComplete
})(Header)