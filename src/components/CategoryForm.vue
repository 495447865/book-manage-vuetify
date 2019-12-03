<template>
    <v-form v-model="formValid" ref="form">
        <v-text-field v-model="item.categoryId" label="分类编号"></v-text-field>
        <v-text-field v-model="item.categoryName" label="分类名称"></v-text-field>
        <v-text-field v-model="item.dataStatus" label="状态"></v-text-field>
        <v-text-field v-model="item.createTime" label="创建时间"></v-text-field>
        <v-text-field v-model="item.lastUpdateTime" label="最后更新时间"></v-text-field>
        <v-btn color="warning">Submit</v-btn>
    </v-form>
</template>

<script>
    export default {
        data: () => ({
            formValid: null,
            item: {
                categoryId: null,
                categoryName: null,
                dataStatus: null,
                createTime: null,
                lastUpdateTime: null,
            },
            option: {
            },
            rule: {
            },
        }),
        mounted: function () {
            this.load_empty();
        },
        methods: {
            load_empty: function () {
                this.appService.category_empty({}).then(this.category_empty_callback)
            },
            category_empty_callback: function (response) {
                var responseData = response.data;
                if (responseData.status != 1) {
                    return;
                }
            },
        },
    }
</script>
