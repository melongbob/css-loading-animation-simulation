import Head from 'next/head'

import { useState, useEffect } from 'react';

export default function Home() {
	
	const [loadingState, updateLoadingState] = useState(true);
	const [contentState, updateContentState] = useState({
		header: 'Loading',
		intro: 'Loading',
		list: [
			'Loading',
			'Loading',
			'Loading'
		]
	});
	
	const content = {
		header: "Can we have Bender Burgers again?",
		intro: "I didn't ask for a completely reasonable excuse! I asked you to get busy! We're also Santa Claus! I had more, but you go ahead. You're going to do his laundry? Belligerent and numerous. You can see how I lived before I met you.",
		list: [
			"You mean while I'm sleeping in it?"
			,"Oh dear! She's stuck in an infinite loop, and he's an idiot! Well, that's love for you."
			,"Well I'da done better, but it's plum hard pleading a case while awaiting trial for that there incompetence."
		]
	}

	useEffect(() => {
		setTimeout(() => {
			updateContentState(content);
			updateLoadingState(false);
		}, 2000)
	}, []);
	
	return (
		<div className="container">
			<Head>
				<title>Loading Animation Simulation</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={loadingState ? 'loading' : ''}>
				<h1>{ contentState.header }</h1>
				<p>{ contentState.intro }</p>
				<ul>
					{ Array.isArray(contentState.list) && contentState.list.map((item, i) => {
					  return (
						<li key={i}>{ item }</li>
					  )
					})}
				</ul>
			</main>
			
			<style jsx>{`
				.loading h1,
				.loading p,
				.loading li{
					color: transparent;
					background: linear-gradient(100deg, #eceff1 30%, #f6f7f8 50%, #eceff1 70%);
					background-size: 400%;
					animation: loading 1.2s ease-in-out infinite;
				}

				@keyframes loading{
					0%{
						background-position: 100% 50%;
					}
					100%{
						background-position: 0 50%;
					}
				}

				li{
					margin-bottom: .5em;
				}
			`}</style>
		</div>
	)
}
