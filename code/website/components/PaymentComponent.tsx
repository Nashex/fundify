import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { FormEvent, ReactElement, useState } from 'react'

export default function PaymentComponent(): ReactElement {
	const [loading, setLoading] = useState(true);

	const [errorMessage, setErrorMessage] = useState<string | null>();

	const stripe = useStripe();
	const elements = useElements();
	
	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		// We don't want to let default form submission happen here,
		// which would refresh the page.
		event.preventDefault();

		if (!stripe || !elements) {
			// Stripe.js has not yet loaded.
			// Make sure to disable form submission until Stripe.js has loaded.
			return;
		}

		const { error } = await stripe.confirmPayment({
			//`Elements` instance that was used to create the Payment Element
			elements,
			confirmParams: {
				return_url: window.location.href,
			},
		});

		if (error) {
			// This point will only be reached if there is an immediate error when
			// confirming the payment. Show error to your customer (for example, payment
			// details incomplete)
			setErrorMessage(error.message || null);
		}
	};

	return (
		<div>
			<form className="transition-all items-stretch flex flex-col" onSubmit={handleSubmit}>
				{
					loading ? (<div className="bg-lgray animate-pulse rounded-lg" />) : (
						<></>
					)
				}
				<PaymentElement className="mt-2" onReady={() => setLoading(false)} />
				<button
					type="submit"
					className="text-white text-xl bg-green-400 my-4 rounded py-2"
					disabled={!stripe}
				>Donate</button>
			</form>
			{errorMessage && <div className="bg-red-100 border-2 border-red-500 text-red-500 px-4 py-3 rounded relative">{errorMessage}</div>}
		</div>
	)
}
