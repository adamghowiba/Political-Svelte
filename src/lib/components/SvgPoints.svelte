<script lang="ts">
	import { senateSvgCoords } from '$lib/data/svgPoints';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { gsap } from 'gsap';

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

<svg viewBox="0 0 360 185" class="svg-seats" fill="black">
	<!-- data-seats={seat.svgCoords.length} -->
	<!-- on:mouseenter="showTooltip(seat.label, seat.svgCoords.length, seat.id, imagePath, seat.desc, index)" -->
	<!-- on:mouseleave="hideTooltip()" -->
	<!-- title={seat.label} -->
	<!-- style="fill:{seat.color}; transition-delay:{coord.delay}" -->
	<g class="hasTooltip" stroke-width="8">
		{#each senateSvgCoords as coord, i (i)}
			<circle cx={coord.x} cy={coord.y} r={4} />
		{/each}
	</g>
</svg>

<style lang="scss">
	svg circle {
		// opacity: 0;
		// transition: all 0.25s linear;
        opacity: 0.3;
		fill: black;
	}
</style>
