<script lang="ts">
	import { currentUser } from '../store';
	import { Toast, getToastStore } from '@skeletonlabs/skeleton';

	const toastStore = getToastStore();

	let username = '';
	let password = '';

	function handleSubmit() {
		if (username === 'admin' && password === 'admin') {
			currentUser.set({ id: username });
			toastStore.clear();
		} else {
			toastStore.clear();
			toastStore.trigger({
				message: 'Gecersiz parola!',
				background: 'variant-filled-error',
				autohide: false,
				hoverable: true
			});
		}
	}
</script>

<div class="h-full w-full flex justify-center items-center">
	<form
		class="card h-fit card-hover p-4 text-center flex flex-col gap-y-4 w-3/4 md:w-1/2 lg:w-1/4"
		on:submit|preventDefault={handleSubmit}
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
