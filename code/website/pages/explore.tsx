import React, { ReactElement, useState } from 'react'
import Footer from '../components/shell/Footer'
import Header from '../components/shell/Header'
import { Menu, Button, Text, Autocomplete, createStyles } from '@mantine/core';
import CharityScroll from '../components/shell/CharityScroll'
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { IconSearch } from '@tabler/icons';
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


interface Props {

}

const options = ["week", "month", "year"]

const charities = [
	{
		name: "Josh's JHU Jewish Jfoundation",
		description: "Making Rhymes for the JHU Hillel every week.",
		stats: {
			week: {
				moneyGained: 123.45,
				donatorGained: 230,
			},
			month: {
				moneyGained: 1234.56,
				donatorGained: 57,
			},
			year: {
				moneyGained: 12345.67,
				donatorGained: 106,
			},
			totalRaised: 6954.00,
			totalDonators: 423,
		}
	},
	{
		name: "Aravind Skumar Meeting Foundation",
		description: "Meet Aravind Skumar for free with proceeds going straight to India.",
		stats: {
			week: {
				moneyGained: 123.45,
				donatorGained: 23,
			},
			month: {
				moneyGained: 1234.56,
				donatorGained: 57,
			},
			year: {
				moneyGained: 12345.67,
				donatorGained: 106,
			},
			totalRaised: 58943759.23,
			totalDonators: 1200000,

		}
	},
	{
		name: "Ryan's Morbillion Morbin' time",
		description: "Morbius was one of the movies of all time",
		stats: {
			week: {
				moneyGained: 123.45,
				donatorGained: 23,
			},
			month: {
				moneyGained: 1234.56,
				donatorGained: 57,
			},
			year: {
				moneyGained: 12345.67,
				donatorGained: 106,
			},
			totalRaised: 2342432.69,
			totalDonators: 34823892,

		}
	}
]

export default function Explore({ }: Props): ReactElement {
	const [drop, setDrop] = useState("week");
	const [flip, setFlip] = useState(false);
	const [value, setValue] = useState('');
	const { classes } = useStyles();
	return (
		<div>
			<Header />
			<div className="max-w-7xl mx-auto text-center">
				<h1 className="text-3xl font-bold text-gray-800 mb-2 px-10 mt-10">Our top picks for the 
					<Menu width={100} >
						<Menu.Target>
							<Button onClick={() => setFlip(!flip)} className="text-green-400 text-3xl font-bold w-fit px-2 h-10 hover:bg-slate-100"> {drop} {
								
									<TbChevronDown size={20} className={`mt-2 self-start ${!flip ? "rotate-90" : ""} transition-all`}/>
								
							} </Button> 
						</Menu.Target>
						<Menu.Dropdown className="border-0 font-bold">
							{
								options.map((o) => {
									return (
										<div>
											{o != drop ?
												<Menu.Item className="text-2xl text-center" onClick={() => setDrop(o)}>{o}</Menu.Item>
											: null}
										</div>
									)
								})
							}
						</Menu.Dropdown>
					</Menu>
				</h1>
				<div className="flex flex-row px-10 overflow-x-auto w-fit">
					{
						charities.map((o, i) => {
							return (
								<div key={i} className="bg-white rounded-lg cursor-pointer p-4 shrink self-stretch h-full basis 1/3">
									{o.stats[drop].donatorGained / o.stats.totalDonators > 0.4 ?
										<CharityScroll name={o.name} description={o.description} totalRaised={o.stats.totalRaised} totalDonators={o.stats.totalDonators} />
										: null}
								</div>
							)
						})
					}
				</div>
				<h1 className="text-3xl font-bold text-gray-800 mt-10 mb-2 px-10">Fastest growing charities of the past <button className="text-green-400">month</button></h1>
				<h1 className="text-3xl font-bold text-gray-800 mt-10 mb-2 px-10">A list of all charities that use our site</h1>
				<Autocomplete
				className={classes.search}
				placeholder="Search"
				icon={<IconSearch size={16} stroke={1.5} />}
				data={[]}
				value={value}
				onChange={setValue}
			/>
				<div className="flex flex-row px-10 overflow-x-scroll w-fit">
					{
						charities.map((o, i) => {
							return (
								<div key={i} className="min-w-[33%] bg-white rounded-lg cursor-pointer p-4">
									<CharityScroll name={o.name} description={o.description} totalRaised={o.stats.totalRaised} totalDonators={o.stats.totalDonators} />
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
