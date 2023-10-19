<script lang="ts">
	import { delUser } from '$lib/api';
	import { loading, users } from '$lib/store';
	import { openPopup } from './PopupContainer.svelte';
	export let uid: string;
	$loading = false;
</script>

<div class="card card-hover">
	<div class="p-4 flex justify-center">Emin Misiniz?</div>
	{#if $loading}
		<div role="status" class="flex grow justify-center items-center mb-4 ml-4">
			<svg
				aria-hidden="true"
				class="w-10 h-10 mr-3 text-gray-200 animate-spin dark:text-gray-600 fill-red-600"
				viewBox="0 0 100 101"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
					fill="currentColor"
				/>
				<path
					d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 ... "
					fill="currentFill"
				/>
			</svg>
			<span class="sr-only">Loading...</span>
		</div>
	{/if}

	<div class="card-footer">
		<button
			class="btn bg-error-500"
			disabled={$loading}
			on:click={() => {
				$loading = true;
				delUser(uid).then((r) => {
					if (!r?.error) {
						$users = [...$users.filter((u) => u.id !== uid)];
						$openPopup = null;
					}
				});
			}}>Evet</button
		>
		<button
			class="btn bg-success-500"
			disabled={$loading}
			on:click={() => {
				$openPopup = null;
			}}>Hayir</button
		>
	</div>
</div>
