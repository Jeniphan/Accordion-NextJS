import '@styles/globals.css'
import type { AppProps } from 'next/app'
import { ContextWrapper } from '@hooks/context'
import data from 'data'
import { useState } from 'react'
import SingleContent from '@components/singleContent/singleContent'

function MyApp({ Component, pageProps }: AppProps) {
	const [content, setContent] = useState(data)
	return (
		<ContextWrapper>
			<Component {...pageProps} />
			<main>
				<div className="container">
					<h1>เครื่องมือพัฒนาเว็บปี 2022</h1>
					<section>
						{content.map((data) => {
							return (<SingleContent key={data.id} {...data} />)
						})}
					</section>
				</div>
			</main>
		</ContextWrapper>
	)
}

export default MyApp
