import React,{useState} from 'react'
import {Link,Redirect} from 'react-router-dom'
import Layout from '../components/Layout'
import axios from 'axios';
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'



function Signup() {
    const [values,setValues] =useState({
        name:'',
        emai:'',
        password:'',
        buttonText:'Submit'
    });

    const handleChange=(name)=>(event)=>{
        setValues({...values,[name]:event.target.value});
    }

    
    const clickSubmit=(event)=>{
        event.preventDefault();
        setValues({...values,buttonText:'Submitting'});
        axios({
            method:'POST',
            url:`${process.env.REACT_APP_API}/signup`
        })
    }

    const {name,email,password,buttonText}=values;

    const signupForm=()=>{
        return(
            <form>
                <div className="form-group">
                    <label className="text-muted">Name</label>
                    <input type="text" className="form-control" value={name} onChange={handleChange('name')} />
                </div>
                <div className="form-group">
                    <label className="text-muted">Email</label>
                    <input type="email" className="form-control" value={email} onChange={handleChange('email')} />
                </div>
                <div className="form-group">
                    <label className="text-muted">Password</label>
                    <input type="password" className="form-control" value={password} onChange={handleChange('password')} />
                </div>
                <div className="form-group" style={{marginTop:'5px'}}>
                    <button className="btn btn-primary" onClick={clickSubmit}>{buttonText}</button>
                </div>
            </form>
        )
    }
    return (
        <Layout>
            <div className="col-md-6 offset-md-3">
            <ToastContainer/>
            {JSON.stringify({name,email,password})}
            <h1 className="p-5 text-center">SignUp</h1>
            {signupForm()}
            </div>
        </Layout>
    )
}

export default Signup
