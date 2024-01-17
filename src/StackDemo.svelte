<script lang="ts">
    import riaa from './assets/riaa.csv'; 
    import { Plot, Area, stackY } from 'svelteplot';
    
</script>
  
<Plot marginLeft={50} title="Stack transform" color={{ legend: true }}>
    <Area fill="group" {...stackY({ 
        data: riaa, 
        x: 'year', 
        y: 'revenue', 
        z: 'format'
    }, { order: 'appearance' })} />
</Plot>
  