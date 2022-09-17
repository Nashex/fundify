import { AppShell } from '@mantine/core'
import React, { ReactElement, useEffect, useState } from 'react';
import { Header as MantineHeader } from '@mantine/core';
import Header from '../../components/shell/Header';
import Navbar from '../../components/shell/Navbar';
import { useAuth } from '../../context/AuthProvider';
import { Charity, Profile, Tier } from '../../types/types';
import { doc, documentId, getDoc, getDocs, query, where, collection } from 'firebase/firestore';
import { firestore } from '../../firebase';
import useStore from '../../state/store';
import CharitySection from '../../components/shell/charity/CharitySection';

interface Props {

}

export default function Charities({ }: Props): ReactElement {
	const { user } = useAuth();
	const charities: Charity[] = useStore((state: any) => state.charities);
	const setCharities = useStore((state: any) => state.setCharities);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		getProfile();
	}, [])

	const getProfile = async () => {
		setLoading(true);
		if (!user?.uid) return;
		const profile = await getDoc(doc(firestore, "users", user.uid));
		const { charities: charityIds } = profile.data() as Profile;

		const charityRef = collection(firestore, "charities");
		const qS = await getDocs(query(charityRef, where(documentId(), "in", charityIds)));
		const res: Charity[] = [];
		qS.forEach(async doc => {
			const data = doc.data();
			res.push({
				id: doc.id,
				tiers: [],
				...data as any
			})
		});

		for (const charityDoc of res) {
			const tierQs = await getDocs(collection(firestore, "charities", charityDoc.id, "tiers"));
			tierQs.forEach(tierDoc => {
				charityDoc.tiers = [
					tierDoc.data() as any,
					...charityDoc.tiers,
				]
			});
		}

		console.log(res)

		setCharities(...res);
		setLoading(false);
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
			<div>
				<h1 className="text-3xl font-medium mb-10">Your <span className="text-green-400">Charities</span></h1>
				{
					charities.map((o, i) => <CharitySection key={i} charity={o} />)
				}
			</div>

		</AppShell>
	)
}
