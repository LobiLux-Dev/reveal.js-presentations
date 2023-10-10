import { Card } from '../components'

import EthereumLogoLandscape from '../assets/ethereum-logo-landscape.png'
import MicrosoftLogoLandscape from '../assets/microsoft-logo-landscape.avif'

export const Home = () => {
	return (
		<section>
			<div className="!flex justify-around items-center">
				<Card alt="Microsoft Landscape" img={MicrosoftLogoLandscape} />
				<h1>&</h1>
				<Card alt="Ethereum Landscape" img={EthereumLogoLandscape} />
			</div>
			<h2>
				Uniendo el futuro digital:
				<br />
				Ethereum y Microsoft en la revolución tecnológica
			</h2>
		</section>
	)
}
