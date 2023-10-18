<script lang="ts">
	import '../app.postcss';
	import { Toast, initializeStores } from '@skeletonlabs/skeleton';

	initializeStores();
	import { focusTrap } from '@skeletonlabs/skeleton';
	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { AppBar, AppShell, storePopup } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import Login from '../lib/components/Login.svelte';
	import Nav from '../lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
	import { currentUser } from '$lib/store';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import { Hamburger } from 'svelte-hamburgers';
	import { fade } from 'svelte/transition';
	import { open } from '$lib/store';
	import PopupContainer from '$lib/components/PopupContainer.svelte';
</script>

<Toast />
{#if $currentUser}
	<AppShell
		slotSidebarLeft={$open
			? 'bg-surface-500/5 w-56 transition-all duration-700 scale-100'
			: 'w-0 duration-700'}
		slotHeader="bg-surface-900/70"
	>
		<Header slot="header" />
		<Nav slot="sidebarLeft" />
		<Footer slot="pageFooter" />
		<slot />
	</AppShell>
{:else}
	<AppShell>
		<Footer slot="footer" />
		<Login />
	</AppShell>
{/if}
<PopupContainer />
