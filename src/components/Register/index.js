import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate()
    const [inputData, setInputData] = useState({
        fullName: "",
        phone: "",
        email: "",
        password: "",
        company: "",
        isAgency: "yes",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setInputData({
            ...inputData, [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        localStorage.setItem('user_data', JSON.stringify(inputData))
        navigate('/settings')
    }

    return (
        <div className="md:aspect-[9/16] md:mx-auto h-screen bg-slate-50 p-4 md:border-2 md:border-gray-300">
            <form 
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 h-full"
            >
                <h1 className="mb-2">Create Your PopX Account</h1>
                <div className="relative">
                    <input
                        type="text"
                        name="fullName"
                        value={inputData.fullName}
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
                        Full Name <span className="text-red-500 text-2xl">*</span>
                    </label>
                </div>
                <div className="relative">
                    <input
                        type="text"
                        name="phone"
                        value={inputData.phone}
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
                        Phone Number <span className="text-red-500 text-2xl">*</span>
                    </label>
                </div>
                <div className="relative">
                    <input
                        type="email"
                        name="email"
                        value={inputData.email}
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
                        Email Address <span className="text-red-500 text-2xl">*</span>
                    </label>
                </div>
                <div className="relative">
                    <input
                        type="password"
                        name="password"
                        value={inputData.password}
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
                <div className="relative">
                    <input
                        type="text"
                        name="company"
                        value={inputData.company}
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
                        Company Name <span className="text-red-500 text-2xl">*</span>
                    </label>
                </div>
                <div>
                    <p className="flex items-center">Are you an Agency?<span className="text-red-500 text-2xl">*</span></p>
                    <div className="flex items-center space-x-4 mt-1">
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="isAgency"
                                value="yes"
                                checked={inputData.isAgency === "yes"}
                                onChange={handleInputChange}
                                className="text-purple-600 focus:ring-purple-500"
                            />
                            <span className="ml-2 text-gray-700">Yes</span>
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="isAgency"
                                value="no"
                                checked={inputData.isAgency === "no"}
                                onChange={handleInputChange}
                                className="text-purple-600 focus:ring-purple-500"
                            />
                            <span className="ml-2 text-gray-700">No</span>
                        </label>
                    </div>
                </div>
                <div className="flex items-end h-full">
                <button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 
                                text-white font-semibold 
                                py-3 rounded-md"
                >
                    Create Account
                </button>
                </div>
            </form>
        </div>
    )
}

export default Register