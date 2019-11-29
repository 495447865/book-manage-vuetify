<template>
    <v-data-table :headers="headers" :items="items" :items-per-page="5" class="elevation-1" show-select></v-data-table>
</template>

<script>
    export default {
        data: () => ({
            headers: [],
            items: [],
        }),
        mounted: function () {
            this.load_data();
        },
        methods: {
            load_data: function () {
                this.appService.pattern_data({}).then(this.pattern_data_callback)
            },
            pattern_data_callback: function (response) {
                this.headers = response.data.headers;
                this.items = response.data.items;
            },
        },
    }
</script>
