import {connect} from 'react-redux';
import style from './Cart.module.css'
import {setOrderComplete, toggleCart} from "./cart-reducer";
import {getOrdered, setCart, setTotalPrice} from "../MainPage/mainPage-reducer";
import OrderedComplete from "./OrderedComplete/Ordered";
import Empty from "./Empty/Empty";
import OrderedPlace from "./OrderedPlace/OrderedPlace";

const Cart = ({items,isOpen,totalPrice,setOrderComplete,getOrdered,setTotalPrice,setCart,toggleCart,orderComplete}) => {

    const cartToggling = () => {
        const body = document.querySelector('body')
        body.classList.remove('hidden')
        toggleCart()
    }

    return (
        <div className={isOpen ? style.open : style.close}>
            <div className={style.overlay} onClick={cartToggling}></div>
            <div className={style.cart}>
                {
                    orderComplete
                        ? <OrderedComplete cartToggling={cartToggling}/>
                        : items.some(el => el.isAdded)
                            ? <OrderedPlace totalPrice={totalPrice} setOrderComplete={setOrderComplete}
                                            getOrdered={getOrdered} setTotalPrice={setTotalPrice}
                                            setCart={setCart} items={items}
                            />
                            : <Empty cartToggling={cartToggling} />
                }
            </div>

        </div>
    )
}

const mapStateToProps = (state) => ({
    items: state.mainPage.items,
    totalPrice: state.mainPage.totalPrice,
    isOpen: state.cart.isOpen,
    orderComplete: state.cart.orderComplete
})

export default connect(mapStateToProps, {
    toggleCart,
    setCart,
    getOrdered,
    setOrderComplete,
    setTotalPrice
})(Cart)
