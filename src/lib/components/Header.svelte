<script lang="ts">
	import { currentUser } from '$lib/store';
	import { AppBar, Avatar } from '@skeletonlabs/skeleton';
	let user: any;

	currentUser
		? currentUser.subscribe((value) => {
				user = value;
		  })
		: (user = {});
	console.log(user);
</script>

<div class="flex">
	<div class="flex gap-y-4 p-1 grow justify-between">
		<div>dsda</div>
		<Avatar initials={user.id} background="bg-primary-500" width="w-12" />
	</div>
</div>
