import { CardProps } from '../interfaces'

export const Card: React.FC<CardProps> = ({ alt, body, img }) => {
	return (
		<div className={`card w-96 ${body && 'image-full'}`}>
			<figure>
				<img src={img} alt={`${alt} Logo`} />
			</figure>
			{body && (
				<div className="card-body">
					<h2 className="card-title">{body.title}</h2>
					<p>{body.info}</p>
				</div>
			)}
		</div>
	)
}
