import { useEffect } from 'react'

import Reveal from 'reveal.js'

import { Home, WhatIs, Slide2, Slide3, Slide4, Slide5, Slide6, References } from './components'

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
			<Home />
			<WhatIs />
			<Slide2 />
			<Slide3 />
			<Slide4 />
			<Slide5 />
			<Slide6 />
			<References />
		</div>
	)
}
