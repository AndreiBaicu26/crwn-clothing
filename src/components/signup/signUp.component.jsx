import React from 'react';
import FormInput from '../formInput/forminput.component';
import CustomButton from '../customButton/customButton.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './signUp.styles.scss'


class SignUp extends React.Component{
    constructor(){
        super();

        this.state ={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    handleSubmit = async event =>{
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;
        console.log(password, confirmPassword)
        if(password !== confirmPassword){
            alert("Passwords do not match")
            return;
        }

        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});

            this.setState({displayName:'',
            email:'',
            password:'',
            confirmPassword:''})
        }catch (err){
            console.log(err)
        }
    }

    handleChange = event =>{
        const {name, value } = event.target;
        this.setState({[name]:value});
    }

    render(){
        const {displayName, email, password, confirmPassword} = this.state;
        return(
            <div className='sign-up'>
                <h2 className = 'title'> I do not have an account</h2>
                <span> Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit = {this.handleSubmit}>
                    <FormInput
                        type = 'text'
                        name = 'displayName'
                        value = {displayName}
                        onChange = {this.handleChange}
                        label = 'Display name'
                        required
                    > 
                    </FormInput>
                    <FormInput
                        type = 'email'
                        name = 'email'
                        value = {email}
                        onChange = {this.handleChange}
                        label = 'Email'
                        required
                    > 
                    </FormInput>
                    <FormInput
                        type = 'password'
                        name = 'password'
                        value = {password}
                        onChange = {this.handleChange}
                        label = 'Password'
                        required
                    > 
                    </FormInput>
                    <FormInput
                        type = 'password'
                        name = 'confirmPassword'
                        value = {confirmPassword}
                        onChange = {this.handleChange}
                        label = 'Confirm password'
                        required
                    > 
                    </FormInput>
                    <CustomButton type = 'submit'>SIGN UP</CustomButton>
                </form>
            </div>
        )
    }

}
export default SignUp;
