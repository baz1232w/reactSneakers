import {connect} from "react-redux";
import Slider from "./Slider/Slider";
import ItemsPage from "./ItemsPage/ItemsPage";
import {
    setPrefer,
    setCart, setTotalPrice,
} from "./mainPage-reducer";
import {compose} from "redux";

const MainPage = (props) => {

    return (
        <div>
            <Slider/>
            <ItemsPage {...props}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    items: state.mainPage.items,
})

export default compose(
    connect(mapStateToProps, {
        setPrefer,
        setCart,
        setTotalPrice
    })
)(MainPage)
