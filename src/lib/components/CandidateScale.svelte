<script lang="ts">
	import Tags from './Tags.svelte';

	interface Candidate {
		name: string;
		party: string;
		votes: number;
		color: string;
	}
	export let candidates: [Candidate, Candidate];
	export let totalVotes = 464;
</script>

<section class="scale">
	<div class="candidates">
		{#each candidates as candidate, i}
			<div
				class="candidate"
				style="--color: {candidate.color}"
				style:flex-direction={i == 1 ? 'row-reverse' : 'row'}
			>
				<span class="candidate__votes">{candidate.votes}</span>
				<div class="candidate__person">
					<span class="candidate__name">{candidate.name}</span>
					<span class="candidate__party">{candidate.party}</span>
				</div>
			</div>
		{/each}
	</div>

	<div class="bar">
		{#each candidates as candidate}
			<div
				class="bar__inner"
				style="width: {(candidate.votes / totalVotes) * 100}%"
				style:background-color={candidate.color}
			/>
		{/each}
	</div>

	<div class="tags">
		<Tags color="var(--color-blue)" name="Assegnati" amount={0} />
		<Tags color="#67B4E2" name="In vantaggio" amount={0} />
		<Tags color="#FFACA3" name="In vantaggio" amount={0} />
		<Tags color="var(--color-red)" name="Assegnati" amount={0} />
	</div>
</section>

<style lang="scss">
	.candidates {
		display: flex;
		justify-content: space-between;
	}
	.tags {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: var(--space-xs);
	}
	.scale {
		display: flex;
		flex-direction: column;
		gap: var(--space-xs);
	}
	.bar {
		width: 100%;
		height: 40px;
		display: flex;
		background-color: var(--color-white);

		&__inner {
			height: 100%;
		}
	}
	.candidate {
		display: flex;
		align-items: center;
		column-gap: var(--space-xs);

		&__person {
			display: flex;
			flex-direction: column;
			gap: var(--space-3xs);
		}

		&__name {
			font-size: var(--text-h4);
		}

		&__party {
			text-transform: uppercase;
			font-size: var(--text-h5);
		}

		&__votes {
			font-size: 50px;
			font-weight: var(--fw-bold);
			grid-row: 1/3;
			color: var(--color);
			border-bottom: 4px solid var(--color);
		}
	}
</style>
