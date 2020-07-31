import React, {useState} from "react";
import FormInput from '../formInput/forminput.component';
import "./sign-in.styles.scss";
import CustomButton from '../customButton/customButton.component'
//import {auth, signInWithGoolge}from '../../firebase/firebase.utils'
import { googleSignInStart, emailSignInStart } from "../../redux/user/user.actions";
import { connect } from "react-redux";


const SignIn = ({emailSignInStart, googleSignInStart})=>{


  const [userCredentials, setCredentials] = useState({email:'', password:''});
  const {email, password} = userCredentials;


  const handleSubmmit = async event => {
    event.preventDefault();
  
    emailSignInStart(email,password);
    // try{
    //   await auth.signInWithEmailAndPassword(email,password);
    //   this.setState({ email: "", password: "" });
      
    // }catch(err){
    //   console.log(err)
    // }
   
  };

  const handleChange = event =>{
    const {value, name} = event.target;
    setCredentials({...userCredentials,[name]:value})
  }


  
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmmit}>
          <FormInput
            name="email"
            type="email"
            value={email}
            handleChange={handleChange}
            label = 'email'
            required
          ></FormInput>

          
          <FormInput
            name="password"
            type="password"
            value={password}
            handleChange={handleChange}
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


const mapDispatchToProps = dispatch =>({
  googleSignInStart: ()=>dispatch(googleSignInStart()),
  emailSignInStart: (email,password)=>dispatch(emailSignInStart({email,password}))
})

export default  connect(null,mapDispatchToProps)(SignIn);
