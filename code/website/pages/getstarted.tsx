import { Notification } from '@mantine/core';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Footer from "../components/shell/Footer";
import Header from "../components/shell/Header";
import { useAuth } from "../context/AuthProvider";
import { TbBrandGithub, TbX } from 'react-icons/tb';

const STEPS = [
    {
        title: <h1 className="text-3xl font-medium text-gray-800">We are <span className="text-green-400">happy</span> to have you!</h1>,
        desc: "Let's get you started. This shouldn't take more that a couple minutes!",
        label: "Let's start with your name:",
        key: "name",
        placeholder: "Josh Nakka"
    },
    {
        title: <h1 className="text-3xl font-medium text-gray-800">Nice to meet you <span className="text-green-400">Josh</span>!</h1>,
        desc: "Let's get you started. This shouldn't take more that a couple minutes!",
        label: "What's your email address?",
        key: "email",
        placeholder: "josh@gmail.com",
    },
];

function GetStarted() {
    const router = useRouter();
    const { register } = useAuth();
    const { step: initialStep } = router.query;
    const [step, setStep] = useState(0);
    const [form, setForm] = useState<any>({});
    const [error, setError] = useState(false);

    useEffect(() => {
        setStep(parseInt(initialStep as string || "0"));
    }, []);

    const updateField = (key: string, value: string) => {
        setForm((prev: any) => {
            return ({ ...prev, [key]: value });
        })
    }

    const handleNextStep = () => {
        setStep(prev => prev + 1);
        router.push({
            pathname: 'getstarted',
            query: { step: step + 1 }
        })
    }

    const handleFinish = () => {
        setStep(3);
        console.log(form);
        const { name, email, password } = form;


        register(name, email, password).then(() => {
            // Do something
        }).catch((e) => {
            console.log(e);
            setError(e.message);
            setTimeout(() => setError(false), 2500);
        });
        window.location.href = '/dashboard';
    }

    return (
        <div className="flex flex-col w-screen min-h-screen max-w-screen overflow-x-hidden">
            <Header />

            <div className="flex-1 bg-gray-100 flex justify-center items-center relative">
                <div className="absolute bottom-5 right-5">
                    { error && <Notification icon={<TbX size={18} />} color="red">
                        {error}
                    </Notification>}
                </div>
                <div className={`absolute p-6 rounded-lg bg-white max-w-lg w-full ${step != 0 && "opacity-0 -translate-x-[50vw] invisible w-0"} transition-all duration-500`}>
                    <h1 className="text-3xl font-medium text-gray-800">We are <span className="text-green-400">happy</span> to have you!</h1>
                    <p className="text-xl text-gray-500">Let's get you started. This shouldn't take more that a couple minutes!</p>

                    <div className="mt-6 self-stretch flex flex-col">
                        <label className="text-gray-600 text-2xl w-full">Let's start with your name:</label>
                        <input
                            className="border-2 border-gray-200 p-2 text-xl rounded mt-2"
                            placeholder={"Josh Nakka"}
                            onChange={(e) => updateField("name", e.target.value)}
                            value={form["name"]}
                        />
                        <button className="bg-green-400 text-white mt-4 rounded p-2 text-2xl hover:shadow-md"
                            onClick={handleNextStep}
                            disabled={!form["name"]}
                        >
                            Continue
                        </button>
                    </div>
                </div>

                <div className={`absolute p-6 rounded-lg bg-white max-w-lg w-full ${step != 1 && "opacity-0 -translate-x-[50vw] invisible w-0"} transition-all duration-500`}>
                    <h1 className="text-3xl font-medium text-gray-800">Nice to meet you <span className="text-green-400">{form["name"]?.split(" ")[0]}</span>!</h1>

                    <div className="mt-6 self-stretch flex flex-col">
                        <label className="text-gray-600 text-2xl w-full"> What's your email address?</label>
                        <input
                            className="border-2 border-gray-200 p-2 text-xl rounded mt-2"
                            placeholder={"josh@gmail.com"}
                            onChange={(e) => updateField("email", e.target.value)}
                            value={form["email"]}
                        />
                        <button className="bg-green-400 text-white mt-4 rounded p-2 text-2xl hover:shadow-md"
                            onClick={handleNextStep}
                            disabled={!form["email"]}
                        >
                            Continue
                        </button>
                    </div>
                </div>

                <div className={`absolute p-6 rounded-lg bg-white max-w-lg w-full ${step != 2 && "opacity-0 -translate-x-[50vw] invisible w-0"} transition-all duration-500`}>
                    <h1 className="text-3xl font-medium text-gray-800">Awesome, let's set a <span className="text-green-400">password</span>!</h1>
                    <p className="text-xl text-gray-500">Make sure to remember this.</p>

                    <div className="mt-6 self-stretch flex flex-col">
                        <label className="text-gray-600 text-2xl w-full">Put your password here:</label>
                        <input
                            type={"password"}
                            className="border-2 border-gray-200 p-2 text-xl rounded mt-2"
                            placeholder="Password"
                            onChange={(e) => updateField("password", e.target.value)}
                            value={form["password"]}

                        />
                        <button className="bg-green-400 text-white mt-4 rounded p-2 text-2xl hover:shadow-md"
                            onClick={handleFinish}
                            disabled={!form["password"]}
                        >
                            Finish
                        </button>
                    </div>
                </div>

                <div className={`absolute p-6 rounded-lg bg-white max-w-lg w-full ${step != 3 && "opacity-0 -translate-x-[50vw] invisible w-0"} transition-all duration-500`}>
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