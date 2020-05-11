<template>
    <div id="app">
        <router-view @failedlogin="signalLogin($event)" @authenticated="signalAuthorized($event)"></router-view>
    </div>
</template>

<script>

    export default {
        name: 'App',
        components: {},
        methods: {
            signalLogin() {
                console.log('failed')
            },
            signalAuthorized(event) {
                console.log('logged in', event)
                this.$router.push('/').catch(
                    (err) => {
                        console.error(err)
                    }
                )
            }
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
