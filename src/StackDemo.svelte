<script lang="ts">
    import { Plot, Area, stackY } from 'svelteplot';
    import { loadData } from './utils';
    import Loading from './shared/Loading.svelte';
    
    const riaa = loadData('riaa.csv');
</script>

{#await riaa}
    <Loading />
{:then data} 
<Plot marginLeft={50} title="Stack transform" color={{ legend: true }}>
    <Area fill="group" {...stackY({ 
        data, 
        x: 'year', 
        y: 'revenue', 
        z: 'format'
    }, { order: 'appearance' })} />
</Plot>
{/await}
  