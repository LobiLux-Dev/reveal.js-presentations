import { v4 as uuidv4 } from 'uuid'

import { Card } from '../components'

import { CardProps } from '../interfaces/Card'

import MicrosoftLogo from '../assets/microsoft-logo.svg'
import EthereumLogo from '../assets/ethereum-logo.jpg'

export const WhatIs = () => {
	const cardProps: CardProps[] = [
		{
			alt: 'Microsoft',
			body: {
				title: 'Microsoft',
				info: 'Microsoft es una empresa global especializada en tecnología que proporciona una amplia gama de software y hardware de alta calidad.',
			},
			img: MicrosoftLogo,
		},
		{
			alt: 'Ethereum',
			body: {
				title: 'Ethereum',
				info: 'Ethereum es una red global de computadoras que siguen un conjunto de reglas conocidas como el protocolo Ethereum.',
			},
			img: EthereumLogo,
		},
	]

	return (
		<section>
			<h1>¿Qué es?</h1>
			<div className="!flex justify-around items-center">
				{cardProps.map(cardProp => (
					<Card key={uuidv4()} {...cardProp} />
				))}
			</div>
		</section>
	)
}
