<script lang="ts">
	import { addUsers } from '$lib/api';
	import type { User } from '$lib/store';
	import { users } from '$lib/store';
	import { openPopup } from './PopupContainer.svelte';
	import { SlideToggle } from '@skeletonlabs/skeleton';

	export let selectedUser: User = {
		id: '',
		password: '',
		is_admin: false,
		permissions: 0,
		theme: '',
		group: ''
	};
	let userPermissions: string[] = [];
	let selectedChips: { [index: string]: boolean } = {};
	let userId = selectedUser.id;
	let userPass = '';
	let isAdmin = selectedUser.is_admin;
	let permissions = selectedUser.permissions;
	let theme = selectedUser.theme;
	let group = selectedUser.group;
	let isNew = !selectedUser.id;
	$: {
		selectedUser.id = userId;
		selectedUser.is_admin = isAdmin;
		selectedUser.permissions = permissions;
		selectedUser.theme = theme;
		selectedUser.group = group;
		selectedUser.password = userPass;
	}
</script>

<div class="card card-hover">
	<div class="card-header text-center">
		{#if !isNew}
			<h1>Edit User: {selectedUser.id}</h1>
		{:else}
			<h1>Create new user</h1>
		{/if}
	</div>
	<form class="flex flex-col gap-4 p-4 justify-center items-center">
		<input class="input" type="text" placeholder="Id" bind:value={userId} disabled={!isNew} />

		<input class="input" type="text" placeholder="Password" bind:value={userPass} />
		<input type="text" placeholder="Group" class="input" bind:value={group} />
		<div class="flex items-center justify-around w-full">
			Is admin:
			<SlideToggle name="slide" bind:checked={isAdmin} />
		</div>
		<div class="flex gap-3">
			Permissions:
			{#each userPermissions as permission}
				<!-- <span class="chip variant-filled">{permissions}</span> -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<span
					class="chip {selectedChips[permission] ? 'variant-filled' : 'variant-soft'}"
					on:click={() => {
						selectedChips[permission] = !selectedChips[permission];
					}}
					on:keypress
				>
					{permission}</span
				>
			{/each}
		</div>
		<div class="flex gap-4">
			Theme:
			<select class="select" bind:value={theme}>
				<option value="skeleton">Skeleton</option>
				<option value="wintry">Wintry</option>
				<option value="modern">Modern</option>
				<option value="rocket">Rocket</option>
				<option value="seafoam">Seafoam</option>
				<option value="vintage">Vintage</option>
				<option value="sahara">Sahara</option>
				<option value="hamlindigo">Hamlindigo</option>
				<option value="gold-nouveau">Gold Nouveau</option>
				<option value="crimson">Crimson</option>
			</select>
		</div>
		<button
			class="btn bg-primary-500"
			on:click={() => {
				addUsers(selectedUser);
				$users = [selectedUser, ...$users.filter((u) => u.id !== selectedUser.id)];
				$openPopup = null;
			}}
		>
			{#if isNew}
				Add user
			{:else}
				Save changes
			{/if}
		</button>
	</form>
</div>
