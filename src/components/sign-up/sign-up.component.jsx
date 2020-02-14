import React from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            displayName : '',
            email : '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        //prevent default form submit action
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        if(password !== confirmPassword){
            alert("password don't match");
            //return from function if password don't match
            return;
        } 
        try{
            //signing them up users with email and password and then 
            //destructure user from auth object given to us
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });
            //this will clear our form
            this.setState({
                displayName : '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch (error) {
            console.error(error);
        }
    };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name] : value
        });
    };

    render(){
        const { displayName, email, password, confirmPassword} = this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput type='text' name='displayName' onChange={this.handleChange} value={displayName} required label='Display Name'/>
                    <FormInput type='email' name='email' onChange={this.handleChange} value={email} required label='Email'/>
                    <FormInput type='password' name='password' onChange={this.handleChange} value={password} required label='Password'/>
                    <FormInput type='password' name='confirmPassword' onChange={this.handleChange} value={confirmPassword} required label='Confirm Password'/>
                    <CustomButton type='submit'>Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;