import { useEffect } from 'react'

import Reveal from 'reveal.js'

import { Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7 } from './components'

export const Presentation = () => {

	useEffect(() => {
		const deck = new Reveal({
			transition: 'fade',
			transitionSpeed: 'fast',
		})

		deck.initialize()

		console.log('Presentation initialized')
	}, [])

	return (
		<div className="slides">
			<Slide1 />
			<Slide2 />
			<Slide3 />
			<Slide4 />
			<Slide5 />
			<Slide6 />
			<Slide7 />
		</div>
	)
}
