<script lang="ts">
	import { currentUser, open } from '$lib/store';
	import { AppBar, Avatar } from '@skeletonlabs/skeleton';
	import { Hamburger } from 'svelte-hamburgers';
	let user: any;
	currentUser
		? currentUser.subscribe((value) => {
				user = value;
		  })
		: (user = {});
	console.log(user);

	function toggle() {
		open.update((n) => !n);
	}
</script>

<div class="flex">
	<div class="flex gap-y-4 p-1 grow justify-between">
		<div>
			<button on:click={toggle} class="h-0">
				<Hamburger open={$open} />
			</button>
		</div>
		<Avatar initials={user.id} background="bg-primary-500" width="w-12" />
	</div>
</div>
