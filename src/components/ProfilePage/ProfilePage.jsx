import {connect} from "react-redux";
import style from "../MainePage/MainePage.module.css";
import Item from "../MainePage/Items/Item/Item";
import {getProfileItems} from "./profilePage-reducer";
import {NavLink} from "react-router-dom";
import emptyImage from '../../assets/img/emptyImage1.png'

const ProfilePage = ({items, getProfileItems}) => {
    // useEffect(() => {
    //     getProfileItems()
    // }, [])
    return (
        <>
            {items.length > 0
            ?<div className={style.itemsPage}>
                    <div className={style.headOfItemsPage}>
                        <h2>Мои покупки</h2>
                    </div>
                    <div className={style.gridItems}>
                        {items.map(el => {
                            return (
                                <Item key={el.id} img={el.img} tittle={el.tittle} price={el.price}/>
                            )
                        })
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
    items: state.profilePage.items
})

export default connect(mapStateToProps, {
    getProfileItems,
})(ProfilePage)