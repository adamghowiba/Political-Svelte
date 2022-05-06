<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import type { StackedBarData } from '$lib/data/seats';

	interface TransformedCords {
		x: number;
		y: number;
		color: string;
	}

	let transformedArray: TransformedCords[];

	export let svgPointsArray: { x: number; y: number }[];
	export let seatsArray: StackedBarData[];
	export let svgRadius: number;
	export let title: string;

	const transformSVGArray = (): TransformedCords[] => {
		let currentSeatIndex = 0;
		let tempSeatsArray: StackedBarData[] = JSON.parse(JSON.stringify(seatsArray));
		let tempPointsArray = [...svgPointsArray];

		let transformedArray = tempPointsArray.map((cords) => {
			let indexExsits = tempSeatsArray[currentSeatIndex];

			if (indexExsits) {
				if (tempSeatsArray[currentSeatIndex].amount == 0) currentSeatIndex++;
			}
			if (tempSeatsArray[currentSeatIndex]) tempSeatsArray[currentSeatIndex].amount -= 1;

			return { ...cords, color: tempSeatsArray[currentSeatIndex]?.color || 'lightgray' };
		});

		return transformedArray;
	};

	transformedArray = transformSVGArray();
	onMount(() => {
		const circles = document.querySelectorAll<SVGElement>('circle');
		gsap.to(circles, {
			// fill: 'lightgray',
			opacity: 1,
			delay: 0.3,
			stagger: 0.003,
			duration: 1
		});
	});
</script>

<div class="wrapper">
	<h4>{title}</h4>
	<svg viewBox="0 0 360 185" class="svg-seats" fill="black">
		<!-- data-seats={seat.svgCoords.length} -->
		<!-- on:mouseenter="showTooltip(seat.label, seat.svgCoords.length, seat.id, imagePath, seat.desc, index)" -->
		<!-- on:mouseleave="hideTooltip()" -->
		<!-- title={seat.label} -->
		<!-- style="fill:{seat.color}; transition-delay:{coord.delay}" -->
		<g class="hasTooltip" stroke-width="8">
			{#each transformedArray as coord, i (i)}
				<circle cx={coord.x} cy={coord.y} fill={coord.color} r={svgRadius} />
			{/each}
		</g>
	</svg>
</div>

<style lang="scss">
	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-xs);
		margin: var(--space-md) 0;
		width: 100%;
	}
	svg circle {
		// opacity: 0;
		// transition: all 0.25s linear;
		opacity: 0.3;
	}
</style>
