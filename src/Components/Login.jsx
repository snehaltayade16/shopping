import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(){
    const [email,setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const navigate = useNavigate()
    function loginUser(){
        if(email == 'snehal@gmail.com' && password == 'Snehal@123'){
            localStorage.setItem('userLogedIn', true)
            alert('welcome')
            navigate('/Cart')
        }else{
            alert('invalid email or password')
        }
        console.log(email, password)
    }
    return(
       <div className="h-full w-full flex flex-col items-center justify-center">
            <p className="mb-8 text-3xl">Login</p>
            <div className="flex flex-col justify-center border h-80 aspect-square p-2.5">
                <input placeholder="Enter Email Id" className="mb-8 p-2.5" onChange={(e) => setEmail(e.target.value) }></input>
                <input placeholder="Password"  className="mb-8 p-2.5" onChange={(e) => setPassword(e.target.value)}></input>
                <button onClick={() => loginUser()}>Login</button>
            </div>
       </div>
    )
}
export default Login;