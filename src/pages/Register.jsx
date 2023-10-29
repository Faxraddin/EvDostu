import React,{useState} from "react";
import {NavLink, json} from "react-router-dom"
import { Formik,useFormik } from 'formik';
import axios from 'axios';
import * as yup from 'yup'

const validationSchema = yup.object({
  fullName: yup.string().min(3,'Please enter real name').required(),
  email: yup.string().email('Enter a valid email').required(),
  password: yup.string().required(),
})

export default function Register(){
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const onSubmit = async (values) => {
    const { ...data } = values;

    const response = await axios
      .post('http://127.0.0.1:8080/register', data)
      .catch((err) => {
        if (err && err.response) setError(err.response.data.message);
        setSuccess(null);
      });


    if (response && response.data) {
      setError(null);
      setSuccess(response.data.message);
      formik.resetForm();
    }
  };

  const formik = useFormik({ initialValues : { fullName: '', email: '',password: '' } ,
    validateOnBlur:true,
    onSubmit,
    validationSchema:validationSchema,
  })

  return (
    <div className="Auth-form-container">
      <div className="Auth-form">
        <form onSubmit={formik.handleSubmit} >
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign Up</h3>
            <div className="text-center">
              Already registered?{" "}
              <NavLink to={'/login'} className="link-primary"  style={{cursor:'pointer',}}>
                Sign In
              </NavLink>
            </div>

            {!error && <span>{success ? success : ''}</span>}
            {!success && <span>{error ? error : ''}</span>}
            
              <div>
                <div className="form-group mt-3" style={{display:'flex',alignItems:'center',marginBottom:'.7vw',}}>
                    <label style={{width:'6.6vw',fontSize: '1vw',fontWeight: '600',color: 'rgb(34, 34, 34)'}}>Full Name</label>
                    <input
                    type="text"
                    className="form-control mt-1"
                    placeholder="e.g Jane Doe"
                    style={{width:'80%',fontSize:'1vw',padding:'.7vw 1vw .7vw 1vw',}}
                    name="fullName"
                    value={formik.values.fullName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                </div>
                <div className="error-field"> {formik.touched.fullName && formik.errors.fullName ? formik.errors.fullName : ''} </div>
                <div className="form-group mt-3"style={{display:'flex',alignItems:'center',marginBottom:'.7vw',}}>
                    <label style={{width:'6.6vw',fontSize: '1vw',fontWeight: '600',color: 'rgb(34, 34, 34)'}}>Email address</label>
                    <input
                    type="email"
                    className="form-control mt-1"
                    placeholder="Email Address"
                    style={{width:'80%',fontSize:'1vw',padding:'.7vw 1vw .7vw 1vw',}}
                    name='email'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                </div>
                <div className="error-field"> {formik.touched.email && formik.errors.email ? formik.errors.email : ''} </div>
                <div className="form-group mt-3" style={{display:'flex',alignItems:'center',marginBottom:'.7vw',}}>
                    <label style={{width:'6.6vw',fontSize: '1vw',fontWeight: '600',color: 'rgb(34, 34, 34)'}}>Password</label>
                    <input
                    type="password"
                    className="form-control mt-1"
                    placeholder="Password"
                    style={{width:'80%',fontSize:'1vw',padding:'.7vw 1vw .7vw 1vw',}}
                    name='password'
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                </div>
                <div className="error-field"> {formik.touched.password && formik.errors.password ? formik.errors.password : ''} </div>
              </div>

            <div className="d-grid gap-2 mt-3" style={{display:'flex',justifyContent:'center',}}>
              <button type="submit" disabled={!formik.isValid} className="btn btn-primary" style={{padding:'.7vw 1vw .7vw 1vw',background:'none',width:'30%',fontSize:'.9vw',border:'solid thin lightgrey',boxShadow:' rgb(0 0 0 / 16%) 1px 1px 10px',cursor:'pointer',}}>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      
    </div>
    )
}