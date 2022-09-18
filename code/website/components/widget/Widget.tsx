import React, { ReactElement, useState } from 'react'

interface Props {

}

const TIERS = [
	{
		name: "Patron",
		desc: "This will help us host the site for 3 weeks.",
		amount: 5,
		recurring: false,
		link: ""
	},
	{
		name: "Patron+",
		desc: "This will help us host the site for 2.5 months.",
		amount: 15,
		recurring: false,
		link: ""
	},
	{
		name: "Ultra Patron",
		desc: "This will help us host the site for 3.5 months.",
		amount: 25,
		recurring: false,
		link: ""
	},
]

export default function Widget({ }: Props): ReactElement {
	const [active, setActive] = useState<string | number>(0);
	const [recurring, setRecurring] = useState(false);

	return (
		<div className="flex items-stretch flex-col h-full bg-transparent p-4 rounded shadow-sm">
			<div className="grid grid-cols-2">
				<button
					className={`mr-2 ml-2 text-3xl transition-all rounded mb-4 p-3 bg-white border-green-400 border-2 font-medium ${!recurring ? "text-white bg-green-400" : "text-green-500"}`}
					onClick={() => setRecurring(false)}
				>One Time</button>
				<button
					className={`mr-2 ml-2 text-3xl transition-all rounded mb-4 p-3 bg-white border-green-400 border-2 font-medium ${recurring ? "text-white bg-green-400" : "text-green-600"}`}
					onClick={() => setRecurring(true)}
				>Monthly</button>
			</div>
			<div className="grid grid-cols-3">
				{
					TIERS.map((o, i) => {
						return (
							<div
								key={i}
								className={`p-4 rounded bg-white shadow-sm ml-2 mr-2 mb-4 hover:shadow-md transition-all border-2 cursor-pointer ${active == i && "border-green-400 shadow:md"}`}
								onClick={() => setActive(i)}
							>
								<strong className="text-xl">{o.name}</strong>
								<h2 className="text-xl text-gray-600">{o.desc}</h2>
								<h3 className="py-8 text-center text-3xl text-gray-400"><span className="text-5xl font-medium text-green-400">${o.amount}</span> {!recurring ? "once" : "monthly"}</h3>
							</div>
						)
					})
				}
				<div
					onClick={() => setActive("custom")}
					className={`p-4 rounded bg-white col-span-2 ml-2 shadow-md text-gray-600 shadow-sm auto-cols-max mr-4 flex text-2xl items-center transition justify-center border-2 ${active == "custom" ? "border-green-400" : "border-gray-200"}`}
				>
					<h1 className="text-2xl mr-2 text-align-middle">Or enter a custom amount</h1>
					$<input type="number" className="w-20 p-2 bg-gray-50" placeholder={"5"} />
				</div>
				<button className="bg-green-400 text-white text-2xl rounded p-2 mr-2">Donate</button>
			</div>
		</div>)
}
