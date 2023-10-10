import { v4 as uuidv4 } from 'uuid'

import { ChatBubble } from '../components'

import { ChatBubbleProps } from '../interfaces/ChatBuuble'

import MicrosoftLogo from '../assets/microsoft-logo.svg'
import EthereumLogo from '../assets/ethereum-logo.jpg'

export const Origins = () => {
	const chatBubbles: ChatBubbleProps[] = [
		{
			alt: 'Microsoft',
			img: MicrosoftLogo,
			position: 'start',
			text: 'Paul Allen y Bill Gates, entusiastas de la tecnología, crearon Microsoft el 4 de abril en Albuquerque, Nuevo México, con la visión de que la informática personal sería el futuro.',
		},
		{
			alt: 'Ethereum',
			img: EthereumLogo,
			position: 'end',
			text: 'Mi origen se basa en la idea de crear una plataforma blockchain que permitiera a los usuarios crear contratos complejos con solo unas pocas líneas de código.',
		},
	]

	return (
		<section>
			<h1>¿Cuáles son sus orígenes?</h1>
			<div className="chat-bubbles">
				{chatBubbles.map(chatBubble => (
					<ChatBubble key={uuidv4()} {...chatBubble} />
				))}
			</div>
		</section>
	)
}
