import {connect} from "react-redux";
import Slider from "./Slider/Slider";
import Items from "./Items/Items";
import {
    deleteCart,
    setPrefer,
    unPrefer,
    addToCart, setTotalPrice,
} from "./manePage-reducer";
import {compose} from "redux";

const MainePage = ({items, ...props}) => {

    return (
        <div>
            <Slider/>
            {items ?
                <Items deleteCart={props.deleteCart} addToCart={props.addToCart} unPrefer={props.unPrefer}
                       setPrefer={props.setPrefer}  setTotalPrice={props.setTotalPrice} items={items}/> : <div>Null</div>}
        </div>
    )
}

const mapStateToProps = (state) => ({
    items: state.mainPage.items,
    favoriteItems: state.preferPage.items,
    cart:state.cart.items
})

export default compose(
    connect(mapStateToProps, {
        setPrefer,
        unPrefer,
        deleteCart,
        addToCart,
        setTotalPrice
    })
)(MainePage)
