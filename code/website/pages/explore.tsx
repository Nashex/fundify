import React, { ReactElement, useState, useEffect } from 'react'
import Footer from '../components/shell/Footer'
import Header from '../components/shell/Header'
import { Menu, Button, Text, Autocomplete, createStyles } from '@mantine/core';
import CharityScroll from '../components/shell/CharityScroll'
import { Charity, Profile, Tier, Payment } from '../types/types';
import { doc, documentId, getDoc, getDocs, query, where, collection } from 'firebase/firestore';
import { firestore } from '../firebase';
import { TbChevronDown } from 'react-icons/tb';

const useStyles = createStyles((theme) => ({
	search: {
		[theme.fn.smallerThan('xs')]: {
			display: 'none',
		},
		marginRight: 80,
		marginLeft: 80,
		width: "90%",
	},
}));

const onlyUnique = (value: any, index: any, self: any) => {
	return self.indexOf(value) === index && value !== undefined;
}

interface Props {

}

const options = ["week", "month", "year"]

const timeNumber: Map<string, number> = new Map([["week", 7], ["month", 30], ["year", 365]])

export default function Explore({ }: Props): ReactElement {
	const [drop, setDrop] = useState("week");
	const [drop2, setDrop2] = useState("week");
	const [flip, setFlip] = useState(false);
	const [charities, setCharities] = useState<Charity[]>([]);
	const [loading, setLoading] = useState(false);
	const [value, setValue] = useState('');
	const { classes } = useStyles();
	const today = new Date();

	useEffect(() => {
		getCharities();
	}, [])

	const getCharities = async () => {
		setLoading(true);
		const charityRef = collection(firestore, "charities");
		const qS = await getDocs(charityRef);
		const res: Charity[] = [];
		qS.forEach(async doc => {
			const data = doc.data();
			res.push({
				id: doc.id,
				...data as any
			})
		})

		for (const charityDoc of res) {
			const paymentQs = await getDocs(collection(firestore, "charities", charityDoc.id, "payments"));
			charityDoc.payments = [];
			paymentQs.forEach(paymentDoc => {
				let data = paymentDoc.data();
				charityDoc.payments.push(
					{ id: paymentDoc.id, ...paymentDoc.data(), date: data.date.toDate(), } as any,
				)
			});
		}

		for (const charityDoc of res) {
			const donatorQs = await getDocs(collection(firestore, "charities", charityDoc.id, "donators"));
			charityDoc.donators = [];
			donatorQs.forEach(donatorDoc => {
				charityDoc.donators.push(
					{ id: donatorDoc.id, ...donatorDoc.data() } as any
				)
			});
		}

		setCharities(res);
		setLoading(false);
	}

	return (
		<div>
			<Header />
			<div className="max-w-7xl mx-auto text-center">
				<h1 className="text-3xl font-bold text-gray-800 mt-10 mb-2 px-10">Trending this 
					<Menu width={100} >
						<Menu.Target>
							<Button onClick={() => setFlip(!flip)} className="text-green-400 text-3xl underline font-bold w-fit px-2 h-10 hover:bg-slate-100"> {drop2} </Button>
						</Menu.Target>
						<Menu.Dropdown className="border-0 font-bold">
							{
								options.map((o, i) => {
									return (
										<div key={i}>
											{o != drop2 ?
												<Menu.Item className="text-2xl text-center" onClick={() => setDrop2(o)}>{o}</Menu.Item>
												: null}
										</div>
									)
								})
							}
						</Menu.Dropdown>
					</Menu>
				</h1>
				<div className="flex flex-row px-10 w-full flex-wrap">
					{
						charities.map((o, i) => {
							let totalD = o.donators?.filter(onlyUnique);
							let totalR = o.payments?.reduce((a, b) => b ? +a + b?.amount : +a, 0);
							let pastDate = new Date();
							pastDate.setDate(today.getDate() - (timeNumber as unknown as any).get(drop2));
							let recentRaised = o.payments?.reduce((a, b) => b && b.date > pastDate ? +a + b?.amount : +a, 0)
							if (recentRaised / totalR ? totalR : 0 > 0.4) {
								return (
									<div key={i} className="bg-white rounded-lg hover:cursor-pointer p-4 min-w-[33%] max-w-[33%]">
										<CharityScroll name={o.name} description={o.desc} totalRaised={totalR} totalDonators={totalD?.length} />
									</div>
								)
							} else {
								return (
									<></>
								)
							}
						})
					}
				</div>
				<h1 className="text-3xl font-bold text-gray-800 mt-10 mb-2 px-10">All Organizations</h1>
				<div className="flex flex-row px-10 flex-wrap w-full">
					{
						charities.map((o, i) => {
							let totalD = o.donators?.filter(onlyUnique).length;
							let totalR = o.payments?.reduce((a, b) => b ? +a + b.amount : +a, 0);
							return (
								<div key={i} className="min-w-[33%] max-w-[33%] bg-white rounded-lg cursor-pointer p-4">
									<CharityScroll name={o.name} description={o.desc} totalRaised={totalR ? totalR : 0} totalDonators={totalD ? totalD : 0} />
								</div>
							)
						})
					}
				</div>
			</div>
			<Footer />
		</div>
	)
}
