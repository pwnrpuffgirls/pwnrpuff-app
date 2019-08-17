<template>
    <header v-vue-scrollup-menu class="header">
        <div>Lololol</div>
        <NavigationBar/>
    </header>
</template>

<script>
    import vueScrollupMenu from 'vue-scrollup-menu'
    import NavigationBar from './NavigationBar.vue'

    export default {
        name: "SemiStickyHeader",
        directives: {
            vueScrollupMenu
        },
        components: {
            NavigationBar
        }
    }
</script>

<style scoped>
    .header {
        background-color: rgba(0, 0, 0, .4);
        height: 90px;
        width: 100%;

        overflow: auto;
        transition: top 0.2s ease-in-out;
        position: fixed;
        z-index: 5;
    }
</style>
