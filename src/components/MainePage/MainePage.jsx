import {connect} from "react-redux";
import Slider from "./Slider/Slider";
import Items from "./Items/Items";
import {useEffect} from "react";
import {addedToCart, deleteFromCart, getItemsThunk, preferItem, unPrefer, unPreferItem} from "./manePage-reducer";
import {addToCart, deleteCartItem} from "../Cart/cart-reducer";
import {compose} from "redux";

const MainePage = ({items, ...props}) => {
    useEffect(() => {
        props.getItemsThunk()
    }, [props.favoriteItems,props.cart])

    return (
        <div>
            <Slider/>
            {items ?
                <Items deleteCartItem={props.deleteCartItem} deleteFromCart={props.deleteFromCart} addedToCart={props.addedToCart} unPreferItem={props.unPreferItem} preferItem={props.preferItem}
                       items={items} addToCart={props.addToCart}/> : <div>Null</div>}
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
        getItemsThunk,
        addToCart,
        preferItem,
        unPreferItem,
        addedToCart,
        deleteFromCart,
        deleteCartItem
    })
)(MainePage)
