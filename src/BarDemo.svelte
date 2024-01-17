<script lang="ts">
  import { Plot, RuleY, BarY } from 'svelteplot';

  let clicked = $state();

  let title = $derived(clicked ? `You clicked ${clicked}` : 'Click the bars')
  let timeout = $state(-1);

  function handleClick(d) {
    clicked = d;
    console.log('handleClick')
    // reset after 2 seconds
    clearTimeout(timeout);
    timeout = setTimeout(() => clicked = null, 2000);
  }
</script>

<Plot x={{ type: 'band', axis: false }} y={{ grid: true }} {title}>
  <BarY 
      data={[-2,-1,2,4,6,9,5]} 
      fill="currentColor"
      opacity={(d) => (!clicked || clicked === d ? 1 : 0.5)}
      onclick={handleClick}/>
  <RuleY data={[0]} />
</Plot>
