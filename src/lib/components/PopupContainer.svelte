<script context="module" lang="ts">
	import { loading } from '$lib/store';
	import type { ComponentType, SvelteComponent } from 'svelte';
	import { writable } from 'svelte/store';
	export const openPopup = writable<[ComponentType, { [index: string]: any }] | null>(null);
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<script lang="ts">
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class:hidden={!$openPopup}
	class="flex justify-center items-center h-screen w-screen bg-primary-900/30 absolute {$loading
		? 'cursor-progress'
		: 'cursor-default'}"
	on:click|self={() => {
		$openPopup = null;
	}}
>
	<svelte:component this={$openPopup?.[0]} {...$openPopup?.[1] || {}} />
</div>
