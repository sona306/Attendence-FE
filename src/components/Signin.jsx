import React, { useState } from 'react'
import Nav from './Nav'
import axios from 'axios'

const Signin = () => {
    const[sigin,setData]=useState(
        {
            "email":"",
            "password":""
        }
    )

    const inputHandler=(event)=>{
        setData({...sigin,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
       console.log(sigin)
       axios.post("http://localhost:8080/signin",sigin).then(
        (response)=>{
            console.log(response.data)
            if (response.data.status=="success") 
            {
                alert("Login successfull")
            } else 
            {
                alert("unable")
            }
        }
       ).catch() 
    }

    return (
        <div>
            <Nav/><br></br><br></br><br></br><br></br>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="card bg-body-tertiary">
                            <div className="card-body">
                                <h5 className="card-title">HostelTrack : Smart Attendence System</h5>
                                <h6 className="card-subtitle mb-2 text-body-secondary">Welcome to user login</h6>
                                <div className="row">
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"><br></br>
                                        <label htmlFor="" className="form-label" >Email</label>
                                        <input type="text" className="form-control" name='email' value={sigin.email} onChange={inputHandler}  placeholder="Enter your email" />
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"><br></br>
                                        <label htmlFor="" className="form-label">Password</label>
                                        <input type="password" className="form-control" name='password' value={sigin.password} onChange={inputHandler} placeholder="Enter your password" />
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><br></br>
                                        <button className="btn btn-success" onClick={readValue}>SignIn</button>
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><br></br>
                                        <label htmlFor="" className="form-label">No account? Signup Now!</label>
                                        <button className="btn btn-info">SignUp</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}


export default Signin