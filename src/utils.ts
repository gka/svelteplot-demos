import { csv } from 'd3-fetch';
import { autoType } from 'd3-dsv';

export async function loadData(url:string) {
    
    return csv(`${location.host.endsWith('.webcontainer.io') ? '/src/assets' : '/blog/interactives/2401-svelteplot-demos/data'}/${url}`, autoType);
}