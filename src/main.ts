import { createRoot } from 'svelte';
import LineDemo from './LineDemo.svelte';
import TooltipDemo from './TooltipDemo.svelte';

const demos = {
  line: LineDemo,
  tooltip: TooltipDemo,
};

Object.entries(demos).forEach(([id, App]) => {
  createRoot(App, {
    target: document.getElementById(`svelteplot-${id}`),
  });
});
