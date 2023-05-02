import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
const login=()=>{
   const [form,setForm]=useState({
    username:"",
    email:"",
    password:""
   })
   const handlechange
   return(
    <div class="container">
    <div class="form-box">
         <h1 id="title">Sign up</h1>
         <form>
              <div class="input-group">
                   <div class="input-field" id="nameField">
                        <i class="fa-solid fa-user"></i>
                        <input type="text" placeholder="Name" value={form.username} onChange={handlechange}/>
                   </div>

                   <div class="input-field">
                        <i class="fa-regular fa-envelope"></i>
                        <input type="email" placeholder="Email" id="email" value={form.email}/>
                   </div>

                   <div class="input-field">
                        <i class="fa-solid fa-lock"></i>
                        <input type="passsowrd" placeholder="Password" id="password" value={form.password}/>
                   </div>
                   <p>Forgot password? <a href="#"> Click Here</a></p>
              </div>
              <div class="btn-field">
                   <button type="button" id="signupBtn">Sign up</button> 
                   
                   <button type="button" id="loginBtn" class="disable">Login</button>
              </div>
         </form>
    </div>
 </div>
   )  
}