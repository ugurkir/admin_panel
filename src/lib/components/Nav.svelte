<script lang="ts">
	import { comboboxValue, currentUser, open } from '$lib/store';
	import { Hamburger } from 'svelte-hamburgers';
	function logOut() {
		currentUser.set(undefined);
		comboboxValue.set('skeleton');
	}
</script>

<div class="h-full">
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
