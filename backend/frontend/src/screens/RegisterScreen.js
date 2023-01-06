import React, { useState,useEffect } from 'react'
import FormContainer from '../components/FormContainer'
import { Form, Button, Row, Col } from 'react-bootstrap'
import Loader from '../components/Loader'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import { register } from '../actions/userActions'
import { useNavigate } from "react-router-dom";


const RegisterScreen = ({history}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const userRegister = useSelector(state => state.userRegister)
    const { error, loading, userInfo } = userRegister
    console.log('useinfo up',userInfo)

    useEffect(() => {
        if (userInfo) {
            console.log("yes userinfo")
            navigate("/");
        }
    }, [history, userInfo])
    console.log('useinfo down',userInfo)


    const submitHandler = (e) => {
        e.preventDefault()

        if (password != confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            dispatch(register(name, email, password))
        }

    }
    console.log("submit after",userInfo)
  return (
    <FormContainer>
            <h1>Sign up</h1>
            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>

            <Form.Group controlId='name'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        required
                        type='name'
                        placeholder='Enter name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    >
                    </Form.Control>
            </Form.Group>


            <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        required
                        type='email'
                        placeholder='Enter Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    >
                    </Form.Control>
            </Form.Group>

            <Form.Group controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                    required
                    type='password'
                    placeholder='Enter Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                >
                </Form.Control>
            </Form.Group>


            <Form.Group controlId='passwordConfirm'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        required
                        type='password'
                        placeholder='Confirm Password'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    >
                    </Form.Control>
            </Form.Group>

            <Button type='submit' variant='primary'>
                Register
            </Button>



            </Form>
    </FormContainer>
  )
}

export default RegisterScreen
