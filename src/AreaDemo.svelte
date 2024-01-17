<script lang="ts">
    import Loading from './shared/Loading.svelte';
    import { loadData } from './utils.js'; 
    import { Plot, Line, AreaY, RuleY } from 'svelteplot';

    const aapl = loadData('aapl.csv');
</script>
  
{#await aapl}
<Loading />
{:then data} 
<Plot grid height={300} title="Area, line + rule">
    <AreaY {data} x="Date" y="Close" opacity={0.25} />
    <Line {data} x="Date" y="Close"  />
    <RuleY data={[0]} />
</Plot>
{/await}

