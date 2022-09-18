import React, { ReactElement, useEffect, useState } from 'react'
import Footer from '../../components/shell/Footer'
import Header from '../../components/shell/Header'
import { loadStripe } from '@stripe/stripe-js';
import { useRouter } from 'next/router';
import { useStripe, useElements, PaymentElement, Elements } from '@stripe/react-stripe-js';
import { Loader, TextInput } from '@mantine/core';
import { firestore } from '../../firebase'
import { getDoc, doc } from 'firebase/firestore'
import { Charity } from '../../types/types';
import PaymentComponent from '../../components/PaymentComponent';

interface Props {

}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY || "");

export default function Payment({ }: Props): ReactElement {
	const router = useRouter();
	const { query } = router;

	const [amount, setAmount] = useState(query.a || 5);
	const [loading, setLoading] = useState(false);
	const [charity, setCharity] = useState<Charity | null>(null);
	const [clientSecret, setClientSecret] = useState();

	const succeeded = query.redirect_status;

	const getCharity = async () => {
		const charity = await getDoc(doc(firestore, "charities", query.c as string));
		if (!charity.exists()) return;
		setCharity({ id: charity.id, ...charity.data() as any });

		if (!query.a) return;
		setLoading(true);
		const response = await fetch('/api/secret?amount=' + amount);
		const { client_secret: clientSecret } = await response.json();
		setClientSecret(clientSecret);
		setLoading(false);
	}

	useEffect(() => {
		if (query.c) getCharity();
	}, []);
	
	return (
		<div className="min-h-screen flex flex-col">
			<Header />

			<div className="grow flex flex-row bg-gray-100">
				<div className="bg-green-400 grow basis-1/12 flex flex-col items-center justify-center p-20 text-gray-800">
					<h1 className="text-5xl max-w-lg text-center mb-4">Thank you for donating </h1>
					<h1 className="text-9xl">${amount}</h1>
					<h1 className="text-5xl max-w-lg text-center mb-4">to <span className="text-white font-bold">{charity?.name || ""}</span></h1>

				</div>
				<div className={`grow bg-gray-100 flex flex-col justify-center items-center transition-all ${succeeded && "hidden"}`}>
					{
						clientSecret ? (
							<div className="flex flex-col items-stretch">
								<TextInput
									label="Name"
									placeholder="Your name or alias"
									className="mb-4"
									withAsterisk
								/>
								<TextInput
									label="Email"
									placeholder="Your email address"
									className="mb-4"
									withAsterisk
								/>
								<Elements stripe={stripePromise} options={{ clientSecret }}>
									<PaymentComponent />
								</Elements>
							</div>
						) : (
							<div className="rounded flex flex-col items-center">
								<h1 className="text-4xl mb-2 font-medium">Hold on while we <span className="text-green-400">redirect</span> you!</h1>
								<Loader size="xl" color="green" />
							</div>
						)
					}
				</div>
			</div>

			<Footer />
		</div >
	)
}
