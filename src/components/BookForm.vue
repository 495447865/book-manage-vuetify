<template>
    <v-form v-model="formValid" ref="form">
        <v-text-field v-model="item.name" :rules="rule.name" label="书名" :counter="10" required></v-text-field>
        <v-text-field v-model="item.price" :rules="rule.price" label="定价" :counter="10" required></v-text-field>
        <v-text-field v-model="item.brief" :rules="rule.brief" label="简介" :counter="10" required></v-text-field>
        <v-text-field v-model="item.singleTag" :rules="rule.singleTag" label="单选标签" :counter="10" required></v-text-field>
        <v-text-field v-model="item.multiTag" :rules="rule.multiTag" label="多选标签" :counter="10" required></v-text-field>
        <v-text-field v-model="item.singleStatus" :rules="rule.singleStatus" label="单选状态" :counter="10" required></v-text-field>
        <v-text-field v-model="item.multiStatus" :rules="rule.multiStatus" label="多选状态" :counter="10" required></v-text-field>
        <v-text-field v-model="item.singleColor" :rules="rule.singleColor" label="单选颜色" :counter="10" required></v-text-field>
        <v-text-field v-model="item.multiColor" :rules="rule.multiColor" label="多选颜色" :counter="10" required></v-text-field>
        <v-text-field v-model="item.singleCategory" :rules="rule.singleCategory" label="单选分类" :counter="10" required></v-text-field>
        <v-text-field v-model="item.multiCategory" :rules="rule.multiCategory" label="多选分类" :counter="10" required></v-text-field>
        <v-text-field v-model="item.singlePattern" :rules="rule.singlePattern" label="单选形态" :counter="10" required></v-text-field>
        <v-text-field v-model="item.multiPattern" :rules="rule.multiPattern" label="多选形态" :counter="10" required></v-text-field>
        <v-text-field v-model="item.dataStatus" :rules="rule.dataStatus" label="状态" :counter="10" required></v-text-field>
        <v-text-field v-model="item.createTime" :rules="rule.createTime" label="创建时间" :counter="10" required></v-text-field>
        <v-text-field v-model="item.lastUpdateTime" :rules="rule.lastUpdateTime" label="最后更新时间" :counter="10" required></v-text-field>
        <v-btn color="warning">Submit</v-btn>

        <p>{{item}}</p>
    </v-form>
</template>

<script>
    export default {
        data: () => ({
            formValid: null,
            item: {
                name: null,
                price: null,
                brief: null,
                singleTag: null,
                multiTag: null,
                singleStatus: null,
                multiStatus: null,
                singleColor: null,
                multiColor: null,
                singleCategory: null,
                multiCategory: null,
                singlePattern: null,
                multiPattern: null,
                dataStatus: null,
                createTime: null,
                lastUpdateTime: null,
            },
            rule: {
                name: [
                    v => !!v || '书名 required.',
                    v => v != null && v.length <= 10 || '书名 length > 10',
                ],
                price: [
                    v => !!v || '定价 required.',
                    v => v != null && v.length <= 10 || '定价 length > 10',
                ],
                brief: [
                    v => !!v || '简介 required.',
                    v => v != null && v.length <= 10 || '简介 length > 10',
                ],
                singleTag: [
                    v => !!v || '单选标签 required.',
                    v => v != null && v.length <= 10 || '单选标签 length > 10',
                ],
                multiTag: [
                    v => !!v || '多选标签 required.',
                    v => v != null && v.length <= 10 || '多选标签 length > 10',
                ],
                singleStatus: [
                    v => !!v || '单选状态 required.',
                    v => v != null && v.length <= 10 || '单选状态 length > 10',
                ],
                multiStatus: [
                    v => !!v || '多选状态 required.',
                    v => v != null && v.length <= 10 || '多选状态 length > 10',
                ],
                singleColor: [
                    v => !!v || '单选颜色 required.',
                    v => v != null && v.length <= 10 || '单选颜色 length > 10',
                ],
                multiColor: [
                    v => !!v || '多选颜色 required.',
                    v => v != null && v.length <= 10 || '多选颜色 length > 10',
                ],
                singleCategory: [
                    v => !!v || '单选分类 required.',
                    v => v != null && v.length <= 10 || '单选分类 length > 10',
                ],
                multiCategory: [
                    v => !!v || '多选分类 required.',
                    v => v != null && v.length <= 10 || '多选分类 length > 10',
                ],
                singlePattern: [
                    v => !!v || '单选形态 required.',
                    v => v != null && v.length <= 10 || '单选形态 length > 10',
                ],
                multiPattern: [
                    v => !!v || '多选形态 required.',
                    v => v != null && v.length <= 10 || '多选形态 length > 10',
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
                this.appService.book_empty({}).then(this.book_empty_callback)
            },
            book_empty_callback: function (response) {

                if (response.status != 1) {
                    return;
                }
                var responseData = response.data;
                this.singleTag_selection = responseData.singleTag;
                this.multiTag_selection = responseData.multiTag;
                this.singleStatus_selection = responseData.singleStatus;
                this.multiStatus_selection = responseData.multiStatus;
                this.singleColor_selection = responseData.singleColor;
                this.multiColor_selection = responseData.multiColor;
                this.singleCategory_selection = responseData.singleCategory;
                this.multiCategory_selection = responseData.multiCategory;
                this.singlePattern_selection = responseData.singlePattern;
                this.multiPattern_selection = responseData.multiPattern;
            },
        },
    }
</script>
