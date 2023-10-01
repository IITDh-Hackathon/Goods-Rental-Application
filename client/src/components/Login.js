import React, { useEffect, useState, useContext } from 'react';
import { toast } from 'react-toastify';
import { Navigate, useNavigate } from 'react-router-dom';
import '../css/LoginCss.css'
import ApiContext from '../context/api/ApiContext';

const Login = () => {
  const [admin, setAdmin] = useState(false);
  const [creds, setCreds] = useState({ "email": "", "password": "" })
  const [signupCreds, setsignupCreds] = useState({ "name": "", "email": "", "city": "", "password": "", "confirmPassword": "" })
  const context = useContext(ApiContext)
  const { login, signup, profile, loginStatus } = context;
  const [invalidcreds, setinvalidcreds] = useState(false);
  const navigate = useNavigate();




  const handleOnChange = (e,islogin) => {
    if(islogin){
    setCreds({ ...creds, [e.target.name]: e.target.value })
    }
    else{
      setsignupCreds({ ...signupCreds, [e.target.name]: e.target.value })
    }
  }

  const handleOnClick = () => {
    if (admin) {
      setAdmin(false);
    }
    else {
      setAdmin(true);
    }
  }

  const handleOnSubmit = async (e,islogin) =>{
    e.preventDefault();
    if (islogin){
      console.log(creds);
      const res= await login(admin,creds);
      const [response,error]= res|| [null,true];
      //todo: handle error
      if(error){
        setinvalidcreds(true);
        toast.error(response.response.data.message);
      }
      else{
        if(admin){
          navigate('/admin');
        }
        else{
          navigate('/');
        }
        toast.success('Login Successfull');
      }
    }
    else{
      if(signupCreds.password!==signupCreds.confirmPassword){
        toast.error('Password and Confirm Password should be same');
        return;
      }
      const res= await signup(signupCreds);
      //todo: handle error
      const [response,error]= res || [null,true];
      if(error){
        setinvalidcreds(true);
        toast.error(response.response.data.message);
      }
      else{
        if(admin){
          navigate('/admin');
        }
        else{
          navigate('/');
        }
        toast.success('Signup Successfull');
      }
    }
  }


  // this useeffect will check if user clicks on sign up button then it will add sign up mode class to container so that it will show sign up form
  useEffect(() => {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");

    if (sign_up_btn && sign_in_btn && container) {
      sign_up_btn.addEventListener("click", () => {
        container.classList.add("sign-up-mode");
      });
      sign_in_btn.addEventListener("click", () => {
        container.classList.remove("sign-up-mode");
      });
    }
  }
  )

  if(profile && profile.role === "admin"){
    return <Navigate to="/admin" />
  }

  return (
    <>
      <div className="container">
        <div className="forms-container">
          <div className="signin-signup">
            <form className="sign-in-form" onSubmit={(e)=> handleOnSubmit(e,true)} >
              <h2 className="title"> {admin ? 'Admin' : 'User'} Login</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" name='email' value={creds.email} placeholder="Email" onChange={(e)=>handleOnChange(e,true)} required/>
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" name='password' value={creds.password} onChange={(e)=>handleOnChange(e,true)} placeholder="Password" required/>
              </div>
              {invalidcreds? <div style={{color:'red'}}>Invalid Credentials</div>:null}
              <div className='admin-button' >
                login as <span style={{ color: 'blue', cursor: 'pointer' }} onClick={handleOnClick} >
                  {admin ? 'User' : 'Admin'}
                </span>
              </div>
              <input type="submit" value="Login" className="btn solid" />
            </form>
            <form className="sign-up-form" onSubmit={(e)=> handleOnSubmit(e,false)}  >
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" value={signupCreds.name} name='name' onChange={(e)=>handleOnChange(e,false)} placeholder="Name" />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type="email" value={signupCreds.email} name='email' onChange={(e)=>handleOnChange(e,false)} placeholder="Email" />
              </div>
              <div className="input-field">
                <i className="fas fa-city"></i>
                <input type="city" value={signupCreds.city} name='city' onChange={(e)=>handleOnChange(e,false)} placeholder="City" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" value={signupCreds.password} name='password' onChange={(e)=>handleOnChange(e,false)} placeholder="Password" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" value={signupCreds.confirmPassword} name='confirmPassword' onChange={(e)=>handleOnChange(e,false)} placeholder="Confirm Password" />
              </div>
              <input type="submit" className="btn" value="Sign up" />
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>{admin ? 'Admin' : 'User'}</h3>
              <p>
                {admin ? 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A necessitatibus similique mollitia obcaecati nesciunt non ipsam quis, voluptatum cupiditate porro optio dicta rem impedit ducimus labore ad numquam nam maxime' : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, ex ratione'}
              </p>
              {
                admin ? null : <button className="btn transparent" id="sign-up-btn">
                  Sign up
                </button>
              }
            </div>
            <img src="img/log.svg" className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content user-content">
              <h3>One of us ?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
              <button className="btn transparent" id="sign-in-btn">
                Login
              </button>
            </div>
            <img src="img/register.svg" className="image" alt="" />
          </div>
        </div>
      </div>

    </>
  )
}

export default Login