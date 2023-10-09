<script lang="ts">
	import '../app.postcss';
	import Navbar from '$lib/Navbar.svelte';
	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>



<div class="flex">
	<Navbar />
  
	<div class="flex-grow">
	  <slot />
	</div>
  </div>