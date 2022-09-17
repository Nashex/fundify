import React, { ReactElement } from 'react'
import Footer from '../components/shell/Footer'
import Header from '../components/shell/Header'

interface Props {
	
}

export default function Explore({}: Props): ReactElement {
	return (
		<div>
			<Header />

			<div className="max-w-7xl mx-auto">
				This is where the content goes...
			</div>

			<Footer />
		</div>
	)
}
