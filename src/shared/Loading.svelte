<script lang="ts">
    let i = $state(2);
    let timer = $state(-1);

    $effect(() => {
        timer = setInterval(() => {
            i = (i+1) % 3;
        }, 500);
        return () => {
            clearInterval(timer);
        };
    })
</script>

<div class="loading">
    loading data{[...Array(i+1)].map(d => '.').join('')}
</div>

<style>
    .loading {
        text-align: center;
        place-items: center;
        height: 100%;
        opacity: 0.4;
    }
</style>