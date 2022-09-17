import Link from "next/link";
import { useState } from "react";
import Footer from "../components/shell/Footer";
import Header from "../components/shell/Header";

function GetStarted() {
    const [step, setStep] = useState(1);

    return (
        <div className="flex flex-col w-screen min-h-screen max-w-screen overflow-x-hidden">
            <Header />

            <div className="flex-1 bg-gray-100 flex justify-center items-center relative">
                <div className={`absolute p-6 rounded-lg bg-white max-w-lg w-full ${step != 1 && "opacity-0 -translate-x-[50vw] invisible w-0"} transition-all duration-500`}>
                    <h1 className="text-3xl font-medium text-gray-800">We are <span className="text-green-400">happy</span> to have you!</h1>
                    <p className="text-xl text-gray-500">Let's get you started. This shouldn't take more that a couple minutes!</p>

                    <div className="mt-6 self-stretch flex flex-col">
                        <label className="text-gray-600 text-2xl w-full">Let's start with your name:</label>
                        <input
                            className="border-2 border-gray-200 p-2 text-xl rounded mt-2"
                            placeholder="Josh Nakka"
                        />
                        <button className="bg-green-400 text-white mt-4 rounded p-2 text-2xl hover:shadow-md"
                            onClick={() => setStep(2)}
                        >
                            Continue
                        </button>
                    </div>
                </div>
                <div className={`absolute p-6 rounded-lg bg-white max-w-lg w-full ${step != 2 && "opacity-0 translate-x-[50vw] invisible w-0"} transition-all duration-500`}>
                    <h1 className="text-3xl font-medium text-gray-800">Nice to meet you <span className="text-green-400">Josh</span>!</h1>
                    <p className="text-xl text-gray-500"> </p>

                    <div className="mt-6 self-stretch flex flex-col">
                        <label className="text-gray-600 text-2xl w-full">What's your email address?</label>
                        <input
                            className="border-2 border-gray-200 p-2 text-xl rounded mt-2"
                            placeholder="josh@gmail.com"
                        />
                        <button className="bg-green-400 text-white mt-4 rounded p-2 text-2xl hover:shadow-md"
                            onClick={() => setStep(3)}
                        >
                            Continue
                        </button>
                    </div>
                </div>

                <div className={`absolute p-6 rounded-lg bg-white max-w-lg w-full ${step != 3 && "opacity-0 -translate-x-[50vw] invisible w-0"} transition-all duration-500`}>
                    <h1 className="text-3xl font-medium text-gray-800">Finally let's set a <span className="text-green-400">password</span>!</h1>
                    <p className="text-xl text-gray-500">Make sure to remember this.</p>

                    <div className="mt-6 self-stretch flex flex-col">
                        <label className="text-gray-600 text-2xl w-full">Put your password here:</label>
                        <input
                            type={"password"}
                            className="border-2 border-gray-200 p-2 text-xl rounded mt-2"
                            placeholder="Password"
                        />
                        <button className="bg-green-400 text-white mt-4 rounded p-2 text-2xl hover:shadow-md"
                            onClick={() => setStep(4)}
                        >
                            Continue
                        </button>
                    </div>
                </div>

                <div className={`absolute p-6 rounded-lg bg-white max-w-lg w-full ${step != 4 && "opacity-0 -translate-x-[50vw] invisible w-0"} transition-all duration-500`}>
                    <h1 className="text-3xl font-medium text-gray-800">We're getting your <span className="text-green-400">account</span> ready!</h1>
                    <p className="text-xl text-gray-500">You're less than 5 seconds from your dashboard.</p>

                    <div className="w-full bg-gray-100 my-2 rounded">
                        <div className={`h-2 bg-g bg-green-300 transition-all w-100 rounded ${step != 4 && "w-0"}`} />
                    </div>
                </div>
            </div>



            <Footer />
        </div>
    );
}

export default GetStarted;