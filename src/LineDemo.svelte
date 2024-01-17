<script lang="ts">
    import { Plot, Line} from 'svelteplot';
    import { loadData } from './utils';
    import Loading from './shared/Loading.svelte';

    const aapl = loadData('aapl.csv');
</script>

{#await aapl}
<Loading />
{:then data} 
<Plot grid height={340} title="Apple stock">
    <Line {data} x="Date" y="Close"  />
</Plot>
{/await}
