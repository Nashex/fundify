import type { NextPage } from 'next'
import Header from '../components/shell/Header';
import { TbHeartHandshake, TbChevronsUp, TbChartArrowsVertical, TbBrandGithub, TbUsers } from 'react-icons/tb';
import Link from 'next/link';
import Footer from '../components/shell/Footer';
import WidgetModal from '../components/widget/WidgetModal';
import { Modal } from '@mantine/core';
import Widget from '../components/widget/Widget';

const ITEMS = [
    {
        icon: <TbHeartHandshake color="white" size={25} />,
        title: "Built for collaboration",
        desc: "With no overhead cost and an open source design, fundify is built for sharing."
    },
    {
        icon: <TbChevronsUp color="white" size={25} />,
        title: "Quick to deploy",
        desc: "Ease of use enables our collaborators to get up and running faster than ever."
    },
    {
        icon: <TbChartArrowsVertical color="white" size={25} />,
        title: "Optimized for you",
        desc: "Do not confuse ease of use for lack of effectiveness; we help you understand your donors."
    },
];

const Home: NextPage = () => {
    return (
        <div className="relative">
            <Header />

            <div className="p-10">
                <div className="max-w-5xl mx-auto flex flex-col items-center pt-20">
                    <h1 className="text-9xl font-bold text-green-300 mb-4"><span className="text-green-500">Jumpstart</span> your charity.</h1>
                    <h2 className="text-4xl text-gray-600 my-5">Donations dont have to be hard. Quickly setup a fully fledged donation tool for your charity with advanced analytics, sleek integration, and no cost.</h2>
                </div>
            </div>

            <div className="max-w-5xl mx-auto flex md:flex-row flex-col py-10">
                {
                    ITEMS.map((o, i) => (
                        <div className="flex flex-col items-start md:mr-20 mb-10" key={i}>
                            <div className="bg-gradient-to-tr from-green-300 to-green-500 p-4 rounded-lg">
                                {o.icon}
                            </div>
                            <h3 className="text-xl font-medium py-1">{o.title}</h3>
                            <p className="text-gray-500">{o.desc}</p>
                        </div>
                    ))
                }
            </div>

            <div className="max-w-5xl mx-auto pt-20">
                <div className="flex flex-row justify-center">
                    <Link href={"/getstarted"}>
                        <div className="bg-gradient-to-tr from-green-400 to-green-500 flex flex-row px-5 py-3 rounded items-center mr-4 cursor-pointer hover:shadow-md">
                            <p className="px-2 text-white text-2xl">Get Started</p>
                        </div>
                    </Link>
                    <Link href={"https://github.com/Nashex/fundify"}>
                        <div className="bg-gray-800 flex flex-row px-5 py-3 rounded items-center mr-4 cursor-pointer hover:shadow-md">
                            <TbBrandGithub color="white" size={30} />
                            <p className="px-2 text-white text-2xl">Github</p>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="bg-gray-100 mt-20">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
                    <path fill="#fff" fill-opacity="1" d="M0,128L40,144C80,160,160,192,240,192C320,192,400,160,480,133.3C560,107,640,85,720,80C800,75,880,85,960,106.7C1040,128,1120,160,1200,165.3C1280,171,1360,149,1400,138.7L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
                </svg>
                <div className="max-w-5xl mx-auto py-10">
                    <div className="max-w-5xl mx-auto py-10"></div>
                    <h2 className="text-5xl font-bold text-gray-800 mb-10 px-10">Set up our <span className="text-green-400">widget</span> on any website!</h2>

                    <Widget id="u1WDFVbUrPfZx5LDbcWj" />
                </div>
            </div>

            <div className="bg-gray-100 pt-4">
                <div className="max-w-5xl mx-auto py-4">
                    <Link href = {'/explore'}>
                        <h2 className="text-5xl font-bold text-gray-800 mb-10 px-10 hover:cursor-pointer">Explore our  <span className="text-green-400 hover:cursor-pointer">charities</span>!</h2>
                    </Link>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Home
