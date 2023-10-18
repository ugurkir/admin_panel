<script lang="ts">
	import { ListBox, ListBoxItem, popup, type PopupSettings } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { comboboxValue } from '$lib/store';

	onMount(() => {
		comboboxValue.subscribe((v) => {
			document.body.dataset.theme = v;
		});
	});
	const popupCombobox: PopupSettings = {
		event: 'focus-click',
		target: 'popupCombobox',
		placement: 'bottom',
		closeQuery: '.listbox-item'
	};
</script>

<button class="btn variant-filled w-48 justify-between" use:popup={popupCombobox}>
	<span class="capitalize">{$comboboxValue ?? 'Themes'}</span>
	<span>↑</span>
</button>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="card w-48 shadow-xl py-2" data-popup="popupCombobox">
	<ListBox rounded="rounded-none">
		<ListBoxItem bind:group={$comboboxValue} name="medium" value="skeleton">Skeleton</ListBoxItem>
		<ListBoxItem bind:group={$comboboxValue} name="medium" value="wintry">Wintry</ListBoxItem>
		<ListBoxItem bind:group={$comboboxValue} name="medium" value="modern">Modern</ListBoxItem>
		<ListBoxItem bind:group={$comboboxValue} name="medium" value="rocket">Rocket</ListBoxItem>
		<ListBoxItem bind:group={$comboboxValue} name="medium" value="seafoam">Seafoam</ListBoxItem>
		<ListBoxItem bind:group={$comboboxValue} name="medium" value="vintage">Vintage</ListBoxItem>
		<ListBoxItem bind:group={$comboboxValue} name="medium" value="sahara">Sahara</ListBoxItem>
		<ListBoxItem bind:group={$comboboxValue} name="medium" value="hamlindigo"
			>Hamlindigo</ListBoxItem
		>
		<ListBoxItem bind:group={$comboboxValue} name="medium" value="gold-nouveau"
			>Gold Nouveau</ListBoxItem
		>
		<ListBoxItem bind:group={$comboboxValue} name="medium" value="crimson">Crimson</ListBoxItem>
	</ListBox>
	<div class="arrow bg-surface-100-800-token" />
</div>
