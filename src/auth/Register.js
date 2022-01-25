import { useContext, useState } from "react";
import ModelContext from "../context/ModelContext";
import { OPEN_MODEL } from "../context/type/ModelType";
const Register = (props) => {
  const {dispatch} = useContext(ModelContext);
  const [stateRegister, setStateRegister] = useState({
    name : "",
    email : "",
    password: ""
  })
  const registerForm = (e) => {
    e.preventDefault();
    console.log(stateRegister)
  }
  return (
    <form onSubmit={registerForm}>
      <div className="model_heading">Create Account</div>
      <div className="group">
        <input
          type="text"
          name="name"
          className="group_control"
          placeholder="Enter Name"
          onChange={(e) => setStateRegister({...stateRegister, name: e.target.value})}
          value={stateRegister.name}
        />
      </div>
      <div className="group">
        <input
          type="email"
          name="email"
          className="group_control"
          placeholder="Enter Email"
          onChange={(e) => setStateRegister({...stateRegister, email: e.target.value})}
          value={stateRegister.email}
        />
      </div>
      <div className="group">
        <input
          type="password"
          name="password"
          className="group_control"
          placeholder="Enter Password"
          onChange={(e) => setStateRegister({...stateRegister, password: e.target.value})}
          value={stateRegister.password}
        />
      </div>
      <div className="group flex">
          <input type="submit" value="Register" className="btn_dark"/>
          <span onClick={() => dispatch({type: OPEN_MODEL, payload: props.currentModel}) }>Already have an account?</span>
      </div>
    </form>
  );
};
export default Register;
