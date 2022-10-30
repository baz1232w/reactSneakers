import {connect} from "react-redux";
import style from "../MainPage/MainPage.module.css";
import Item from "../MainPage/ItemsPage/Item/Item";
import {NavLink} from "react-router-dom";
import emptyImage from '../../assets/img/emptyImage1.png'

const ProfilePage = ({items}) => {

    return (
        <>
            {items.some(el => el.isOrdered)
            ?<div className={style.itemsPage}>
                    <div className={style.headOfItemsPage}>
                        <h2>Мои покупки</h2>
                    </div>
                    <div className={style.gridItems}>
                        {items.map(el => {if(el.isOrdered){
                            return (
                                <Item key={el.id} img={el.img} tittle={el.tittle} price={el.price}/>
                            )
                        }})
                        }
                    </div>
                </div>
            : <div className={style.emptyPage}>
                    <div>
                        <img src={emptyImage} alt="image"/>
                        <h3>У вас нет заказов</h3>
                        <p>Вы нищеброд? </p>
                        <p>Оформите хотя бы один заказ.</p>
                        <div >
                            <NavLink to={'/main'}><button className={style.backBtn}>Вернуться назад</button></NavLink>
                        </div>
                    </div>
                </div>
            }
        </>




    )
}

const mapStateToProps = (state) => ({
    items: state.mainPage.items
})

export default connect(mapStateToProps, {
})(ProfilePage)