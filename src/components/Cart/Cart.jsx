import {connect} from 'react-redux';
import style from './Cart.module.css'
import ItemCart from "./ItemCart/ItemCart";
import {deleteCartItem, getItemsInCartThunk, getOrder, setTotalPrice, toggleCart} from "./cart-reducer";
import {useEffect} from "react";
import emptyImage from "../../assets/img/emptyCart.png";
import {NavLink} from "react-router-dom";
import {getProfileItems} from "../ProfilePage/profilePage-reducer";

const Cart = ({
                  isOpen,
                  items,
                  toggleCart,
                  getItemsInCartThunk,
                  totalPrice,
                  setTotalPrice,
                  deleteCartItem,
                  getProfileItems
              }) => {
    useEffect(() => {
        getItemsInCartThunk()
        setTotalPrice()
    }, [])

    const cartToggling = () => {
        const body = document.querySelector('body')
        body.classList.remove('hidden')
        toggleCart()
    }

    return (
        <div className={isOpen ? style.open : style.close}>
            <div className={style.overlay} onClick={cartToggling}></div>
            <div className={style.cart}>
                {items.length > 0
                    ? <>
                        <div>
                            <h3>Корзина</h3>
                            {items.map(el => {
                                return (
                                    <ItemCart deleteCartItem={deleteCartItem}
                                              id={el.id} img={el.img} tittle={el.tittle}
                                              price={el.price} key={el.id}/>
                                )
                            })}
                        </div>
                        <div>
                            <p className={style.totalPrice}>Итого : {totalPrice ? `${totalPrice} грн.` : null}</p>
                            <button className={style.orderBtn} onClick={()=>
                                getProfileItems(items)
                            }>Оформить заказ</button>
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
    items: state.cart.items,
    isOpen: state.cart.isOpen,
    totalPrice: state.cart.totalPrice
})

export default connect(mapStateToProps, {
    toggleCart,
    deleteCartItem,
    getItemsInCartThunk,
    getProfileItems,
    setTotalPrice,
})(Cart)
