import React, { useState } from 'react'
import Nav from './Nav'
import axios from 'axios'

const Signup = () => {
    const[signup,setData]=useState(
        {
            "name":"",
            "id":"",
            "proof":"",
            "gender":"",
            "hostel":"",
            "email":"",
            "password":"",
            "confirm":""  
        }
    )
    const inputHandler = (event)=>{
        setData({...signup,[event.target.name]:event.target.value})
    }
    const readValue = ()=>{
        console.log(signup)
        axios.post("http://localhost:8080/signup",signup).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") 
                {
                    alert("New user added")
                } else 
                {
                    alert("Unable to add user")
                }
            }
            
        ).catch()
    }
    return (
        <div>
            <Nav/><br></br><br></br><br></br>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="card bg-body-tertiary">
                            <div className="card-body">
                                <h5 className="card-title">HostelTrack : Smart Attendence System</h5>
                                <div className="row">
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><br></br>
                                        <label htmlFor="" className="form-label" >Employee Name</label>
                                        <input type="text" className="form-control" name='name' value={signup.name} onChange={inputHandler} placeholder="Enter your name" />
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><br></br>
                                        <label htmlFor="" className="form-label" >Employee ID</label>
                                        <input type="text" className="form-control" name='id' value={signup.id} onChange={inputHandler} placeholder="Enter your ID" />
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><br></br>
                                        <label htmlFor="" className="form-label" >ID Proof</label>
                                        <input type="text" className="form-control" name='proof' value={signup.proof} onChange={inputHandler} placeholder="Enter your aadhar No" />
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><br></br>
                                        <label htmlFor="" className="form-label">Gender</label>
                                        <select name="gender" id="" className="form-control" value={signup.gender} onChange={inputHandler}>
                                            <option value="select">-----Select-----</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><br></br>
                                            <label htmlFor="" className="form-label" >Hostel Name</label>
                                            <select name="hostel" id="" className="form-control" value={signup.hostel} onChange={inputHandler}>
                                            <option value="select">-----Select-----</option>
                                            <option value="PG Boys">PG Boys</option>
                                            <option value="UG Boys">UG Boys</option>
                                            <option value="PG Girls">PG Girls</option>
                                            <option value="UG Girls">UG Girls</option>
                                            </select>
                                        </div>
                                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><br></br>
                                            <label htmlFor="" className="form-label">Email</label>
                                            <input type="text" className="form-control" name='email' value={signup.email} onChange={inputHandler} placeholder="Enter your email"/>
                                        </div>
                                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><br></br>
                                            <label htmlFor="" className="form-label">Password</label>
                                            <input type="password" className="form-control" name='password' value={signup.password} onChange={inputHandler} placeholder="Enter your password" />
                                        </div>
                                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><br></br>
                                            <label htmlFor="" className="form-label">Confirm</label>
                                            <input type="password" className="form-control" name='confirm' value={signup.confirm} onChange={inputHandler} placeholder="Confirm your password" />
                                        </div>
                                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><br></br>
                                            <button className="btn btn-success" onClick={readValue}>Register</button>
                                        </div>
                                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><br></br>
                                            <button className="btn btn-info">Back to SignIn</button>
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

            export default Signup