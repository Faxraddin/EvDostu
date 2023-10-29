import React,{useState} from "react";
import { NavLink,Link, useNavigate } from "react-router-dom";
import { useFormik} from 'formik';
import axios from 'axios';
import * as yup from 'yup'

import { useDispatch} from "react-redux";
import { setIsAuth } from "../store/userReducer";

const validationSchema = yup.object({
  email: yup.string().email('Enter a email').required(),
  password: yup.string().required(),
})

export default function LogIn( ){
  const[error,setError] = useState(null);

  const navigate = useNavigate()
  const dispatch = useDispatch();

  const onSubmit = async (values) => {
    setError(null);
     const response = await axios.post('http://127.0.0.1:8080/login',values)
     .catch((err)=>{
       if (err && err.response) setError(err.response.data.message);
     })

     if (response){
       alert(`Welcome back!`);
       console.log(response);

       localStorage.setItem('id',response.data.id);
       localStorage.setItem('token',response.data.token);
       localStorage.setItem('user',response.data.user.fullName);
       localStorage.setItem('isAuth', true);
       dispatch(setIsAuth(true)); // Update isAuth state in Redux store
       //dispatch(addToken(response.data.token));
       navigate('/')
     }

  }

  const formik = useFormik({initialValues:{email:'',password:''},
    validateOnBlur:true,
    onSubmit,
    validationSchema:validationSchema,
  })

  return (
      <div className="Auth-form-container"> 
        <form onSubmit={formik.handleSubmit}> 
          <div className="Auth-form">
            <div className="Auth-form-content">
                <h3 className="Auth-form-title">Sign In</h3>
                <div className="text-center" style={{marginBottom:'1vw',fontSize:'1.3vw',}}>
                  Not registered yet?{" "}
                  <NavLink to={'/register'} className="link-primary"  style={{cursor:'pointer',}}>
                    Sign Up
                  </NavLink>
                </div>

                <span>{error ? error : ''}</span>
                <div>
                  <div className="form-group mt-3" style={{display:'flex',alignItems:'center',marginBottom:'.7vw',}}>
                    <label style={{width:'6.6vw',fontSize: '1vw',fontWeight: '600',color: 'rgb(34, 34, 34)'}}>Email address</label>
                    <input
                        type="email"
                        className="form-control mt-1"
                        placeholder="Enter email"
                        style={{width:'80%',fontSize:'1vw',padding:'.7vw 1vw .7vw 1vw',}}
                        name="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                    />
                  </div>
                  <div className="error-field"> {formik.touched.email && formik.errors.email ? formik.errors.email : ''} </div>

                  <div className="form-group mt-3" style={{display:'flex',alignItems:'center',marginBottom:'.7vw',}}>
                    <label style={{width:'6.6vw',fontSize: '1vw',fontWeight: '600',color: 'rgb(34, 34, 34)'}}>Password</label>
                    <input
                        type="password"
                        className="form-control mt-1"
                        placeholder="Enter password"
                        style={{width:'80%',fontSize:'1vw',padding:'.7vw 1vw .7vw 1vw',}}
                        name="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        onBlur={formik.handleBlur}
                    />
                  </div>
                  <div className="error-field"> {formik.touched.password && formik.errors.password ? formik.errors.password : ''}</div>
                </div>
                
                <Link className="text-center mt-2" style={{fontSize:'1.1vw',}}>
                  Forgot password?
                </Link>
                <div className="d-grid gap-2 mt-3" style={{display:'flex',justifyContent:'center',}}>
                  <button type="submit" disabled={!formik.isValid} className="btn btn-primary" style={{padding:'.7vw 1vw .7vw 1vw',background:'none',width:'30%',fontSize:'.9vw',border:'solid thin lightgrey',boxShadow:' rgb(0 0 0 / 16%) 1px 1px 10px',cursor:'pointer',}}>
                    Submit
                  </button>
                </div>
            </div>
          </div>
        </form>
      </div>
    )
}; 