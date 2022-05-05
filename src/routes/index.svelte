<script lang="ts">
	import CoalitionsCard from '$lib/components/CoalitionsCard.svelte';
	import Header from '$lib/components/Header.svelte';
	import PollDataCard from '$lib/components/PollDataCard.svelte';
	import RegionalCard from '$lib/components/RegionalCard.svelte';
	import { COALITIONS } from '$lib/data/coalitions';
	import { REGIONAL_DATA } from '$lib/data/regional';
</script>

<Header
	title="REFERENDUM"
	subtitle="TAGLIO DEI PARLAMENTARI"
	caption="Fonte: Ministero dell'Interno"
/>

<section class="cards coalitions">
	{#each COALITIONS as coalition}
		<CoalitionsCard {...coalition} />
	{/each}
</section>

<section class="cards regional-cards">
	{#each REGIONAL_DATA as regional}
		<RegionalCard {...regional} />
	{/each}
</section>

<section class="poll-cards">
	<PollDataCard title="Exit Poll Camera" />
	<PollDataCard title="Exit Poll Senato" />
</section>

<style>
	.cards {
		display: flex;
		padding: var(--space-xs) 0;
		gap: var(--space-xs);
	}
	.poll-cards {
		display: flex;
		gap: 1rem;
		height: 400px;
		margin: var(--space-md) 0;
	}
</style>
