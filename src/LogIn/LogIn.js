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
import HeaderTop from '../CommonComponents/Header/HeaderTop';
import { useDispatch,useSelector } from 'react-redux';
import { login } from '../redux/auth/authActions';

const LogIn = ()=>{
    let [user, setUser]= useState({
        email: '',
        password: '' 
    })
    const {isLoggedIn} = useSelector(state=>state.auth)
    const {data} = useSelector(state=> state.auth)
    //console.log(`login comp: ${data}`)
    let navigate = useNavigate();
    const dispatch= useDispatch();

    // useEffect(async() => {
    //     if(data && data.user){
    //         localStorage.setItem('token', data.token);
    //         (<HeaderTop/>)
    //         navigate('/')
    //     }
    //     console.log(data)
    // }, [data])
    
    const handleChange = async(e) =>{
        setUser({
            ...user,
            [e.target.name] : e.target.value
        });
    }
    
    const handleSubmit = async(e) =>{
        e.preventDefault()
        console.log('clicked')
        const formdata= new FormData();
        formdata.append('email', user.email);
        formdata.append('password', user.password);
        dispatch(login(formdata))
            .then(()=>{
                navigate('/')
            })
        // await axios({
        //     method: 'post',
        //     url: 'http://localhost:8000/api/login',
        //     data: formdata,
        //     withCredentials: true
        // })
        // .then((res)=>{
        //     setData(res.data)
            
        // })
    }
    return(
        <>
        <Container>
            <Row>
                <Col>
                <Form onSubmit={handleSubmit} method='post' >
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

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                </Col>
            </Row>
            <a href="http://localhost:8000/api/google" >Log In Using Google</a>
        </Container>
        </>
    )
}
export default LogIn;