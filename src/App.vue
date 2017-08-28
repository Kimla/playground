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
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding: 30px 15px;
}
h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0;
}
p {
    margin: 0;
}
</style>
