import {Link} from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup(){
     
         let [SignUpData,setSignUpData] = useState({});
          let [error,setError] = useState({});
          let navigate = useNavigate();

          let handleChange = (e)=>{
     
             let {name,value} = e.target;
             setSignUpData({...SignUpData, [name]:value }); 
     
          };
       
          let formError = {};

           let handleValidate = (SignUpData)=>{

        if(!SignUpData.email){
            formError.email = "Email is required";
        }
        else if(!SignUpData.password){
            formError.password= "Password is required";
        }
        else if(!SignUpData.confirmPassword){
            formError.confirmPassword = "Confirm Password is required";
        }else{
            console.log("API data",SignUpData);
            navigate("/login")
        }
        setError(formError);
     };


     let handleClick = ()=>{

          handleValidate(SignUpData);

     };

     console.log(error.email);
        

    return(
        <>
         <div class="grid grid-cols-3 gap-4">
        <div class="..."></div>
        <div class="m-auto">
            <div className="card w-100 h-115 mt-5 border border-black-200 rounded-md shadow-xl/50">
            <h1 className="card-header text-center font-bold text-xl ">Signup</h1>
            <div className="card-body w-80 h-100 m-auto mt-8">
            <div className="mb-4">
                <div>
                    <label className="font-bold text-sm">Email</label>
                </div>
                <input className="w-full border border-black-200 h-8 rounded-md" 
                type="email" onChange={handleChange} name="email"
                />
                <p className="text-red-700">{error.email}</p>
            </div>

            <div className="mb-4">
                <div>
                    <label className="font-bold text-sm">Password</label>
                </div>
                <input className="w-full border border-black-200 h-8 rounded-md" 
                type="password" onChange={handleChange} name="password"
                />
                <p className="text-red-700">{error.password}</p>
            </div>
            <div className="mb-4">
                <div>
                    <label className="font-bold text-sm">Confirm Password</label>
                </div>
                <input className="w-full border border-black-200 h-8 rounded-md" 
                type="password"  onChange={handleChange} name="confirmPassword"
                />
                <p className="text-red-700">{error.confirmPassword}</p>
            </div>
            <div>
                <button  className="w-full bg-blue-500 text-white h-8 rounded-md" onClick={handleClick}>
                    Signup
                </button>
                </div>
                <Link to="/Login" >Already Have a Account</Link> 
            </div>
                </div>    
        </div>
        <div class="..."></div>
     </div>
        </>
    )
}

export default Signup;