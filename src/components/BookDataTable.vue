<template>
    <div>
        <v-data-table :headers="headers" :items="items" :items-per-page="5" class="elevation-1" show-select></v-data-table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                headers: [
                    {
                        "value": "name",
                        "text": "书名"
                    },
                    {
                        "value": "price",
                        "text": "定价"
                    },
                    {
                        "value": "brief",
                        "text": "简介"
                    },
                    {
                        "value": "singleTag",
                        "text": "单选标签"
                    },
                    {
                        "value": "multiTag",
                        "text": "多选标签"
                    },
                    {
                        "value": "singleStatus",
                        "text": "单选状态"
                    },
                    {
                        "value": "multiStatus",
                        "text": "多选状态"
                    },
                    {
                        "value": "singleColor",
                        "text": "单选颜色"
                    },
                    {
                        "value": "multiColor",
                        "text": "多选颜色"
                    },
                    {
                        "value": "singleCategory",
                        "text": "单选分类"
                    },
                    {
                        "value": "multiCategory",
                        "text": "多选分类"
                    },
                    {
                        "value": "singlePattern",
                        "text": "单选形态"
                    },
                    {
                        "value": "multiPattern",
                        "text": "多选形态"
                    }
                ],
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