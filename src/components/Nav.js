import { useContext } from "react";
import { Link } from "react-router-dom";
import NavContext from "../context/NavContext";
import { NAV_TOGGLE } from "../context/type/NavType";

const Nav = () => {
  const { state, dispatch } = useContext(NavContext);
  return (
    <>
    {state ? <div className="navLayer" onClick={() => dispatch({type: NAV_TOGGLE})}></div> : ""}
        <div className={state ? "nav nav_open" : "nav nav_close"}>
          <div className="nav_content">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
    </>
  );
};
export default Nav;
