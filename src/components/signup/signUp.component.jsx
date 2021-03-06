import React, {useState} from 'react';
import FormInput from '../formInput/forminput.component';
import CustomButton from '../customButton/customButton.component';

import './signUp.styles.scss'
import { signUpStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';


const SignUp =({signUpStart})=>{
   
    const [userCredentials, setUserCredentials] = useState({
        displayName:'',
        email:'',
        password:'',
        confirmPassword:''
    })
    
    const {displayName, email, password, confirmPassword} = userCredentials;
   
    const handleSubmit = async event =>{
        event.preventDefault();

        if(password !== confirmPassword){
            alert("Passwords do not match")
            return;
        }
        signUpStart({displayName, email, password});
    }

    const handleChange = event =>{
        const {name, value } = event.target;
        setUserCredentials({...userCredentials, [name]:value});
    }

    return(
        <div className='sign-up'>
            <h2 className = 'title'> I do not have an account</h2>
            <span> Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit = {handleSubmit}>
                <FormInput
                    type = 'text'
                    name = 'displayName'
                    value = {displayName}
                    onChange = {handleChange}
                    label = 'Display name'
                    required
                > 
                </FormInput>
                <FormInput
                    type = 'email'
                    name = 'email'
                    value = {email}
                    onChange = {handleChange}
                    label = 'Email'
                    required
                > 
                </FormInput>
                <FormInput
                    type = 'password'
                    name = 'password'
                    value = {password}
                    onChange = {handleChange}
                    label = 'Password'
                    required
                > 
                </FormInput>
                <FormInput
                    type = 'password'
                    name = 'confirmPassword'
                    value = {confirmPassword}
                    onChange = {handleChange}
                    label = 'Confirm password'
                    required
                > 
                </FormInput>
                <CustomButton type = 'submit'>SIGN UP</CustomButton>
            </form>
        </div>
    )
}




const mapDispatchToProps = dispatch =>({
    signUpStart: (credentials)=>dispatch(signUpStart(credentials))
})

export default connect(null, mapDispatchToProps)(SignUp);
