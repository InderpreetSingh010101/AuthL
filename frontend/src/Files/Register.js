import { useState } from "react";
import Loading from "../Header/Loading";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { set } from "mongoose";
import ErrorMessage from "../Header/ErrorMessage";
import axios from "axios" ;



const Register = () => {

    // let [count, setCount] = useState(0);
    const[name , setName] = useState("") ;
    const pic = "pic" ;
    const[email , setEmail] = useState("") ;
    const[password , setPassword] = useState("") ;
    const[confirmpassword , setConfirmpassword] = useState("") ;
    const[message , setMessage] = useState(null)
    const[error , setError] = useState(false) ;
    const[loading , setLoading] = useState(false) ;

    const onSubmitHandler = async(e)=>{
        e.preventDefault() ;
        // console.log(email , password) ;
        if(password !== confirmpassword){
            setMessage("Passwords Don't Match") ;
            setTimeout(()=>{
                setMessage(null) ;
               }, 3000)
        }else{
            setMessage(null) ;
            
            
            try{
                const config={
                    headers:{
                        "Content-type":"application/json"
                    }
                }
                setLoading(true) ;
        
                const{ data } = await axios.post(
                    '/api/users/' ,
                     {name ,pic ,email , password} , 
                     config
        
                );
               
                console.log(data) ;
                if(data){
                    alert("Registerd Sucessful")
                }
                localStorage.setItem('userInfo' , JSON.stringify(data));
                setLoading(false) ;
        
                }catch (error){
                    setError(error.response.data.message) ;
                    setLoading(false) ;
                    setTimeout(()=>{
                     setError(false) ;
                    }, 3000)
                }  


        }
    };

    return (
        // <>
        // <h1>ReGister</h1>
        // <Loading/>
        // <button onClick={()=>{
        //     setCount(count+1) ;
        // }}>
        //     +
        // </button>
        // <div>{count}</div>
        // <button onClick={()=>{
        //     setCount(count-1) ;
        // }}>
        //     -
        //     </button>
        // </>
        <div class="container">
            <h1> REGISTER </h1>

            {message && <ErrorMessage varient="danger" >{message}</ErrorMessage>}
           {loading && <Loading/>}
            <Form onSubmit={onSubmitHandler}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="name"
                        placeholder="Enter Name"
                        onChange={(e)=>{
                            setName(e.target.value)
                        }}
                    />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        onChange={(e)=>{
                            setEmail(e.target.value)
                        }}
                        />

                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"
                        placeholder="Password"
                    onChange={(e)=>{
                       setPassword(e.target.value)

                    }}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password"
                        placeholder="ConfirmPassword"
                    onChange={(e)=>{
                       setConfirmpassword(e.target.value)

                    }}
                    />
                </Form.Group>

                {/* <Form.Group className="mb-3" controlId="pic">
                    <Form.Label>Profile Pic</Form.Label>
                    <Form.File
                    id ="custom-file"
                    type ="image/png"
                    label="Upload Profile Pic"
                    // custom 
                    />
                    

                </Form.Group> */}
                {/* <Form.Group controlId="formFile">
                    <Form.Label>Profile Picture</Form.Label>
                    <Form.Control
                        // onChange={(e) => postDetails(e.target. files[])}
                        id="custom-file"
                        type="image/png"
                        label="Upload Profile Picture"
                        custom
                    />
                </Form.Group> */}
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Choose File</Form.Label>
                    <Form.Control type="image/png" />
                </Form.Group>



                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            
        </div>
    )

}
export default Register;