import {connect} from 'react-redux';
import style from './Cart.module.css'
import ItemCart from "./ItemCart/ItemCart";
import {setOrderComplete, setTotalPrice, toggleCart} from "./cart-reducer";
import {useEffect} from "react";
import emptyImage from "../../assets/img/emptyCart.png";
import orderImage from "../../assets/img/orderPage.jpg";
import {NavLink} from "react-router-dom";
import {deleteCart, getOrdered} from "../MainePage/manePage-reducer";

const Cart = ({
                  isOpen,
                  items,
                  toggleCart,
                  totalPrice,
                  setTotalPrice,
                  deleteCart,
                  getOrdered,
                  setOrderComplete,
                  orderComplete
              }) => {
    useEffect(() => {
        setTotalPrice()
    }, [items])

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
                        : items.some(el => el.isAdded === true)
                            ? <>
                                <div>
                                    <h3>Корзина</h3>
                                    {items.map(el => {
                                        if (el.isAdded) {
                                            return (
                                                <ItemCart deleteCart={deleteCart}
                                                          code={el.code} img={el.img} tittle={el.tittle}
                                                          price={el.price} key={el.id}/>
                                            )
                                        }
                                    })}
                                </div>
                                <div>
                                    <p className={style.totalPrice}>Итого : {totalPrice ? `${totalPrice} грн.` : null}</p>
                                    <button className={style.orderBtn} onClick={() => {
                                        setOrderComplete(true);
                                        getOrdered()
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
    totalPrice: state.cart.totalPrice
})

export default connect(mapStateToProps, {
    toggleCart,
    setTotalPrice,
    deleteCart,
    getOrdered,
    setOrderComplete
})(Cart)
