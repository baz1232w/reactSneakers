import {connect} from "react-redux";
import style from "../MainePage/MainePage.module.css";
import Item from "../MainePage/Items/Item/Item";
import {useEffect} from "react";
import {getPreferItems} from "./preferPage-reducer";
import {addToCart, deleteCartItem} from "../Cart/cart-reducer";
import {addedToCart, deleteFromCart, unPreferItem} from "../MainePage/manePage-reducer";
import emptyImage from "../../assets/img/emptyImage2.png";
import {NavLink} from "react-router-dom";

const PreferPage = ({items, getPreferItems, addToCart, unPreferItem, ...props}) => {

    useEffect(() => {
        getPreferItems()
    }, [props.mainItems,props.cart])

    return (
        <>
            {items.length > 0
                ? <div className={style.itemsPage}>
                    <div className={style.headOfItemsPage}>
                        <h2>Мои закладки</h2>
                    </div>
                    <div className={style.gridItems}>
                        {items ? items.map(el => {
                                return (
                                    <Item addedToCart={props.addedToCart}deleteCartItem={props.deleteCartItem} deleteFromCart={props.deleteFromCart}
                                          unPreferItem={unPreferItem} isPrefer={el.isPrefer} addToCart={addToCart}
                                          id={el.id} key={el.id} img={el.img} tittle={el.tittle} price={el.price}
                                          isAdded={el.isAdded}/>
                                )
                            }) :
                            <div>Пусто</div>}
                    </div>
                </div>
                : <div className={style.emptyPage}>
                    <div>
                        <img src={emptyImage} alt="image"/>
                        <h3>Закладок нет :(</h3>
                        <p>Вы ничего не добавляли в закладки</p>
                        <div>
                            <NavLink to={'/main'}>
                                <button className={style.backBtn}>Вернуться назад</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

const mapStateToProps = (state) => ({
    items: state.preferPage.items,
    mainItems: state.mainPage.items,
    cart:state.cart.items
})

export default connect(mapStateToProps, {
    getPreferItems,
    addToCart,
    unPreferItem,
    deleteCartItem,
    deleteFromCart,
    addedToCart
})(PreferPage)