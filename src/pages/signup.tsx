import { useState } from "react"
import axios from "axios";
import { Backend_URL } from "../config";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
    const [username, setusername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const navigate = useNavigate();

    async function submitHandler(){
        console.log("reached")
        const response = await axios.post(`${Backend_URL}/user/signup`, {
            username: username,
            password: password,
            email: email
        })
        if (response){
            alert("User Signed In")
        }
        navigate("/signin")
    }

    return(
        <div id="page" className="bg-gray-100 h-screen flex justify-center items-center">
            <div className="bg-white rounded-2xl border-gray-200 border flex flex-col w-96 h-96 items-center">
                <div className="items-center flex justify-center text-3xl p-4 mt-8">
                    Sign Up
                </div>
                <div className="flex flex-col">
                    <input value={username} onChange={(e) => setusername(e.target.value)} className="w-68 px-6 py-2 mx-4 my-2 border border-indigo-700 rounded-md" type="text" placeholder="Username" />
                     <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-68 px-6 py-2 mx-4 my-2 border border-indigo-700 rounded-md" type="text" placeholder="Email"/>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} className="w-68 px-6 py-2 mx-4 my-2 border border-indigo-700 rounded-md" type="text" placeholder="Password"/>
                    <button onClick={submitHandler} className="bg-indigo-700 text-white text-font-large p-2 mx-4 my-2 rounded-lg cursor-pointer hover:bg-indigo-600">Sign Up</button>
                </div>
                <div className="text-xs text-gray-400 mt-4">
                    Already Have an Account? Log In
                </div>
            </div>
        </div>
    )
}