import {useParams} from "react-router-dom";

const withRouter = (Component) => {
    const RouterComponent = (props) => {
        const params = useParams()
        return(
            <Component params={params} props={props}/>
        )
    }
    return RouterComponent
}

export default withRouter