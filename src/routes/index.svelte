<script lang="ts">
	import TabTitle from '../lib/TabTitle.svelte';
	import FontControls from '../lib/FontControls.svelte';

	export let title: string = 'Hover to edit';
	export let fontSize: number = 10;

	let displayTitle = title;
	let displayFontSize = fontSize;

	let shouldWait = false;
	let timeout: NodeJS.Timeout;

	let currentTime = new Date().getTime();
	let delaySeconds: number = 30;
	let endTime = currentTime + delaySeconds * 1000;
	$: remaining = endTime - currentTime;
	// $: remainingFormatted = Math.round(remaining / 1000);

	setInterval(function () {
		currentTime = new Date().getTime();
	}, 1000);

	function resetTimer() {
		currentTime = new Date().getTime();
		endTime = currentTime + delaySeconds * 1000;
	}
	let showFontControls = true;

	function submitEdit() {
		if (shouldWait) return;
		if (displayTitle == title && displayFontSize == fontSize) return;

		let params: string[] = [];
		params.push(`title=${displayTitle}`);
		params.push(`font-size=${displayFontSize}`);

		if (params.length) {
			location.href = `/?${params.join('&')}`;
		}
	}

	function waitThenSubmit() {
		resetTimer();
		clearTimeout(timeout);
		timeout = setTimeout(function () {
			submitEdit();
		}, remaining);
	}

	function handleMouseEnter() {
		showFontControls = true;
	}

	function handleMouseOut() {
		showFontControls = false;
	}

	function fadeFontControls(timeout: number) {
		setTimeout(() => (showFontControls = false), timeout);
	}

	fadeFontControls(1000);
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<main>
	<!-- <p>Submitting in {remainingFormatted} {remainingFormatted == 1 ? 'second' : 'seconds'}</p> -->
	<!-- svelte-ignore a11y-mouse-events-have-key-events -->
	<div class="wrapper" on:mouseover={handleMouseEnter} on:mouseout={handleMouseOut}>
		<TabTitle
			fontSize={displayFontSize}
			bind:title={displayTitle}
			on:titleChanged={submitEdit}
			on:editMode={handleMouseOut}
		/>
		{#if showFontControls}
			<FontControls bind:fontSize={displayFontSize} on:fontSizeChanged={waitThenSubmit} />
		{/if}
	</div>
</main>

<style>
	main {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;

		display: grid;
		align-items: center;
		justify-content: center;

		font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

		background-color: lightslategray;
	}

	p {
		position: absolute;
		top: 1rem;
		left: 50%;
		transform: translateX(-50%);
	}
</style>
