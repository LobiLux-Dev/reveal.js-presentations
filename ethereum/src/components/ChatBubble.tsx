import { ChatBubbleProps } from '../interfaces/ChatBuuble'

export const ChatBubble: React.FC<ChatBubbleProps> = ({ alt, img, position, text }) => {
	return (
		<div className={`chat ${position === 'start' && 'chat-start'} ${position === 'end' && 'chat-end'}`}>
			<div className="chat-image avatar">
				<div className="w-10 rounded-full">
					<img src={img} alt={`${alt} Logo`} className="!m-0 rounded-full" />
				</div>
			</div>
			<p className="chat-bubble">{text}</p>
		</div>
	)
}
