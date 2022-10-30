import {connect} from "react-redux";
import style from './Header.module.css'
import Logo from "./Logo/Logo";
import {setOrderComplete, toggleCart} from "../Cart/cart-reducer";
import Navigation from "./Navigation/Navigation";

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
            <Navigation totalPrice={totalPrice} cartToggling={cartToggling}/>
        </div>


    )
}

const mapStateToProps = (state) => ({
    totalPrice:state.mainPage.totalPrice
})


export default connect(mapStateToProps, {
    toggleCart,
    setOrderComplete
})(Header)