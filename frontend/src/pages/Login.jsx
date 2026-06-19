import { useState } from "react";
import { login } from "../api/authApi";
import { useNavigate } from "react-router-dom";

export default function Login(){

    const navigate = useNavigate();

    const [email,setEmail] = useState("");

    const [password,setPassword] = useState("");

    const handleLogin = async()=>{

        try{

            const response = await login({

                email,

                password

            });

            localStorage.setItem(

                "token",

                response.token

            );

            navigate("/dashboard");

        }

        catch(err){

            alert(

                err.response?.data?.message ||

                "Login Failed"

            );

        }

    }

    return(

        <div>

            <h1>Login</h1>

            <input

                placeholder="Email"

                value={email}

                onChange={(e)=>setEmail(e.target.value)}

            />

            <br/><br/>

            <input

                type="password"

                placeholder="Password"

                value={password}

                onChange={(e)=>setPassword(e.target.value)}

            />

            <br/><br/>

            <button onClick={handleLogin}>

                Login

            </button>

        </div>

    )

}