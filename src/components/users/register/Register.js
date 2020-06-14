import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
//import {Button } from 'styled-bootstrap-components'
import 'bootstrap/dist/css/bootstrap.min.css';
// import React, { useState } from 'react';
// import { Formik } from "formik";
// import * as Yup from "yup";
// import styled from "@emotion/styled";
// import "./Styles.css";
// import "./Styles-custom.css";



// const schema = Yup.object({
//   email: Yup.string().required(),
//   password: Yup.string().required(),
//   username: Yup.string().required(),
 
// });

// class Register extends Component {
//     state ={
//                 email: '',
//                 password: '',
//                 username: ''
//             }
        
//             onSubmit =(e)=>{
//                 e.preventDefault()
//                 this.Register(this.state.username, this.state.email, this.state.password)
                               
//             }
        
//             handleUserInput = (e) => this.setState({[e.target.name]: e.target.value})
        
        
//             Register =(username, email, password)=>{
//                 const User = {
//                     username,
//                     email,
//                     password
//                 }
                
//                 const token = localStorage.token
//                 axios.post('https://cipher-blog.herokuapp.com/api/v1/auth/signup',  User, { 
                   
//                         headers: {
//                             'Content-Type' : 'application/json',
//                            'Authorization' : `Bearer ${token}`
//                        }
//                        })
//                 .then(res => {
//                   console.log(res.data)
//                     if (res.status === 200) {
//                       this.props.history.push('/login');
//                       window.location.reload()
//                     } else {
//                       const error = new Error(res.error);
//                       throw error;
//                     }
//                   })
//                   .catch(err => {
//                     console.error(err);
//                     alert('Error signing in please try again');
//                   });
//             }

//       render(){
//         return (
//             <Formik
//               validationSchema={schema}
//               onSubmit={console.log}
//               initialValues={{
//                 username: '',
//                 email: '',
//                 password: ''
//               }}
//             >
//               {({
//                 handleSubmit,
//                 handleChange,
//                 handleBlur,
//                 values,
//                 touched,
//                 isValid,
//                 errors,
//               }) => (
//                 <Form noValidate onSubmit={this.handleSubmit}>
//                     <Form.Group as={Row} md="4" controlId="validationFormikUsername">
//                     <Col sm={10}>
//                       <Form.Label>Username</Form.Label>
//                       <InputGroup>
//                             <InputGroup.Prepend>
//                             <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
//                             </InputGroup.Prepend>
//                             <Form.Control
//                             type="text"
//                             placeholder="Username"
//                             aria-describedby="inputGroupPrepend"
//                             name="username"
//                             value={this.state.username}
//                             onChange={this.handleUserInput}
//                             isInvalid={!!errors.username}
//                             />
//                             <Form.Control.Feedback type="invalid">
//                             {errors.username}
//                             </Form.Control.Feedback>
//                       </InputGroup>
//                       </Col>
//                     </Form.Group>
//                     <Form.Group as={Row} md="4" controlId="validationFormik02">
//                         <Col sm={10}>
//                         <Form.Label>Email</Form.Label>
//                         <Form.Control
//                             type="text"
//                             placeholder="email"
//                             name="email"
//                             value={values.email}
//                             onChange={this.handleUserInput}
//                             isValid={touched.email && !errors.email}
//                         />
            
//                         <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//                         </Col>
//                     </Form.Group>
//                     <Form.Group as={Row} md="4" controlId="validationFormik01">
//                     <Col sm={10}>
//                       <Form.Label>Password</Form.Label>
//                       <Form.Control
//                         type="Password"
//                         name="password"
//                         placeholder="Password"
//                         value={this.state.password}
//                         onChange={this.handleUserInput}
//                         isValid={touched.password && !errors.password}
//                       />
//                       <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//                       </Col>
//                     </Form.Group>
               
                  
                  
//                   <Button type="submit">Sign up</Button>
//                   <p>Already have an account? <Link to='/login'>Sign in</Link></p>
//                 </Form>
//               )}
//             </Formik>
//           );
//       }
// }

// export default Register

class Register extends Component {
    state ={
        email: '',
        password: '',
        username: ''
    }

    onSubmit =(e)=>{
        e.preventDefault()
        this.Register(this.state.username, this.state.email, this.state.password)
                       
    }

    handleUserInput = (e) => this.setState({[e.target.name]: e.target.value})


    Register =(username, email, password)=>{
        const User = {
            username,
            email,
            password
        }
        
        const token = localStorage.token
        axios.post('https://cipher-blog.herokuapp.com/api/v1/auth/signup',  User, { 
           
                headers: {
                    'Content-Type' : 'application/json',
                   'Authorization' : `Bearer ${token}`
               }
               })
        .then(res => {
          console.log(res.data)
            if (res.status === 201) {
              this.props.history.push('/login');
              window.location.reload()
            } else {
              const error = new Error(res.error);
              throw error;
            }
          })
          .catch(err => {
            console.error(err);
            alert('Error signing in please try again');
          });
    }


    render() {
        return (
            <form  onSubmit={this.onSubmit} style={{marginLeft: '120px', marginTop:  '50px'}}>
                <h2>Sign Up</h2>
                <div className="panel panel-default">
                </div>
                <div className={`form-group`}>
                <label htmlFor="username">Username</label>
                <input type='text' required className="form-control" name="username"
                    placeholder="username"
                    value={this.state.username}
                    onChange={this.handleUserInput}  />
                </div>
                <div className={`form-group`}>
                <label htmlFor="email">Email address</label>
                <input type="email" required className="form-control" name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleUserInput}  />
                </div>
                <div className={`form-group `}>
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleUserInput}  />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                <p>Already have an account? <Link to='/login'>Sign in</Link></p>
            </form>
        )
    }
}


export default Register;







