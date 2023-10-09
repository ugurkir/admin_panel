<script lang="ts">

	import { type TableSource, tableMapperValues, Table } from '@skeletonlabs/skeleton';
	import users from '$lib/data/users.json';

 	const sourceData = users;
  
	const tableSimple: TableSource = {

		head: ['Name', 'email'],
		body: tableMapperValues(sourceData, ['name', 'email']),
		meta: tableMapperValues(sourceData, ['id', 'name', 'email']),

	};

</script>


  
  
<Table source={tableSimple} />
    


