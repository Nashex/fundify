import { Button, Modal, Notification, NumberInput, Switch, Textarea, TextInput } from '@mantine/core'
import React, { ReactElement, useState } from 'react'
import { useAuth } from '../../context/AuthProvider'
import { Charity } from '../../types/types'
import { collection, addDoc, deleteDoc, doc } from 'firebase/firestore'
import { firestore } from '../../firebase'
import useStore from '../../state/store'
import { TbTrash, TbX } from 'react-icons/tb'

interface Props {
	id?: string,
	charity: Charity,
	name: string
	desc: string
	amount: number,
	type: "monthly" | "one-time"
	className?: string,
	create?: boolean
	onClick?: (e: Event) => void
}

export default function TierDashboard({ id, charity, name, desc, amount, type, className, create }: Props): ReactElement {
	const { user } = useAuth();
	const [open, setOpen] = useState(false);
	const [form, setForm] = useState<any>({
		name: create ? "" : name,
		desc: create ? "" : desc,
		amount: create ? "" : amount,
		type: type == "monthly"
	});
	const [error, setError] = useState("");

	const addTier = useStore((state: any) => state.addTier);
	const removeTier = useStore((state: any) => state.removeTier);

	const close = () => setOpen(false);

	const updateField = (key: string, value: any) => {
		setForm((prev: any) => {
			return ({ ...prev, [key]: value });
		})
	}

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		if (!form["name"] || !form["desc"] || !form["amount"]) {
			setError("Missing fields.");
			return setTimeout(() => setError(""), 2500);
		}

		const tier = await addDoc(collection(firestore, "charities", charity.id, "tiers"), {
			...form
		});

		addTier(charity, { id: tier.id, ...form });
		close();
	}

	const handleDelete = async (e: any) => {
		await deleteDoc(doc(firestore, "charities", charity?.id || "", "tiers", id || ""));
		removeTier(charity, { id });
	}

	return (
		<div className="relative">
			<div className={`relative bg-white p-4 rounded basis-1/6 ${className}`}>
				<TbTrash
					onClick={handleDelete}
					className="absolute right-4 top-4 text-xl text-gray-400 hover:text-red-400 cursor-pointer"
				/>
				<strong className="text-xl">{name}</strong>
				<p className="text-md text-gray-400">{desc}</p>
				<h1 className="text-5xl font-bold text-green-400 my-10">${amount}</h1>
				<p className="text-lg text-gray-400">This is a {type} donation</p>
				<button onClick={() => setOpen(true)} className="w-full bg-green-400 p-2 text-xl text-white rounded">Edit this Tier</button>
			</div>
			<Modal
				opened={open}
				onClose={() => setOpen(false)}
				centered
				size="md"
				title={<h1 className="text-3xl font-medium">Add a tier to <span className="text-green-400">{charity.name}</span></h1>}
			>
				{
					error && (
						<Notification icon={<TbX size={18} />} color="red">
							{error}
						</Notification>
					)
				}
				<TextInput
					placeholder="Patron"
					label="Tier Name"
					className="mt-2"
					value={form["name"]}
					onChange={(e) => updateField("name", e.target.value)}
					maxLength={50}
					withAsterisk
				/>
				<Textarea
					placeholder="Put a brief description of what benefits this donation will cover! (max 200 chars)"
					className="mt-4"
					label="Tier Description"
					value={form["desc"]}
					maxLength={200}
					onChange={(e) => updateField("desc", e.target.value)}
					withAsterisk
				/>
				<NumberInput
					placeholder="The amount to purchase this tier"
					className="mt-4"
					label="Donation amount (USD)"
					precision={2}
					prefix={"$"}
					value={form["amount"]}
					maxLength={200}
					onChange={(val: number) => updateField("amount", val)}
					withAsterisk
				/>
				<Switch
					className="mt-4"
					label="Monthly subscription plan"
				/>
				<Button
					className="bg-green-400 w-full mt-4"
					onClick={handleSubmit}
				>
					<p className="text-xl">Create</p>
				</Button>

			</Modal>
			{
				create && (<div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center border border-gray-100">
					<button onClick={() => setOpen(true)} className="text-2xl text-white bg-green-400 p-2 rounded shadow-md hover:shadow-sm">Create a tier</button>
				</div>)
			}
		</div>
	)
}
