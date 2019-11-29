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
            this.load_items();
        },
        methods: {
            load_items: function () {
                this.appService.category_items({}).then(this.category_items_callback)
            },
            category_items_callback: function (response) {
                this.items = response.data.items;
            },
        },
    }
</script>
