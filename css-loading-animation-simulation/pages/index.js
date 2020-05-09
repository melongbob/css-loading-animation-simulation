import Head from 'next/head'

export default function Home() {
	
	const content = {
		header: "Can we have Bender Burgers again?",
		intro: "I didn't ask for a completely reasonable excuse! I asked you to get busy! We're also Santa Claus! I had more, but you go ahead. You're going to do his laundry? Belligerent and numerous. You can see how I lived before I met you.",
		list: [
			"You mean while I'm sleeping in it?"
			,"Oh dear! She's stuck in an infinite loop, and he's an idiot! Well, that's love for you."
			,"Well I'da done better, but it's plum hard pleading a case while awaiting trial for that there incompetence."
		]
	}
	
	return (
		<div className="container">
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<h1>{ content.header }</h1>
				<p>{ content.intro }</p>
				<ul>
					{ content.list.map((item, i) => {
					  return (
						<li key={i}>{ item }</li>
					  )
					})}
				</ul>
			</main>
			
			<style jsx>{`
				.loading{
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
