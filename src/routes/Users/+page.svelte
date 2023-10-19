<script lang="ts">
	import { users } from '$lib/store';
	import { openPopup } from '$lib/components/PopupContainer.svelte';
	import { currentUser } from '$lib/store';
	import AddUser from '$lib/components/AddUser.svelte';
	import DellUser from '$lib/components/DellUser.svelte';
	import { SlideToggle } from '@skeletonlabs/skeleton';
	import { listUsers } from '$lib';
	import { onMount } from 'svelte';
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

<div class="flex h-full m-2">
	<!-- Responsive Container (recommended) -->
	<div class="table-container">
		<div class="card grow w-full flex p-2 justify-end rounded-sm">
			<div class="flex justify-between grow">
				<div class="">
					<input type="text" class="input" placeholder="filter" bind:value={filter} />
				</div>
				<button
					class="btn card-hover bg-surface-500"
					on:click={() => {
						openPopup.set([AddUser, {}]);
					}}>add user</button
				>
			</div>
		</div>
		<!-- Native Table Element -->
		<table class="table table-hover">
			<thead>
				<tr>
					<th>Id</th>
					<th>Group</th>
					<th>Permissions</th>
					<th>Theme</th>
					<th>Is admin</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				{#each filteredUsers as row, i}
					<tr>
						<td>{row.id}</td>
						<td>{row.group}</td>
						<td>{row.permissions}</td>
						<td>{row.theme}</td>
						<td><SlideToggle name="slide" checked={row.is_admin} disabled /></td>
						<td>
							<button
								class="btn bg-secondary-500"
								on:click={() => {
									$openPopup = [AddUser, { selectedUser: row }];
								}}
							>
								🖊️
							</button>
							<button
								class="btn bg-error-500 w-2"
								on:click={() => {
									openPopup.set([DellUser, { uid: row.id }]);
								}}
							>
								🗑️
							</button>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
