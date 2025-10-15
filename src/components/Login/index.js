import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
    const [inputData, setInputData] = useState({
        email: "",
        password: "",
    });
    const [invalidEmail, setInvalidEmail] = useState("")
    const [invalidPassword, setInvalidPassword] = useState("")

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setInputData({
            ...inputData, [name]: value
        })
    }

    const handleLogin = (event) => {
        event.preventDefault()
        const userData = JSON.parse(localStorage.getItem('user_data'))
        if (!userData) {
            alert("No user found. Please register first.")
            return
        }
        setInvalidEmail("");
        setInvalidPassword("")

        if (userData.email !== inputData.email) {
            setInvalidEmail("Invalid Email")
            return
        }
        if (userData.password !== inputData.password) {
            setInvalidPassword("Invalid Password")
            return
        }
        navigate('/settings')
    }

    return (
        <div className="md:aspect-[9/16] md:mx-auto h-screen bg-slate-50 p-4 md:border-2 md:border-gray-300">
            <form
                onSubmit={handleLogin}
                className="flex flex-col gap-5 h-full"
            >
                <h1 className="mb-2">Create Your PopX Account</h1>
                <div className="relative">
                    <input
                        type="email"
                        name="email"
                        value={inputData.email}
                        onChange={handleInputChange}
                        autoComplete="username"
                        className="w-full border-2 border-gray-400 
                                    bg-gray-100
                                    rounded-md p-3 text-gray-900 
                                    focus:border-blue-500 
                                    focus:outline-none w-full"
                        required
                    />
                    <label
                        className="flex absolute left-3 -top-3 text-violet-700 
                                    bg-gray-100 px-1 transition-all duration-200
                                    items-cenetr"
                    >
                        Email Address <span className="text-red-500 text-2xl">*</span>
                    </label>
                </div>
                {invalidEmail && <p>{invalidEmail}</p>}
                <div className="relative">
                    <input
                        type="password"
                        name="password"
                        value={inputData.password}
                        autoComplete="current-password"
                        onChange={handleInputChange}
                        className="w-full border-2 border-gray-400 
                                    bg-gray-100
                                    rounded-md p-3 text-gray-900 
                                    focus:border-blue-500 
                                    focus:outline-none w-full"
                        required
                    />
                    <label
                        className="flex absolute left-3 -top-3 text-violet-700 
                                    bg-gray-100 px-1 transition-all duration-200
                                    items-cenetr"
                    >
                        Password <span className="text-red-500 text-2xl">*</span>
                    </label>
                </div>
                {invalidPassword && <p>{invalidPassword}</p>}
                <div className="flex items-end h-full">
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 hover:bg-indigo-700 
                                text-white font-semibold 
                                py-3 rounded-md"
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Login