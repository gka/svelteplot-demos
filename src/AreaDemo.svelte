<script lang="ts">
    import aapl from './assets/aapl.csv'; 
    import { Plot, Line, AreaY, RuleY } from 'svelteplot';
  </script>
  
  <Plot grid height={300} title="Area, line + rule">
      <AreaY data={aapl} x="Date" y="Close" opacity={0.25} />
      <Line data={aapl} x="Date" y="Close"  />
      <RuleY data={[0]} />
  </Plot>
  