import {NAV_TOGGLE} from "../type/NavType"
const NavReducer = (state, action) => {
    if (action.type === NAV_TOGGLE) {
        return !state;
    } else {
        return state;
    }
}
export default NavReducer;