<script lang="ts">
	import { Chart, LinearScale, BarController, CategoryScale, BarElement, Tooltip } from 'chart.js';
	import ChartDataLabels from 'chartjs-plugin-datalabels';
	import { onMount } from 'svelte';
	let chartElement: HTMLCanvasElement;

	export let title: string;

	Chart.register(LinearScale, BarController, CategoryScale, BarElement, Tooltip, ChartDataLabels);

	const LABELS = [
		'Partito Democratico',
		'Movimento 5 Stelle',
		'Forza Italia',
		'Lega',
		"Fratelli d'Italia.",
		'Liberi e Uguali'
	];

	/* Initilaize chart.js library */
	const initChart = () => {
		const chart = new Chart(chartElement, {
			type: 'bar',
			data: {
				labels: LABELS,
				datasets: [
					{
						label: 'Votes %',
						data: [47.2, 23.4, 11.3, 14.2, 5.7, 10.8],
						backgroundColor: ['#fc3116', '#eecc00', '#2b6dab', '#096224', '#074A71', '#FC3116']
					}
				]
			},
			options: {
				indexAxis: 'y',
				responsive: true,
                maintainAspectRatio: false,
                layout: {
                    padding: {
                        right: 20
                    },
                },
				plugins: {
					tooltip: {
						enabled: true,
                        displayColors: false
					},
					datalabels: {
                        clip: false,
                        anchor: 'end',
						align: 'right',
						color: 'black',
						font: {
							weight: 'bold'
						}
					}
				},
				scales: {
					y: {
						ticks: {
							crossAlign: 'far',
							font: {
								size: 11,
							}
						},
                        grid: {
                            display: false
                        }
					},
                    x: {
                        grid: {
                            display: false
                        }
                    }
				}
			}
		});
	};

	onMount(() => {
		initChart();
	});
</script>

<div class="card">
	<h4>{title}</h4>
	<div class="chart">
		<canvas bind:this={chartElement} id="myChart" width="100%" height="100%" />
	</div>
</div>

<style lang="scss">
	.card {
		width: 100%;
		display: flex;
        height: 100%;
		flex-direction: column;
		gap: var(--space-xs);
	}
	.chart {
		background-color: --color-;
        height: 100%;
		background-color: #f9f9f9;
		border-radius: 7px;
		padding: var(--space-2xs);
		box-shadow: var(--shadow-card);
	}
</style>
