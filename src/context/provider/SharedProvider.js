import { useReducer } from "react";
import SharedContext from "../SharedContext";
import SharedReducer from "../reducer/SharedReducer";
import services from "../../data/services";
import reviews from "../../data/reviews"
const SharedProvider = (props) => {
    const [sharedData, dispatch] = useReducer(SharedReducer, {
        servicesData: services,
        reviewsData: reviews
    })
    return(
        <SharedContext.Provider value={{sharedData, dispatch}}>
            {props.children}
        </SharedContext.Provider>
    )
}
export default SharedProvider