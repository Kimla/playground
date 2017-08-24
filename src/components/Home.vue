<template>
    <div class="home">
        <h1>Kim Larsson</h1>
        <ul>
            <li>
                <router-link to="/select">Select</router-link>
                <router-link to="/slidedown">SlideDown</router-link>
            </li>-
        </ul>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
h1 {
    color: #fff;
    margin-bottom: 30px;
}
ul {
    margin: 0;
    padding: 0;
    list-style: none;
}
a {
    display: block;
    text-decoration: none;
    padding: 12px 40px;
    background-color: #fff;
    color: #2196F3;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 1px;
    font-size: 14px;
    text-align: center;
    width: 200px;
    margin: 10px auto;
}
</style>
