import { Navbar as MantineNavbar } from '@mantine/core';
import Link from 'next/link';
import { TbChevronRight, TbHome, TbLeaf } from 'react-icons/tb';
import { useAuth } from '../../context/AuthProvider';

const NAV_ITEMS = [
    {
        link: "/dashboard",
        name: "Home",
        icon: <TbHome />
    },
    {
        link: "/dashboard/charities",
        name: "Charities",
        icon: <TbLeaf />
    },
]

function Navbar() {
    const { user } = useAuth();

    return (
        <MantineNavbar width={{ base: 300 }} className="backdrop-blur-xl bg-[#FFFFFFCC]" p="none">
            <div className="flex flex-col p-2 space-y-1">
                {
                    NAV_ITEMS.map((o, i) => {
                        return (
                            <Link href={o.link} key={i}>
                                <div className="flex flex-row text-2xl items-center hover:bg-green-100 p-1 rounded transition-all cursor-pointer">
                                    <div className="bg-green-100 rounded text-green-400 p-2 mr-3">
                                        {o.icon}
                                    </div>
                                    <p className="text-lg">{o.name}</p>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>

            <div className="mt-auto border-t-2 border-t-gray-100 py-3 flex flex-row items-center justify-between hover:bg-gray-50 transition-all cursor-pointer p-2">
                <div className="truncate">
                    <h3 className="text-xl font-medium">{user?.displayName}</h3>
                    <h4 className="text-lg text-gray-400">{user?.email}</h4>
                </div>
                <TbChevronRight className="text-2xl" />
            </div>
        </MantineNavbar>
    );
}

export default Navbar;