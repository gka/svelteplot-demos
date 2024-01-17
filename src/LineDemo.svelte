<script lang="ts">
  import aapl from './assets/aapl.csv'; 
  import { Plot, Line} from 'svelteplot';
</script>

<Plot grid title="Apple stock">
    <Line data={aapl} x="Date" y="Close"  />
</Plot>
