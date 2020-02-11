import React from 'react';
import './sign-in.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email : '',
            password : ''
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name] : value
        });
    }

    handleSubmit = async event => {
        event.preventDefault();
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' handleChange={this.handleChange} value={this.state.email} label='email' required/>
                    <FormInput name='password' type='password' value={this.state.password} handleChange={this.handleChange} label='password' required/>
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton type='submit'>Sign In With Google</CustomButton>
                    </div>
                </form>
            </div> 
        )
            
    }
}

export default SignIn;