<script>
    let isOpen = true;
  </script>
  
  <div class="flex">
    
    <div class={`w-64 h-screen bg-gray-800 text-white fixed top-0 left-0 transition-transform duration-200 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div class="p-6">
        <h2 class="text-2xl font-semibold mb-2">aa</h2>
        <ul>
          <li class="mb-1"> <a href="/Users">Users</a></li>
          <li class="mb-1"> <a href="/Game_tables">Game tables</a></li>
        </ul>
      </div>
    </div>
  
    
    <div class={`flex-grow transition-margin duration-200 ${isOpen ? 'ml-64' : 'ml-0'}`}>
      <div class="p-1">
        <button
          class=" px-2  text-white rounded"
          on:click={() => (isOpen = !isOpen)}
        >
          {#if isOpen}
            -
            {:else}
                +
          {/if}
        </button>
      </div>
    </div>
  </div>
  