import { useState } from "react";
import { signup } from "../api/authApi";
import { useNavigate } from "react-router-dom";

export default function Signup(){

    const navigate = useNavigate();

    const [form,setForm] = useState({

        firstName:"",

        lastName:"",

        email:"",

        password:""

    });

    const handleSignup = async()=>{

        try{

            await signup(form);

            alert("Signup Successful");

            navigate("/");

        }

        catch(err){

            alert(

                err.response?.data?.message ||

                "Signup Failed"

            );

        }

    }

    return(

        <div>

            <h1>Signup</h1>

            <input
                placeholder="First Name"
                onChange={(e)=>setForm({...form,firstName:e.target.value})}
            />

            <br/><br/>

            <input
                placeholder="Last Name"
                onChange={(e)=>setForm({...form,lastName:e.target.value})}
            />

            <br/><br/>

            <input
                placeholder="Email"
                onChange={(e)=>setForm({...form,email:e.target.value})}
            />

            <br/><br/>

            <input
                type="password"
                placeholder="Password"
                onChange={(e)=>setForm({...form,password:e.target.value})}
            />

            <br/><br/>

            <button onClick={handleSignup}>

                Signup

            </button>

        </div>

    )

}