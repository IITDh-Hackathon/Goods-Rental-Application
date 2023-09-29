import React, { useEffect } from 'react';
import '../css/LoginCss.css'

const Login = () => {

  // this useeffect will check if user clicks on sign up button then it will add sign up mode class to container so that it will show sign up form
  useEffect(() => {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");
    const adminButton = document.querySelector('.admin-button')
    const usercontent = document.querySelector('.user-content')
    const admincontent = document.querySelector('.hide-content')

    sign_up_btn.addEventListener("click", () => {
      container.classList.add("sign-up-mode");
    });
    adminButton.addEventListener('click', () => {
      usercontent.classList.add('hide-content')
      admincontent.classList.remove('hide-content')
    })

    sign_in_btn.addEventListener("click", () => {
      container.classList.remove("sign-up-mode");
    });
  }
  )

  return (
    <>
      <div class="container">
        <div class="forms-container">
          <div class="signin-signup">
            <form class="sign-in-form">
              <h2 class="title">Login</h2>
              <div class="input-field">
                  <i class="fas fa-user"></i>
                <input type="text" placeholder="Email" />
              </div>
              <div class="input-field">
                <i class="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
               <div className='admin-button' >
                login as <span style={{color:'blue',cursor:'pointer'}} >
                  admin
                </span>
               </div>
              <input type="submit" value="Login" class="btn solid" />
            </form>
            <form class="sign-up-form">
              <h2 class="title">Sign up</h2>
              <div class="input-field">
                <i class="fas fa-user"></i>
                <input type="text" placeholder="Name" />
              </div>
              <div class="input-field">
                <i class="fas fa-envelope"></i>
                <input type="email" placeholder="Email" />
              </div>
              <div class="input-field">
                <i class="fas fa-envelope"></i>
                <input type="city" placeholder="City" />
              </div>
              <div class="input-field">
                <i class="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <div class="input-field">
                <i class="fas fa-envelope"></i>
                <input type="email" placeholder="Confirm Password" />
              </div>
              <input type="submit" class="btn" value="Sign up" />
            </form>
          </div>
        </div>

        <div class="panels-container">
          <div class="panel left-panel">
            <div class="content user-content">
              <h3>New here ?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                ex ratione. Aliquid!
              </p>
              <button class="btn transparent" id="sign-up-btn">
                Sign up
              </button>
            </div>
            <div class="content hide-content" >
              <h3>Admin</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                ex ratione. Aliquid!
              </p>
            </div>
            <img src="img/log.svg" class="image" alt="" />
          </div>
          <div class="panel right-panel">
            <div class="content user-content">
              <h3>One of us ?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
              <button class="btn transparent" id="sign-in-btn">
                Login
              </button>
            </div>
            <img src="img/register.svg" class="image" alt="" />
          </div>
        </div>
      </div>

    </>
  )
}

export default Login