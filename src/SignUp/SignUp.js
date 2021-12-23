import {
    Form,
    Button,
    Container,
    Row,
    Col
} from 'react-bootstrap';
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signup } from '../redux/auth/authActions';

const SignUp = ()=>{
    let [user, setUser]= useState({
        name: "",
        email: '',
        password: '',
        password2: '' 
    })
    let [error, setError]= useState(null)
    const {data} = useSelector(state=>state.auth)

    let navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if(user.password!==user.password2){
            setError('Passwords are not a match')
        }else{
            setError(null)
        }
    }, [user.password2])
    
    const handleChange = async(e) =>{
        setUser({
            ...user,
            [e.target.name] : e.target.value
        });
    }
    
    const handleSubmit = async(e) =>{
        e.preventDefault()

        const formdata= new FormData();
        formdata.append('name',user.name);
        formdata.append('email', user.email);
        formdata.append('password', user.password);
        dispatch(signup(formdata))
            .then(()=>{
                navigate('/')
            })
    }
    return(
        <>
        <Container>
            <Row>
                <Col>
                <Form onSubmit={handleSubmit} method='post' >
                    <Form.Group className="mb-3" controlId="">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control  type="text" name="name"  onChange={(e)=>handleChange(e)} placeholder="Enter name" />
                        {data && data.errors ? <div style={{color:"red"}}>{data.errors.name}</div> : ''}
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="text" name="email"  onChange={(e)=>handleChange(e)} placeholder="Enter email" />
                        {data && data.errors ? <div style={{color:"red"}}>{data.errors.email}</div> : ''}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password"  onChange={(e)=>handleChange(e)} placeholder="Password" />
                        {data && data.errors ? <div style={{color:"red"}}>{data.errors.password}</div> : ''}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" name="password2"  onChange={(e)=>handleChange(e)} placeholder="Enter password again" />
                        {error ? <div style={{color:"red"}}>{error}</div> : ''}
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                </Col>
            </Row>
        </Container>
        </>
    )
}
export default SignUp;
{/* <form >
    <label>Full Name</label>
    <input type="text" id="name" value={name} onChange={(e)=>handleChange()}/>
    <label>Email:</label>
    <input type="text" id="email" value={email} onChange={(e)=>handleChange()}/>
    <label>Password:</label>
    <input type="password" id="password" value={password} onChange={(e)=>handleChange()}/>
    <label>Cpnfirm Password:</label>
    <input type="password" id="password2" value={password2} onChange={(e)=>handleChange()}/>
    <button>Sign Up</button>
</form> */}