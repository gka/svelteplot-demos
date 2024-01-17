import { createRoot } from 'svelte';
import LineDemo from './LineDemo.svelte';
import AreaDemo from './AreaDemo.svelte';
import BarDemo from './BarDemo.svelte';
import TooltipDemo from './TooltipDemo.svelte';
import StackDemo from './StackDemo.svelte';

const demos = {
  line: LineDemo,
  area: AreaDemo,
  bar: BarDemo,
  tooltip: TooltipDemo,
  stack: StackDemo
};

Object.entries(demos).forEach(([id, App]) => {
  
    createRoot(App, {
      target: document.getElementById(`svelteplot-${id}`),
    });
  
});
