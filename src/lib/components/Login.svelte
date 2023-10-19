<script lang="ts">
	import { currentUser, users } from '../store';
	import { getToastStore } from '@skeletonlabs/skeleton';
	import { comboboxValue } from '$lib/store';
	import { onMount } from 'svelte';
	import { listUsers, login } from '$lib/api';
	const toastStore = getToastStore();

	onMount(() => {
		comboboxValue.subscribe((v) => {
			document.body.dataset.theme = v;
		});
	});

	let username = '';
	let password = '';

	async function loginHandler() {
		if (!username || !password) {
			toastStore.trigger({ message: 'Please fill all fields' });
		} else {
			let loggedUser = await login(username, password);
			if (!loggedUser?.error) {
				$currentUser = loggedUser;

				const userResponse = await listUsers();
				if (!userResponse?.error) {
					$users = userResponse;
				}
			} else {
				toastStore.trigger({ message: 'User does not exist!' });
			}
		}
	}
</script>

<div class="h-full w-full flex justify-center items-center">
	<form
		class="card h-fit card-hover p-4 text-center flex flex-col gap-y-4 w-3/4 md:w-1/2 lg:w-1/4"
		on:submit|preventDefault={loginHandler}
	>
		<div class="card-header">
			<h1>Login</h1>
		</div>
		<hr />
		<input type="text" bind:value={username} class="input" placeholder="Username" />
		<input type="password" bind:value={password} class="input" placeholder="Password" />
		<button class="btn variant-ghost-primary" type="submit"> login</button>
	</form>
</div>
