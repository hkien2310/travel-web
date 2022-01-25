import { useState } from "react";
const ContactForm = () => {
    const [state, setState] = useState({
        name: "",
        email: "",
        message: "",
    })
    const submitContact = (e) => {
        e.preventDefault();
        console.log(state)
    }
  return (
    <form onSubmit={submitContact}>
      <div className="group animation">
        <h3 className="page_contact_heading">Contact Form</h3>
      </div>
      <div className="group animation">
        <input
            value={state.name}
          type="text"
          className="group_control"
          placeholder="Your name eg. smith"
          onChange={(e) => setState({...state, name: e.target.value})}
        />
      </div>
      <div className="group animation">
        <input
          type="email"
          value={state.email}
          className="group_control"
          placeholder="Your email eg. smith@gmail.com"
          onChange={(e) => setState({...state, email: e.target.value})}
        />
      </div>
      <div className="group animation">
        <textarea
          className="group_textarea"
          id=""
          cols="12"
          rows="8"
          defaultValue={state.message}
          onChange={(e) => setState({...state, message: e.target.value})}
          placeholder="write your message"
        />
      </div>
      <div className="group col-4 animation">
        <input
          type="submit"
          className="group_control btn_dark"
          value="Send email &rarr;"
        />
      </div>
    </form>
  );
};
export default ContactForm;
