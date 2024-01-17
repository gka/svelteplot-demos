import { csv } from 'd3-fetch';
import { autoType } from 'd3-dsv';

export function loadData(url:string) {
    return csv(`${location.host !== 'vis4.net' ? '/src/assets' : '/blog/interactives/2401-svelteplot-demos/data'}/${url}`, autoType);
}