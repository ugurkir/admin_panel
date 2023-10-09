
<script lang="ts">
	import { type TableSource, tableMapperValues, Table } from '@skeletonlabs/skeleton';
const sourceData = [
	{ position: 1, name: 'ugur', money: 132},
	{ position: 2, name: 'selin', money: 2443 },
	{ position: 3, name: 'burak', money: 612 },
	{ position: 4, name: 'levent', money: 9432 },
	{ position: 5, name: 'tulin', money: 321},
];
  
const tableSimple: TableSource = {
	// A list of heading labels.
	head: ['Name', 'Money'],
	// The data visibly shown in your table body UI.
	body: tableMapperValues(sourceData, ['name', 'money']),
	// Optional: The data returned when interactive is enabled and a row is clicked.
	meta: tableMapperValues(sourceData, ['position', 'name', 'money']),
};
				

				
</script>


  
  
  <Table source={tableSimple} />
    


