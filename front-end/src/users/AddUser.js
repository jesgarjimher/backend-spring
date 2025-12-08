import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";


export default function AddUser() {

    let navigate = useNavigate()

    const [user,setUser] = useState({
        name: "",
        username: "",
        email: ""
    })

    const {name,username,email} = user;

    const onInputChange = (event) => {
        setUser({...user,[event.target.name]:event.target.value})
    }

    const  OnSubmit = async (event) => {
        event.preventDefault();
        await axios.post("http://localhost:8080/user",user);
        navigate("/");
    }


    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 boder rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Register user</h2>
                    <form onSubmit={(event) => OnSubmit(event)}>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">Name</label>
                            <input type={"text"} className="form-control" name="name" value={name} onChange={(event => onInputChange(event))} placeholder="Enter your name"></input>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="Username" className="form-label">Username</label>
                            <input type={"text"} className="form-control" name="username" value={username} onChange={(event) => onInputChange(event)} placeholder="Enter your username"></input>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="Email" className="form-label">Email</label>
                            <input type={"text"} className="form-control" name="email" onChange={(event) => onInputChange(event)} value={email} placeholder="Enter your email address"></input>
                        </div>

                        <button type="submit" className="btn btn-outline-primary">Submit</button>
                        <Link  className="btn btn-outline-danger mx-2" to="/">Cancel</Link>
                    </form>
                    
                </div>
                
            </div>    
        </div>
    )
}