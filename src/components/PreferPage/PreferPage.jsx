import {connect} from "react-redux";
import style from "../MainePage/MainePage.module.css";
import Item from "../MainePage/Items/Item/Item";
import {unPrefer, deleteCart, setPrefer, addToCart, setTotalPrice} from "../MainePage/manePage-reducer";
import emptyImage from "../../assets/img/emptyImage2.png";
import {NavLink} from "react-router-dom";

const PreferPage = ({items, getPreferItems, unPreferItem, ...props}) => {

    return (
        <>
            {items.some(el => el.isPrefer === true)
                ? <div className={style.itemsPage}>
                    <div className={style.headOfItemsPage}>
                        <h2>Мои закладки</h2>
                    </div>
                    <div className={style.gridItems}>
                        {items ? items.map(el => {
                                if (el.isPrefer) {
                                    return (
                                        <Item
                                            deleteCart={props.deleteCart} addToCart={props.addToCart} unPrefer={props.unPrefer}
                                            setPrefer={props.setPrefer} setTotalPrice={props.setTotalPrice}
                                            isPrefer={el.isPrefer}
                                            code={el.code}
                                            id={el.id} key={el.id} img={el.img} tittle={el.tittle} price={el.price}
                                            isAdded={el.isAdded}/>
                                    )
                                }
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
    items: state.mainPage.items,
})

export default connect(mapStateToProps, {
    unPrefer,
    setPrefer,
    addToCart,
    deleteCart,
    setTotalPrice
})(PreferPage)