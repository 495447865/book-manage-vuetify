<template>
    <div>
        <v-data-table :headers="headers" :items="items" :items-per-page="5" class="elevation-1" show-select></v-data-table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                headers: [],
                items: []
            }
        },
        methods: {
            load_items: function () {
                this.appService.book_items({}).then(this.load_items_callback);
            },
            load_items_callback: function (response) {
                this.items = response.data.items;
            }
        },
        mounted: function () {

            this.load_items();
        }
    }
</script>