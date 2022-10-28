import {connect} from "react-redux";
import Slider from "./Slider/Slider";
import Items from "./Items/Items";
import {useEffect} from "react";
import {
    deleteCart,
    setPrefer,
    unPrefer,
    addToCart,
} from "./manePage-reducer";
import {compose} from "redux";

const MainePage = ({items, ...props}) => {

    return (
        <div>
            <Slider/>
            {items ?
                <Items deleteCart={props.deleteCart} addToCart={props.addToCart} unPrefer={props.unPrefer}
                       setPrefer={props.setPrefer} items={items}/> : <div>Null</div>}
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
        addToCart
    })
)(MainePage)
