<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let title: string;
	export let fontSize: number;

	const dispatch = createEventDispatcher();

	let editNameMode = false;

	function enterEditMode() {
		editNameMode = true;
		dispatch('editMode', fontSize);
	}

	function saveTitle() {
		editNameMode = false;
		dispatch('titleChanged', fontSize);
	}

	function handleKeydown(event: KeyboardEvent) {
		const e = event || window.event;
		e.stopPropagation();

		if (e.key === 'Escape' || e.key === 'Enter') {
			editNameMode = false;
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div on:click={enterEditMode}>
	{#if editNameMode}
		<!-- svelte-ignore a11y-autofocus -->
		<input
			on:blur={saveTitle}
			style="font-size: {fontSize}rem"
			type="text"
			autofocus
			bind:value={title}
		/>
	{:else}
		<h1 style="font-size: {fontSize}rem">{title}</h1>
	{/if}
</div>

<style>
	h1 {
		width: 100vw;
		max-width: 100%;
		padding: 2rem;
		text-align: center;
		font-size: 10rem;
	}

	input {
		display: block;
		width: 100vw;
		padding: 2rem;
		border: none;
		text-align: center;
		font-weight: bold;
	}
</style>
