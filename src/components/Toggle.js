import { useContext } from "react";
import NavContext from "../context/NavContext";
import {NAV_TOGGLE} from "../context/type/NavType"
const Toggle = () => {
    const {state, dispatch} = useContext(NavContext);
    return (
        <div className={state ? "toggle toggle_close" : "toggle toggle_open"} onClick={() => dispatch({type: NAV_TOGGLE})}>
            <span></span>   
            <span></span>
            <span></span>
        </div>
    )
}
export default Toggle;