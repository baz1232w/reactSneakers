import {connect} from 'react-redux';
import style from './Cart.module.css'
import ItemCart from "./ItemCart/ItemCart";
import {setOrderComplete, toggleCart} from "./cart-reducer";
import emptyImage from "../../assets/img/emptyCart.png";
import orderImage from "../../assets/img/orderPage.jpg";
import {NavLink} from "react-router-dom";
import {getOrdered, setCart, setTotalPrice} from "../MainePage/manePage-reducer";

const Cart = (props) => {

    const cartToggling = () => {
        const body = document.querySelector('body')
        body.classList.remove('hidden')
        props.toggleCart()
    }

    return (
        <div className={props.isOpen ? style.open : style.close}>
            <div className={style.overlay} onClick={cartToggling}></div>
            <div className={style.cart}>
                {
                    props.orderComplete
                        ? <div>
                            <h3>Корзина</h3>
                            <div className={style.emptyPage}>
                                <div>
                                    <img src={orderImage} alt="image"/>
                                    <h3>Заказ оформлен!</h3>
                                    <p>Ваш заказ #18 скоро будет передан</p>
                                    <p>курьерской доставке</p>
                                    <div>
                                        <NavLink onClick={cartToggling} to={'/main'}>
                                            <button className={style.backBtn}>Вернуться назад</button>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        : props.items.some(el => el.isAdded === true)
                            ? <>
                                <div className={style.cartScope}>
                                    <h3>Корзина</h3>
                                    {props.items.map(el => {
                                        if (el.isAdded) {
                                            return (
                                                <ItemCart setCart={props.setCart} setTotalPrice={props.setTotalPrice}
                                                          code={el.code} img={el.img} tittle={el.tittle}
                                                          price={el.price} key={el.id}/>
                                            )
                                        }
                                    })}
                                </div>
                                <div>
                                    <p className={style.totalPrice}>Итого : {props.totalPrice ? `${props.totalPrice} грн.` : null}</p>
                                    <button className={style.orderBtn} onClick={() => {
                                        props.setOrderComplete(true);
                                        props.getOrdered();
                                        props.setTotalPrice();
                                    }}>Оформить заказ
                                    </button>
                                </div>
                            </>
                            : <div>
                                <h3>Корзина</h3>
                                <div className={style.emptyPage}>
                                    <div>
                                        <img src={emptyImage} alt="image"/>
                                        <h3>Корзина пустая</h3>
                                        <p>Добавьте хотя бы одну пару</p>
                                        <p>кроссовок, чтобы сделать заказ.</p>
                                        <div>
                                            <NavLink onClick={cartToggling} to={'/main'}>
                                                <button className={style.backBtn}>Вернуться назад</button>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>

                            </div>
                }


            </div>

        </div>
    )
}

const mapStateToProps = (state) => ({
    items: state.mainPage.items,
    isOpen: state.cart.isOpen,
    orderComplete: state.cart.orderComplete,
    totalPrice: state.mainPage.totalPrice
})

export default connect(mapStateToProps, {
    toggleCart,
    setCart,
    getOrdered,
    setOrderComplete,
    setTotalPrice
})(Cart)
