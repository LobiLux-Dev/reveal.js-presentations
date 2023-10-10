import { v4 as uuidv4 } from 'uuid'

import { Card } from '../components'

import { CardProps } from '../interfaces'

import MicrosoftLogo from '../assets/microsoft-logo.svg'
import EthereumLogo from '../assets/ethereum-logo.jpg'

export const Support = () => {
	const cardProps: CardProps[] = [
		{
			alt: 'Microsoft',
			body: {
				title: 'Microsoft',
				info: (
					<ul>
						<li>Office</li>
						<li>Consola XBox</li>
						<li>Microsoft Azure</li>
						<li>Sistema Operativo</li>
					</ul>
				),
			},
			img: MicrosoftLogo,
		},
		{
			alt: 'Ethereum',
			body: {
				title: 'Ethereum',
				info: (
					<ul>
						<li>Ether (ETH)</li>
						<li>Tecnologia blockchain</li>
						<li>Contratos inteligentes</li>
					</ul>
				),
			},
			img: EthereumLogo,
		},
	]

	return (
		<section>
			<h1>Sustento</h1>
			<div className="!flex justify-around items-center">
				{cardProps.map(cardProp => (
					<Card key={uuidv4()} {...cardProp} />
				))}
			</div>
			{/* <p>
				ETH es la criptomoneda vital para Ethereum. Cuando envías ETH o usas una aplicación en la red Ethereum, debes
				pagar una pequeña tarifa en ETH por utilizar la red. Esta tarifa es un incentivo para que los productores de
				bloques procesen y verifiquen las acciones que estás tratando de realizar.
			</p> */}
		</section>
	)
}
