import React from 'react';
import SignIn from '../../components/signin/sign-in.component' 
import SignUp from '../../components/signup/signUp.component' 
import './sign-in-and-sign-up.styles.scss'

const SignInAndSignUp = ()=>{
    return(
        <div className ='sign-in-and-up'>
            <SignIn/>
            <SignUp/>
        </div>
    )
}

export default SignInAndSignUp;