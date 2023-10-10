import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

export const Slide6 = () => {
	ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

	const charOptions = {
		responsive: true,
		plugins: {
			title: {
				display: true,
				text: 'Chart.js Line Chart - Cubic interpolation mode',
			},
		},
		interaction: {
			intersect: false,
		},
		scales: {
			x: {
				display: true,
				title: {
					display: true,
				},
			},
			y: {
				display: true,
				title: {
					display: true,
					text: 'Value',
				},
				suggestedMin: -10,
				suggestedMax: 200,
			},
		},
	}

	const charData = {
		labels: ['2021', '2022', '2023'],
		datasets: [
			{
				label: 'Precio máximo',
				data: [4724.31, 3769.3, 2092.28],
				borderColor: 'rgb(255, 99, 132)',
				backgroundColor: 'rgba(255, 99, 132, 0.5)',
			},
			{
				label: 'Precio mínimo',
				data: [737.71, 1038.19, 1214.72],
				borderColor: 'rgb(53, 162, 235)',
				backgroundColor: 'rgba(53, 162, 235, 0.5)',
			},
		],
	}

	return (
		<section>
			<section>
				<h2>Variaciones de precio recientes</h2>
				<h3>Durante los últimos tres años:</h3>
				<table className="!flex-auto">
					<thead>
						<tr>
							<th>Año</th>
							<th>Precio máximo</th>
							<th>Precio mínimo</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>2021</td>
							<td>$4,724.31</td>
							<td>$737.71</td>
						</tr>
						<tr>
							<td>2022</td>
							<td>$3,769.30</td>
							<td>$1,038.19</td>
						</tr>
						<tr>
							<td>2023</td>
							<td>$2,092.28</td>
							<td>$1,214.72</td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<td>Promedio</td>
							<td>$3,528.63</td>
							<td>$924.15</td>
						</tr>
					</tfoot>
				</table>
			</section>
			<section>
				<h3>Gráfica de precio</h3>
				<Line data={charData} options={charOptions} />
			</section>
		</section>
	)
}
