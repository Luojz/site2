<template>
    <section id="test-otherTest">
        <component v-for="item in list" :key="item.id || item.type" :is="item.componentName" :data="item.data" />
    </section>
</template>


<script>
    import adapter from "./adapter";

    export default {
        components: {

            Sec1: () => import('./partials/Sec1'),
            Sec2: () => import('./partials/Sec2'),
        },

        props: {
            data: {
                type: Object,
                required: true
            }
        },

        computed: {
            list() {
                return adapter(this.data.childBlocks)
            }
        },

        mounted() {
        }
    }
</script>


<style scoped>
    #test-otherTest {
    }
</style>