import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { FormErrors } from '../FormErrors';




class Login extends Component {
    state = {
        email: '',
        password: '',
        formErrors: {email: '', password: ''},
        emailValid: false,
        passwordValid: false,
        formValid: false
    }

    Login =(email, password)=>{
      const User = {
          email,
          password
      }
      
      const token = localStorage.token
      axios.post('https://cipher-blog.herokuapp.com/api/v1/auth/login',  User, { 
         
              headers: {
                  'Content-Type' : 'application/json',
                 'Authorization' : `Bearer ${token}`
             }
             })
      .then(res => {
        console.log(res.data)
        localStorage.setItem('userId', res.data.userId);
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('author', res.data.author);
          localStorage.setItem('authorId', res.data.userId);
          localStorage.setItem('url', res.data.url);

         localStorage.setItem('expiration', Date.now() + 2 * 60 * 60 * 1000);
          if (res.status === 200) {
            this.props.history.push('/blog');
            window.location.reload()
          } else {
            const error = new Error(res.error);
            throw error;
          }
        })
        .catch(err => {
          console.error(err);
          alert('Error logging in please try again');
        });
  }

    onSubmit =(e)=>{
        e.preventDefault()
        this.Login(this.state.email, this.state.password)
                       
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
                      () => { this.validateField(name, value) });
      }
    
      validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
    
        switch(fieldName) {
          case 'email':
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.email = emailValid ? '' : ' is invalid';
            break;
          case 'password':
            passwordValid = value.length >= 6;
            fieldValidationErrors.password = passwordValid ? '': ' is too short';
            break;
          default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        emailValid: emailValid,
                        passwordValid: passwordValid
                      }, this.validateForm);
      }
    
      validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid});
      }
    
      errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
      }
    

    render() {
        return (
            <form style={demoErrors} onSubmit={this.onSubmit}>
                <h2>Login</h2>
                <div className="panel panel-default">
                <FormErrors formErrors={this.state.formErrors} />
                </div>
                <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
                <label htmlFor="email">Email address</label>
                <input type="email" required className="form-control" name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleUserInput}  />
                </div>
                <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleUserInput}  />
                </div>
                <button type="submit" className="btn btn-primary" disabled={!this.state.formValid}>Login</button>
                <p>Don't have an account? <Link to='/signup'>Sign up</Link></p>
            </form>
        )
    }
}

const demoErrors = {
    width: '500px',
    marginLeft: '120px',
    marginTop:  '50px'
}

export default Login; 