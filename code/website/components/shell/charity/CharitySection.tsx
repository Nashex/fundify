import React, { ReactElement } from 'react'
import { Charity } from '../../../types/types'
import TierDashboardCard from '../../donate/TierDashboardCard'

interface Props {
	charity: Charity
}

export default function CharitySection({ charity }: Props): ReactElement {
	return (
		<div className="mb-6">
			<h1 className="text-2xl font-medium">{charity.name}</h1>
			<p className="text-xl text-gray-400">{charity.desc}</p>
			<div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 my-2 space-x-4">
				<TierDashboardCard
					charity={charity}
					name="Patron"
					desc="Puts 5 more trees in the ground"
					amount={5}
					type="one-time"
					className="blur-[4px] opacity-70 mb-4"
					create
				/>
				{
					charity.tiers?.map((o, i) => {
						return (<TierDashboardCard
							charity={charity}
							name={o.name}
							desc={o.desc}
							amount={o.amount}
							type={o.type}
							className="mb-4"
						/>)
					})
				}
			</div>
		</div>
	)
}
