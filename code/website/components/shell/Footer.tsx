import Link from "next/link";

function Footer() {
    return (
        <div className="">
            <div className="max-w-5xl mx-auto flex flex-row border-t-gray-100 border-t-2 py-20 justify-evenly">
                <h1 className="font-medium text-3xl">fundify</h1>
                <div className="">
                    <strong>About</strong>
                    <Link href="/about"><p className="text-gray-600 cursor-pointer">Our team</p></Link>
                    <Link href="https://github.com/Nashex/fundify"><p className="text-gray-600 cursor-pointer">Github</p></Link>
                </div>
            </div>
        </div>
    );
}

export default Footer;