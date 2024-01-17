<script lang="ts">
    import riaa from './assets/riaa.csv'; 
    import { Plot, Area, stackY } from 'svelteplot';
    
</script>
  
<Plot grid title="Stack transform">
    <Area fill="group" {...stackY({ 
        data: riaa, 
        x: 'year', 
        y: 'revenue', 
        z: 'format'
    }, { order: 'appearance' })} />
</Plot>
  