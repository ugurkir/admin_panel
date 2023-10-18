<script lang="ts">
	import {
		type TableSource,
		tableMapperValues,
		Table,
		Accordion,
		AccordionItem
	} from '@skeletonlabs/skeleton';
	import { users } from '$lib/store';

	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { openPopup } from '$lib/components/PopupContainer.svelte';
	import { currentUser } from '$lib/store';
	import AddUser from '$lib/components/AddUser.svelte';
	import DellUser from '$lib/components/DellUser.svelte';
	import { SlideToggle } from '@skeletonlabs/skeleton';
	function toggle() {
		alert('aaaa');
	}
	let is_admin: boolean = false;
	let filter = '';
	$: filteredUsers = $users.filter((u) => {
		if (!filter) {
			return true;
		}
		return Object.values(u).find((v) => v.toString().toLowerCase().includes(filter));
	});
</script>

<div class="card p-4 m-2">
	<div class="flex gap-2 justify-between my-3">
		<div>
			<input type="text" class="input" placeholder="filter" bind:value={filter} />
		</div>
		<button
			class="btn card-hover bg-surface-500"
			on:click={() => {
				openPopup.set([AddUser, {}]);
			}}>add user</button
		>
	</div>
	<div class="flex m-1 card card-hover p-2 text-center gap-2 flex-wrap capitalize font-bold">
		<div class="grow border-white/10 rounded-lg border">id</div>
		<div class="grow border-white/10 rounded-lg border">group</div>
		<div class="grow border-white/10 rounded-lg border">permissions</div>
		<div class="grow border-white/10 rounded-lg border">theme</div>
		<div class="grow border-white/10 rounded-lg border">is admin</div>
		<div class="grow border-white/10 rounded-lg border">actions</div>
	</div>
	{#each filteredUsers as item}
		<div
			class="flex m-1 flex-wrap card card-hover p-2 text-center justify-center gap-2 items-center"
		>
			<div class="grow border border-white/10 rounded-lg">{item.id}</div>
			<div class="grow border border-white/10 rounded-lg">{item.group}</div>
			<div class="grow border border-white/10 rounded-lg">{item.permissions}</div>
			<div class="grow border border-white/10 rounded-lg">{item.theme}</div>
			<SlideToggle name="slide" checked={item.is_admin} disabled />
			<div>
				<button
					class="btn bg-secondary-500"
					on:click={() => {
						$openPopup = [AddUser, { selectedUser: item }];
						console.log(item.group);
					}}
				>
					🖊️
				</button>
				<button
					class="btn bg-error-500 w-2"
					on:click={() => {
						openPopup.set([DellUser, { uid: item.id }]);
					}}
				>
					🗑️
				</button>
			</div>
		</div>
	{/each}
</div>
