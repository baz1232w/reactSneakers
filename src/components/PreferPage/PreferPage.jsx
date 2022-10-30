import {connect} from "react-redux";
import {setCart, setPrefer, setTotalPrice} from "../MainPage/mainPage-reducer";
import EmptyPrefer from "./EmptyPrefer/EmptyPrefer";
import PreferItems from "./PreferItems/PreferItems";

const PreferPage = (props) => {

    return (
        <>
            {props.items.some(el => el.isPrefer === true)
                ? <PreferItems {...props} />
                :<EmptyPrefer/>
            }
        </>
    )
}

const mapStateToProps = (state) => ({
    items: state.mainPage.items,
})

export default connect(mapStateToProps, {
    setPrefer,
    setCart,
    setTotalPrice
})(PreferPage)