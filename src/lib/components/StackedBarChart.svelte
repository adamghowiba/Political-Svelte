<script lang="ts">
	import {
		Chart,
		LinearScale,
		BarController,
		CategoryScale,
		BarElement,
		Tooltip,
		Legend
	} from 'chart.js';
	import type { ChartOptions, ScaleOptionsByType, PluginOptionsByType, LegendItem } from 'chart.js';
	import type { DeepPartial } from 'chart.js/types/utils';
	import ChartDataLabels from 'chartjs-plugin-datalabels';
	import { onMount } from 'svelte';
	import type { PartyType, StackedBarData } from '$lib/data/seats';
	import { dataset_dev } from 'svelte/internal';

	/* Register chart components */
	Chart.register(
		LinearScale,
		BarController,
		CategoryScale,
		BarElement,
		Tooltip,
		Legend,
		ChartDataLabels
	);

	export let title: string;
	export let totalSeats: number;
	export let data: StackedBarData[];

	let chartElement: HTMLCanvasElement;

	const legendGroups = new Map<number, PartyType[]>();
	legendGroups.set(0, ['Liberi e Uguali', 'Movimento 5', 'Partito Democratico', 'Centro Sinistra']);
	legendGroups.set(1, ['Movimento 5', 'Lega']);
	legendGroups.set(2, ['Movimento 5', 'Centro Destra', 'Forza Italia', 'Lega']);

	let partyMap = new Map<PartyType, number>();

	/* CHART PLUGINS */
	const CHART_PLUGINS: DeepPartial<PluginOptionsByType<'bar'>> = {
		tooltip: {
			enabled: true,
			displayColors: false
		},
		datalabels: {
			display: true,
			color: 'white',
			font: { weight: 'bold' },
			textShadowBlur: 6,
			textShadowColor: 'black'
		},
		legend: {
			position: 'bottom',
			labels: {
				generateLabels: (chart) => {
					const items: LegendItem[] = [
						{ datasetIndex: 0, text: 'Parties A', hidden: false },
						{ datasetIndex: 1, text: 'Parties B', hidden: false },
						{ datasetIndex: 2, text: 'Parties C', hidden: false }
					];

					return items;
				}
			},
			onClick: (e, legendItem, legend) => {
				const index = legendItem.datasetIndex;
				const ci = legend.chart;

				const filteredLeged = legendGroups.get(index);
				if (!filteredLeged) return;

				// let visibleIndex: number[] = filteredLeged.map((party) => partyMap.get(party) || 0);
				let visibleIndexs = Array.from(partyMap.entries()).filter(
					([key, value]) => !filteredLeged.includes(key)
				);

				console.log(visibleIndexs);

				visibleIndexs.forEach(([key, value]) => {
					const datasetMeta = ci.getDatasetMeta(value);

				});

				console.log(legendItem.hidden);

				// legendMap.get(index)?.forEach((dataName) => {
				// 	if (ci.isDatasetVisible(dataIndex)) {
				// 		ci.hide(dataIndex);
				// 		legendItem.hidden = true;
				// 	} else {
				// 		ci.show(dataIndex);
				// 		legendItem.hidden = false;
				// 	}
				// });

				ci.update();

				// if (ci.isDatasetVisible(index)) {
				// 	ci.hide(index);
				// 	legendItem.hidden = true;
				// } else {
				// 	ci.show(index);
				// 	legendItem.hidden = false;
				// }
			}
		}
	};

	/* CHART SCALES */
	const CHART_SCALES: DeepPartial<{ [key: string]: ScaleOptionsByType<'category'> }> = {
		y: {
			stacked: true,
			grid: {
				display: false
			}
		},
		x: {
			stacked: true,
			grid: {
				display: false
			},
			max: totalSeats
		}
	};

	/* ALL CHART OPTIONS, (SCALES, PLUGINS) */
	const CHART_OPTIONS: ChartOptions<'bar'> = {
		indexAxis: 'y',
		responsive: true,
		maintainAspectRatio: false,
		plugins: CHART_PLUGINS,
		scales: CHART_SCALES
	};

	/* 
    I've abstracted (simplfied) the method for passing data into the bar chart.
    This function transforms the abstracted data into something chart.js can understand. 
     */
	const transformChartData = (data: StackedBarData[]) => {
		/* This will get all the seats that are filled */
		const filledSeats = data.reduce((acc, { amount }) => (acc += amount), 0);
		const remainingSeats = totalSeats - filledSeats;

		const DEFAULTS = {
			borderColor: 'white',
			borderWidth: 3
		};

		const transformedData = data.map(({ amount, color, label }) => ({
			...DEFAULTS,
			label,
			data: [amount],
			backgroundColor: [color],
			order: amount
		}));

		/* This will add none assigned seats to the bar chart so it isn't empty. */
		if (remainingSeats >= 1)
			transformedData.push({
				...DEFAULTS,
				label: 'Non assegnati',
				backgroundColor: ['#EFEFEF'],
				data: [remainingSeats],
				order: 500
			});

		return transformedData;
	};

	/* Initilaize chart.js library */
	const initChart = () => {
		const chart = new Chart(chartElement, {
			type: 'bar',
			data: {
				labels: [''],
				// datasets: transformChartData(data).sort((a, z) => a.data[0] - z.data[0])
				datasets: transformChartData(data)
			},
			options: CHART_OPTIONS
		});

		chart.getSortedVisibleDatasetMetas().forEach((dataset) => {
			partyMap.set(dataset.label as PartyType, dataset.index);
		});
	};

	onMount(() => {
		initChart();
	});
</script>

<div class="card">
	<h4>{title}</h4>
	<div class="chart">
		<div class="majorty">
			<div class="majorty__tooltip">
				Maggioranza: {Math.round(totalSeats / 2)} seggi su {totalSeats}
			</div>
		</div>
		<canvas bind:this={chartElement} id="myChart" width="100%" height="100%" />
	</div>
</div>

<style lang="scss">
	.card {
		width: 100%;
		display: flex;
		height: 230px;
		flex-direction: column;
		gap: var(--space-xs);
	}
	.chart {
		position: relative;
		height: 100%;
		border-radius: 7px;
		padding: var(--space-2xs) 0;
	}
	.majorty {
		position: absolute;
		height: 90%;
		width: 2px;
		border-radius: 4px;
		background-color: var(--color-gray-300);
		border: 2px solid white;
		left: 50%;
		top: 40%;
		transform: translate(-50%, -50%);

		&__tooltip {
			position: absolute;
			left: 50%;
			top: 0;
			border: 1px solid var(--color-gray-200);
			padding: var(--space-3xs);
			font-size: var(--text-h5);
			border-radius: 7px;
			transform: translateX(-50%);
			background-color: var(--color-white);
			width: max-content;
		}
	}
</style>
