import Link from "next/link";
import { useEffect, useState } from 'react';
import { useAuth } from "../../context/AuthProvider";

interface Props {
    className?: string
}

function Header({ className }: Props) {
    const { user, signOut } = useAuth();

    return (
        <div className={`sticky top-0 backdrop-blur-xl bg-[#FFFFFFCC] border-b-[2px] border-b-slate-100 shadow-sm z-[100]`}>
            <div className={`max-w-5xl mx-auto p-4 flex flex-row items-center ${className}`}>
                <Link href={"/"}>
                    <h1 className="font-medium text-3xl cursor-pointer">fundify</h1>
                </Link>

                {
                    user ? (
                        <>
                            <Link href={"/dashboard"}>
                                <span className="ml-auto mr-6 font-medium text-lg hover:drop-shadow cursor-pointer">Dashboard</span>
                            </Link>
                            <button
                                className=" bg-green-400 px-4 py-2 rounded-full hover:shadow-lg"
                                onClick={signOut}
                            >
                                <Link href={"/"}>
                                    <span className="text-white font-medium text-lg">Log out</span>
                                </Link>
                            </button>
                        </>
                    ) : (
                        <>
                            <Link href={"/login"}>
                                <span className="ml-auto mr-6 font-medium text-lg hover:drop-shadow cursor-pointer">Login</span>
                            </Link>
                            <button className=" bg-green-400 px-4 py-2 rounded-full hover:shadow-lg">
                                <Link href={"/getstarted"}>
                                    <span className="text-white font-medium text-lg">Get Started</span>
                                </Link>
                            </button>
                        </>
                    )
                }
            </div >
        </div >
    );
}

export default Header;