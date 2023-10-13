<script>
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
</script>

<div class="h-screen">
	<AppShell slotSidebarLeft="bg-surface-500/5 w-56" class="">
		<AppBar title="My App" />

		<svelte:fragment slot="sidebarLeft">
			<nav class="list-nav">
				<ul>
					<li class="border-b border-black my-10"><a href="/Users">Users</a></li>
					<li class="border-b border-black my-10"><a href="/Game_tables">Game Tables</a></li>
				</ul>
			</nav>
		</svelte:fragment>
		<slot />
	</AppShell>
</div>
