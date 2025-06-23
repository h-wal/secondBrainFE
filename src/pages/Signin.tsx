import { useState } from "react"
import { Backend_URL } from "../config";
import { Redirect } from "../components/redirect";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export const SignIn = () => {
    const [username, setUsername] = useState("");
    const [password , setPassword] = useState("");
    const navigate = useNavigate();


    async function signinhandler(){
        const response = await axios.post(`${Backend_URL}/user/signin`, {
            username: username,
            password: password
        })

        console.log(response.data.token);
        const token = response.data.token;
        localStorage.setItem("token", token);
        navigate("/dashboard")
    }

    return(
        <div id="page" className="bg-gray-100 h-screen flex justify-center items-center">
            <div className="bg-white rounded-2xl border-gray-200 border flex flex-col w-96 h-96 items-center">
                <div className="items-center flex justify-center text-3xl p-4 mt-8">
                    Sign In
                </div>
                <div className="flex flex-col">
                    <input onChange={(e) => {setUsername(e.target.value)}} className="w-68 px-6 py-2 mx-4 my-2 border border-indigo-700 rounded-md" type="text" placeholder="Username" />
                    <input onChange={(e) => {setPassword(e.target.value)}} className="w-68 px-6 py-2 mx-4 my-2 border border-indigo-700 rounded-md" type="text" placeholder="Password"/>
                    <button onClick={signinhandler} className="bg-indigo-700 text-white text-font-large p-2 mx-4 my-2 rounded-lg hover:bg-indigo-600 cursor-pointer">Sign In</button>
                </div>
                <Redirect text="New User?" redirect="/signup" redirectText="SignUpHere"></Redirect>
            </div>
        </div>
    )
}