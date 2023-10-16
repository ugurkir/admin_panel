<script lang="ts">
	import { currentUser } from '$lib/store';
	import { open } from '$lib/store';
	import { Hamburger } from 'svelte-hamburgers';
	function logOut() {
		currentUser.set(undefined);
	}

	function toggle() {
		open.update((n) => !n);
	}
</script>

<div class="h-full flex">
	<button on:click={toggle}>
		<Hamburger open={$open} />
	</button>
	{#if $open}
		<nav class="list-nav h-full">
			<ul class="flex flex-col h-full">
				<li class="my-10"><a href="/Users">Users</a></li>
				<li class="my-10"><a href="/Game_tables">Game Tables</a></li>
				<li class="grow flex flex-col">
					<div class="grow" />
					<div class="flex justify-center">
						<button class="btn variant-filled" on:click={logOut}> logout </button>
					</div>
				</li>
			</ul>
		</nav>
	{/if}
</div>
