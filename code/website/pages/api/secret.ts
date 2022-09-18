import type { NextApiRequest, NextApiResponse } from 'next'
const stripe = require('stripe')(process.env.STRIPE_KEY);

type Data = {
	client_secret?: string
	status: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	const { amount } = req.query;
	if (!amount) {
		return res.json({
			status: "Please specify an amount"
		})
	}

	await (async () => {
		try {
			const intent = await paymentIntent(parseInt(amount as string) * 100);
			res.json({
				status: "Success!",
				client_secret: intent.client_secret
			});
		} catch (e) {
			console.log(e)
		}
	})();
}

const paymentIntent = (amount: number) => stripe.paymentIntents.create({
	amount,
	currency: 'usd',
	//payment_method_types: ['card']
	automatic_payment_methods: { enabled: true },
});