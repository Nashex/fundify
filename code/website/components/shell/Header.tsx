function Header() {
    return (
        <div className="border-b-2 border-b-slate-100">
            <div className="max-w-5xl mx-auto p-4 flex flex-row">
                <h1 className="font-medium text-3xl">fundify</h1>

                <button className="ml-auto bg-green-400 px-4 py-2 rounded-full hover:shadow-lg">
                    <span className="text-white font-medium">Get Started</span>
                </button>
            </div>
        </div>
    );
}

export default Header;