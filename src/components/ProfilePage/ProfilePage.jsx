import {connect} from "react-redux";
import EmptyOrder from "./EmptyOreder/EmptyOrder";
import OrderedItems from "./OrderedItems/OrderedItems";
import {setCart, setPrefer, setTotalPrice} from "../MainPage/mainPage-reducer";

const ProfilePage = (props) => {

    return (
        <>
            {props.items.some(el => el.isOrdered)
                ? <OrderedItems {...props} />
                : <EmptyOrder/>
            }
        </>
    )
}

const mapStateToProps = (state) => ({
    items: state.mainPage.items
})

export default connect(mapStateToProps, {
    setPrefer,
    setCart,
    setTotalPrice
})(ProfilePage)