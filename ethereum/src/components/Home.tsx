import EthereumLogo from '../assets/ethereum-logo.png'
import MicrosoftLogo from '../assets/microsoft-logo.avif'

import { Card } from '.'

export const Home = () => {
	return (
		<section>
			<div className="!flex justify-around items-center">
				<Card alt="Microsoft Logo" img={MicrosoftLogo} />
				<h1>&</h1>
				<Card alt="Ethereum Logo" img={EthereumLogo} />
			</div>
			<h2>
				Uniendo el futuro digital:
				<br />
				Ethereum y Microsoft en la revolución tecnológica
			</h2>
		</section>
	)
}
