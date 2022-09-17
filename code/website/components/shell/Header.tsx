import Link from "next/link";

function Header() {
    return (
        <div className="border-b-2 border-b-slate-100">
            <div className="max-w-5xl mx-auto p-4 flex flex-row">
                <Link href={"/"}>
                    <h1 className="font-medium text-3xl cursor-pointer">fundify</h1>
                </Link>

                <button className="ml-auto bg-green-400 px-4 py-2 rounded-full hover:shadow-lg">
                    <Link href={"/getstarted"}>
                        <span className="text-white font-medium">Get Started</span>
                    </Link>
                </button>
            </div>
        </div>
    );
}

export default Header;