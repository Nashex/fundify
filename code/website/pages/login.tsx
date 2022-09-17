import Header from './../components/shell/Header';
import Footer from './../components/shell/Footer';
import { useState } from 'react';
import { useAuth } from '../context/AuthProvider';
import { Notification } from '@mantine/core';
import { TbX } from 'react-icons/tb';
import { useRouter } from 'next/router';

function Login() {
    const { logIn } = useAuth();
    const router = useRouter();

    const [form, setForm] = useState<any>({});
    const [error, setError] = useState(false);

    const updateField = (key: string, value: string) => {
        setForm((prev: any) => {
            return ({ ...prev, [key]: value });
        })
    }

    const handleFinish = (e: any) => {
        e.preventDefault();
        const { email, password } = form;
        logIn(email, password).then(() => {
            router.push({
                pathname: '/'
            })
        }).catch((e) => {
            setError(e.message);
            setTimeout(() => setError(false), 2500);
        });
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <div className="flex-1 bg-gray-100 flex justify-center items-center relative">
                <div className="absolute bottom-5 right-5">
                    {error && <Notification icon={<TbX size={18} />} color="red">
                        {error}
                    </Notification>}
                </div>
                <form className={`absolute p-6 rounded-lg bg-white max-w-lg w-full transition-all duration-500`}>
                    <h1 className="text-3xl font-medium text-gray-800">We are <span className="text-green-400">happy</span> to have you!</h1>
                    <p className="text-xl text-gray-500">Let's get you started. This shouldn't take more that a couple minutes!</p>

                    <div className="mt-6 self-stretch flex flex-col">
                        <label className="text-gray-600 text-lg w-full">Email</label>
                        <input
                            className="border-2 border-gray-200 p-2 text-xl rounded mb-2"
                            placeholder={"josh@gmail.com"}
                            onChange={(e) => updateField("email", e.target.value)}
                            value={form["email"]}
                            id="email"
                        />
                        <label className="text-gray-600 text-lg w-full">Password</label>
                        <input
                            className="border-2 border-gray-200 p-2 text-xl rounded mb-2"
                            placeholder={"password"}
                            onChange={(e) => updateField("password", e.target.value)}
                            value={form["password"]}
                            type="password"
                            id="password"
                        />
                        <button className="bg-green-400 text-white mt-4 rounded p-2 text-2xl hover:shadow-md"
                            onClick={handleFinish}
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>

            <Footer />
        </div>
    );
}

export default Login;