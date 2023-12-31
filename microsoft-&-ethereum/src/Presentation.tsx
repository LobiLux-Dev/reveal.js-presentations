import { useEffect } from 'react'

import Reveal from 'reveal.js'

import { Home, WhatIs, Slide2, Origins, Support, Slide5, Slide6, References } from './views'

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
			<Origins />
			<Support />
			<Slide2 />
			<Slide5 />
			<Slide6 />
			<References />
		</div>
	)
}
