<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>

export default {
    name: 'app',
}
</script>

<style>
html,
body {
    padding: 0;
    margin: 0;
}
body {
    height: 100%;
    width: 100%;
    background-color: #2196F3;
}
#app {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding: 30px 15px;
}
</style>
