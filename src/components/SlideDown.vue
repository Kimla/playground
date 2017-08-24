<template>
    <div class="container">
        <button type="button" name="button" @click="toggle()">open</button>

        <div class="slideDown" ref="slideDown" :style="{ height: height }">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>

        <h1>Lorem ipsum</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            height: 0 + 'px',
            loading: false,
            open: false,
        }
    },
    methods: {
        toggle() {
            if (this.loading) {
                return false;
            }
            this.loading = true;

            const vm = this;
            const innerHeight = this.$refs.slideDown.querySelector("p").offsetHeight;

            if ( !this.open ) {
                this.height = innerHeight + 'px';
                setTimeout(function () {
                    vm.height = 'auto';
                    vm.loading = false;
                }, 350);
            } else {
                this.height = innerHeight + 'px';
                requestAnimationFrame(function() {
                    vm.height = 0 + 'px';
                    vm.loading = false;
                });
            }

            this.open = !this.open;
        },
    }
}
</script>

<style scoped>
.container {
    width: 600px;
    margin: 0 auto;
    max-width: 100%;
}
button {
    margin-bottom: 15px;
}
h1,
p {
    color: #fff;
}
.slideDown {
    overflow: hidden;
    margin: 0;
    transition: 0.35s;
}
.slideDown p {
    margin: 0;
}
</style>
