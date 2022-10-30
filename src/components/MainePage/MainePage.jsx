import {connect} from "react-redux";
import Slider from "./Slider/Slider";
import Items from "./Items/Items";
import {
    setPrefer,
    setCart, setTotalPrice,
} from "./manePage-reducer";
import {compose} from "redux";

const MainePage = ({items, ...props}) => {

    return (
        <div>
            <Slider/>
                <Items setCart={props.setCart} setPrefer={props.setPrefer} setTotalPrice={props.setTotalPrice}
                       items={items}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    items: state.mainPage.items,
    cart: state.cart.items
})

export default compose(
    connect(mapStateToProps, {
        setPrefer,
        setCart,
        setTotalPrice
    })
)(MainePage)
