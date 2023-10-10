export interface CardProps {
	alt: string
	body?: {
		title: string
		info: string | JSX.Element
	}
	img: string
}
