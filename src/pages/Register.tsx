import { useState } from "react";
//import { useNavigate } from "react-router-dom";
import * as React from "react";
import './page_css/Register.css'
import {Link} from "react-router-dom";

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    //const navigate = useNavigate();

    function handleRegister(e: React.FormEvent) {
        e.preventDefault();

        // Basic fake register logic – just save to localStorage
        localStorage.setItem("user", JSON.stringify({ username, password }));

        // Go to chat page
        //navigate("/chat");
    }

    return <>
        <div className="flex flex-col justify-center items-center min-h-screen px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img className="mx-auto h-10 w-auto"
                     src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                     alt="Your Company"/>
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your
                    account</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                    <div>
                        <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">Username</label>
                        <div className="mt-2">
                            <input type="text" name="username" id="username" autoComplete="username" required
                                   className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password"
                                   className="block text-sm/6 font-medium text-gray-900">Password
                            </label>
                        </div>
                        <div className="mt-2">
                            <input type="password" name="password" id="password" autoComplete="current-password"
                                   required
                                   className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                        </div>
                    </div>

                    <div>
                        <button type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign
                            in
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm/6">
                    <Link
                        to="/"
                        className="font-semibold text-indigo-600 hover:text-indigo-500 ml-1"
                    >
                        Already have an account?
                    </Link>
                </p>
            </div>
        </div>
    </>
}

export default Register;