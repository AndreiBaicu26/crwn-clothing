import React from "react";

import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmmit = event => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = event =>{
    const {value, name} = event.target;
    this.setState({[name]:value})
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmmit}>
          <input
            name="email"
            type="email"
            value={this.state.email}
            onClick={this.handleChange}
            required
          ></input>

          <label>Email</label>
          <input
            name="password"
            type="password"
            value={this.state.password}
            onClick={this.handleChange}
            required
          ></input>

          <label>password</label>

          <input type="submit" value="Submit form"></input>
        </form>
      </div>
    );
  }
}

export default SignIn;
