<template>
    <v-form v-model="formValid" ref="form">
        <v-text-field v-model="item.categoryId" :rules="rule.categoryId" label="分类编号" :counter="10" required></v-text-field>
        <v-text-field v-model="item.categoryName" :rules="rule.categoryName" label="分类名称" :counter="10" required></v-text-field>
        <v-text-field v-model="item.dataStatus" :rules="rule.dataStatus" label="状态" :counter="10" required></v-text-field>
        <v-text-field v-model="item.createTime" :rules="rule.createTime" label="创建时间" :counter="10" required></v-text-field>
        <v-text-field v-model="item.lastUpdateTime" :rules="rule.lastUpdateTime" label="最后更新时间" :counter="10" required></v-text-field>
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
            rule: {
                categoryId: [
                    v => !!v || '分类编号 required.',
                    v => v != null && v.length <= 10 || '分类编号 length > 10',
                ],
                categoryName: [
                    v => !!v || '分类名称 required.',
                    v => v != null && v.length <= 10 || '分类名称 length > 10',
                ],
                dataStatus: [
                    v => !!v || '状态 required.',
                    v => v != null && v.length <= 10 || '状态 length > 10',
                ],
                createTime: [
                    v => !!v || '创建时间 required.',
                    v => v != null && v.length <= 10 || '创建时间 length > 10',
                ],
                lastUpdateTime: [
                    v => !!v || '最后更新时间 required.',
                    v => v != null && v.length <= 10 || '最后更新时间 length > 10',
                ],
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
            },
        },
    }
</script>
