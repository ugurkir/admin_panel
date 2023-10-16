<script lang="ts">
	import { type TableSource, tableMapperValues, Table } from '@skeletonlabs/skeleton';
	import users from '$lib/data/users.json';

	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	const sourceData = users;

	const tableSimple: TableSource = {
		head: ['Name', 'email'],
		body: tableMapperValues(sourceData, ['name', 'email']),
		meta: tableMapperValues(sourceData, ['id', 'name', 'email'])
	};
</script>

<div class="h-full flex flex-col">
	<div class="flex p-4"><Table source={tableSimple} /></div>
</div>
