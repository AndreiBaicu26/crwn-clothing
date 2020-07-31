import React from "react";
import FormInput from '../formInput/forminput.component';
import "./sign-in.styles.scss";
import CustomButton from '../customButton/customButton.component'
//import {auth, signInWithGoolge}from '../../firebase/firebase.utils'
import { googleSignInStart, emailSignInStart } from "../../redux/user/user.actions";
import { connect } from "react-redux";


class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmmit = async event => {
    event.preventDefault();
    const {emailSignInStart} = this.props;
    const {email, password} = this.state;

    emailSignInStart(email,password);
    // try{
    //   await auth.signInWithEmailAndPassword(email,password);
    //   this.setState({ email: "", password: "" });
      
    // }catch(err){
    //   console.log(err)
    // }
   
  };

  handleChange = event =>{
    const {value, name} = event.target;
    this.setState({[name]:value})
  }

  render() {
    const {googleSignInStart} = this.props;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label = 'email'
            required
          ></FormInput>

          
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label = 'password'
            required
          ></FormInput>

        <div className='buttons'>
          <CustomButton type = 'submit'>Sign in</CustomButton>
          
          <CustomButton type='button' onClick = {googleSignInStart} isGoogleSignIn >Sign in with google</CustomButton>
        </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>({
  googleSignInStart: ()=>dispatch(googleSignInStart()),
  emailSignInStart: (email,password)=>dispatch(emailSignInStart({email,password}))
})

export default  connect(null,mapDispatchToProps)(SignIn);
