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
                this.appService.book_data({}).then(this.book_data_callback)
            },
            book_data_callback: function (response) {
                this.headers = response.data.headers;
                this.items = response.data.items;
            },
        },
    }
</script>
