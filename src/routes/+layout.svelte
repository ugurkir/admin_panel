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
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
	import { currentUser } from '$lib/store';
</script>

<Toast />
{#if $currentUser}
	<AppShell slotSidebarLeft="bg-surface-500/5 w-56">
		<AppBar slot="header" class="">patates</AppBar>
		<Nav slot="sidebarLeft" />
		<Footer slot="footer" />
		<slot />
	</AppShell>
{:else}
	<AppShell slotSidebarLeft="bg-surface-500/5 w-56">
		<AppBar slot="header" class="">patates</AppBar>
		<Footer slot="footer" />
		<Login />
	</AppShell>
{/if}
