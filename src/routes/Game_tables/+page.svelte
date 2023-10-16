<script lang="ts">
	import { type TableSource, tableMapperValues, Table } from '@skeletonlabs/skeleton';
	import game from '$lib/data/game.json';

	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	const sourceData = game;

	const tableSimple: TableSource = {
		head: ['Game name', 'email'],
		body: tableMapperValues(sourceData, ['name', 'email']),
		meta: tableMapperValues(sourceData, ['id', 'name', 'email'])
	};
</script>

<div class="h-full flex flex-col">
	<div class="flex p-4"><Table source={tableSimple} /></div>
</div>
