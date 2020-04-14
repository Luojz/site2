<template>
    <Layout :loading="loading">
        <component v-for="item in list" :key="item.id || item.type" :is="item.componentName" :data="item.data" />
    </Layout>
</template>


<script>
    import { asyncData } from "@/plugins/axios";
    import adapter from "./adapter";
    // import validator from "./validator";
    import Layout from "@/layouts/default";

    export default {
        components: {
            Layout,

            Banner: () => import('./business/Banner'),
            Test: () => import('./business/Test'),
            OtherTest: () => import('./business/OtherTest'),
        },

        data() {
            return {
            list: [],
            loading: false,
            show: false,
            };
        },

        methods: {
        },

        created() {
            const path = location.pathname.includes("preview")
                ? "/test_preview.json"
                : "/test.json";
            this.loading = true;
            asyncData(path).then(data => {
                this.loading = false;
                this.list = adapter(data.block.root.childBlocks);
            });
        }
    };
</script>