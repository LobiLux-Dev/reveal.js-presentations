interface CardProps {
	img: string
	alt: string
}

export const Card: React.FC<CardProps> = ({ alt, img }) => {
	return (
		<div className="card w-96">
			<figure>
				<img src={img} alt={alt} />
			</figure>
		</div>
	)
}
