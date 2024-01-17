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
    <div>loading data{[...Array(i+1)].map(d => '.').join('')}</div>
</div>

<style>
    .loading {
        flex-flow: column;
        display: flex;
        height: 100%;
        padding-top: 20%;
        padding-bottom: 20%;
        align-items: center;
        justify-content: center;
        opacity: 0.4;
    }
</style>