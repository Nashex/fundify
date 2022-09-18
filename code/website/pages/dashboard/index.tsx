import Header from '../../components/shell/Header';
import Navbar from '../../components/shell/Navbar';
import { AppShell, Header as MantineHeader } from '@mantine/core';
import CreateCharity from '../../components/shell/charity/CreateCharity';
import useStore from './../../state/store';
import { useEffect } from 'react';
import { doc, documentId, getDoc, getDocs, query, where } from 'firebase/firestore';
import { firestore } from '../../firebase';
import { useAuth } from '../../context/AuthProvider';
import { collection } from 'firebase/firestore';
import { Profile, Charity } from '../../types/types';
import CharityCard from './../../components/shell/charity/CharityCard';
import { useState } from 'react';

function Dashboard() {
    const { user } = useAuth();
    const charities: Charity[] = useStore((state: any) => state.charities);
    const setCharities = useStore((state: any) => state.setCharities);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getProfile();
    }, [])

    const getProfile = async () => {
        if (!user?.uid) return;
        const profile = await getDoc(doc(firestore, "users", user.uid));
        const profileData = profile.data() as Profile || user;
        const charityIds = profileData.charities || [];

        const res: Charity[] = [];
        if (charityIds.length) {
            const charityRef = collection(firestore, "charities");
            const qS = await getDocs(query(charityRef, where(documentId(), "in", charityIds)));
            qS.forEach(doc => res.push({ id: doc.id, ...doc.data() as any }));
        }
        setCharities(...res);
    }

    return (
        <AppShell
            padding="md"
            navbar={<Navbar />}
            header={<MantineHeader height={78}><Header className="max-w-none" /></MantineHeader>}
            styles={(theme) => ({
                main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
            })}
        >
            <div className="">
                <h1 className="text-4xl font-medium">Welcome to the <span className="text-green-400">fundify</span> dashboard!</h1>
            </div>

            <h1 className="text-3xl font-medium mt-10">Your <span className="text-green-400">Charities</span></h1>
            <div className="flex flex-row my-2 space-x-4">
                {
                    !loading ? (
                        <>
                            {charities.map((o, i) => {
                                return (
                                    <CharityCard key={i}>
                                        <h1 className="text-green-400 text-2xl w-full font-medium">{o.name}</h1>
                                        <p className="text-gray-400 text-xl w-full truncate">{o.desc}</p>
                                    </CharityCard>
                                )
                            })}
                            <CreateCharity />
                        </>
                    ) : (
                        <CharityCard>
                            <div className="h-full w-full animate-pulse"></div>
                        </CharityCard>
                    )
                }
            </div>

            <div className="flex flex-row my-10 min-h-[200px] items-stretch">
                <div className="bg-white shadow-md border-[1px] rounded border-gray-200 p-4 flex flex-col items-center min-w-[200px]">
                    <h2 className="text-md text-gray-400">Your Current Payout</h2>
                    <strong className="text-4xl my-auto font-medium text-center">$70.67</strong>
                    <button className="bg-green-400 p-2 rounded w-full mt-4 text-white">Transfer</button>
                </div>
            </div>
        </AppShell>
    );
}

export default Dashboard;