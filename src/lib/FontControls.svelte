<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';

	export let fontSize: number;

	const dispatch = createEventDispatcher();

	function incrementFontSize() {
		fontSize++;
		dispatch('fontSizeChanged', fontSize);
	}

	function decrementFontSize() {
		fontSize--;
		dispatch('fontSizeChanged', fontSize);
	}
</script>

<div transition:fade class="font-wrapper">
	<span class="font-label">Font size</span>
	<span class="icon" on:click={incrementFontSize}>^</span>
	<input type="number" bind:value={fontSize} />
	<span class="icon" on:click={decrementFontSize}>v</span>
</div>

<style>
	.font-wrapper {
		position: absolute;
		top: 50%;
		left: 1rem;
		transform: translateY(-50%);

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;

		padding: 1em;

		box-shadow: 2px 3px 7px 0px gray;
		background-color: lightgray;
		border-radius: 0.2em;
		font-size: 2rem;
	}

	.font-label {
		font-size: 2rem;
	}

	input {
		width: 5rem;
		border: none;
		text-align: center;
	}

	span.icon {
		display: flex;
		align-items: center;
		justify-content: center;

		width: 3rem;
		height: 3rem;

		border: 2px solid gray;
		border-radius: 100%;
		background-color: lightcyan;
		cursor: pointer;
	}
</style>
