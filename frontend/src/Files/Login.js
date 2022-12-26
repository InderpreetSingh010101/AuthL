import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Form';

import { Link } from "react-router-dom";
import axios from "axios" ;
import Loading from '../Header/Loading';
import ErrorMessage from '../Header/ErrorMessage';
const Login =  ()=> {
    const[email , setEmail] = useState("") ;
    const[password , setPassword] = useState("") ;
    const[error , setError] = useState(false) ;
    const[loading , setLoading] = useState(false) ;



    const submitHandler = async (e)=>{
        e.preventDefault() ;
        
        try{
        const config={
            headers:{
                "Content-type":"application/json"
            }
        }
        setLoading(true) ;

        const{ data } = await axios.post(
            '/api/users/login' ,
             {email , password} , 
             config

        );
       
        console.log(data) ;
        localStorage.setItem('userInfo' , JSON.stringify(data));
        setLoading(false) ;

        }catch (error){
            setError(error.response.data.message) ;
            setLoading(false) ;
            setTimeout(()=>{
             setError(false) ;
            }, 3000)
        }  
   
    };

   
    return (
        <>


            <div class="container mt-3 ">
                <h1 class="ml-4">LOGIN</h1>
                {error && <ErrorMessage varient="danger">{error}</ErrorMessage>}
                {loading && <Loading/>}
                <Form onSubmit={submitHandler}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email"
                          value={email}
                         placeholder="Enter email"
                         onChange={(e)=>{
                            setEmail(e.target.value)
                         }} 
                         />
                        {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" 
                        placeholder="Password"
                        onChange={(e)=>{
                           setPassword(e.target.value)
                           
                        }} />
                    </Form.Group>

                    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <Row class="py-3">

                    <Col>
                        New Customer ?<Link to="/register"> Register Here</Link>

                    </Col>
                </Row>

            </div>
        </>

    );
}
export default Login;