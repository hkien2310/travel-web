import { useContext, useState } from "react";
import ModelContext from "../context/ModelContext";
import { OPEN_MODEL } from "../context/type/ModelType";

const Login = (props) => {
  const {dispatch} = useContext(ModelContext);
  const [stateLogin, setStateLogin] = useState({
    email: "",
    password: ""
  })
  const loginForm = (e) => {
    e.preventDefault();
    console.log(stateLogin)
  }
    return (
      <form onSubmit={loginForm}>
        <div className="model_heading">Login</div>
        <div className="group">
          <input
            type="email"
            name=""
            className="group_control"
            placeholder="Enter Email"
            value={stateLogin.email}
            onChange={(e) => setStateLogin({...stateLogin, email: e.target.value})}
          />
        </div>
        <div className="group">
          <input
            type="password"
            name=""
            className="group_control"
            placeholder="Enter Password"
            value={stateLogin.password}
            onChange={(e) => setStateLogin({...stateLogin, password: e.target.value})}
          />
        </div>
        <div className="group flex">
            <input type="submit" value="Login" className="btn_dark"/>
            <span onClick={() => dispatch({type: OPEN_MODEL, payload: props.currentModel})}>Create an account?</span>
        </div>
      </form>
    );
  };
  export default Login;
  