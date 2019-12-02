<template>
    <v-form v-model="formValid" ref="form">
        <v-text-field v-model="item.name" label="书名"></v-text-field>
        <v-text-field v-model="item.price" label="定价"></v-text-field>
        <v-text-field v-model="item.brief" label="简介"></v-text-field>

        <v-select v-model="item.singleTag" :items="option.singleTag" label="单选标签" item-value="id" item-text="tagName" required></v-select>

        <v-radio-group v-model="item.singleTag" row>
            <v-radio v-for="item in option.singleTag" :key="item.id" :label="item.tagName" :value="item.id"></v-radio>
        </v-radio-group>

        <v-select v-model="item.multiTag" :items="option.multiTag" label="多选标签" item-value="id" item-text="tagName" required></v-select>
        <v-select v-model="item.singleStatus" :items="option.singleStatus" label="单选状态" item-value="statusId" item-text="statusName" required></v-select>
        <v-select v-model="item.multiStatus" :items="option.multiStatus" label="多选状态" item-value="statusId" item-text="statusName" required></v-select>
        <v-select v-model="item.singleColor" :items="option.singleColor" label="单选颜色" item-value="colorId" item-text="colorName" required></v-select>
        <v-select v-model="item.multiColor" :items="option.multiColor" label="多选颜色" item-value="colorId" item-text="colorName" required></v-select>
        <v-select v-model="item.singleCategory" :items="option.singleCategory" label="单选分类" item-value="categoryId" item-text="categoryName" required></v-select>
        <v-select v-model="item.multiCategory" :items="option.multiCategory" label="多选分类" item-value="categoryId" item-text="categoryName" required></v-select>
        <v-select v-model="item.singlePattern" :items="option.singlePattern" label="单选形态" item-value="patternId" item-text="patternName" required></v-select>
        <v-select v-model="item.multiPattern" :items="option.multiPattern" label="多选形态" item-value="patternId" item-text="patternName" required></v-select>
        <v-text-field v-model="item.dataStatus" label="状态"></v-text-field>
        <v-text-field v-model="item.createTime" label="创建时间"></v-text-field>
        <v-text-field v-model="item.lastUpdateTime" label="最后更新时间"></v-text-field>
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
            option: {
                singleTag: [],
                multiTag: [],
                singleStatus: [],
                multiStatus: [],
                singleColor: [],
                multiColor: [],
                singleCategory: [],
                multiCategory: [],
                singlePattern: [],
                multiPattern: [],
            },
            rule: {
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
                var responseData = response.data;
                if (responseData.status != 1) {
                    return;
                }
                this.option.singleTag = responseData.singleTag;
                this.option.multiTag = responseData.multiTag;
                this.option.singleStatus = responseData.singleStatus;
                this.option.multiStatus = responseData.multiStatus;
                this.option.singleColor = responseData.singleColor;
                this.option.multiColor = responseData.multiColor;
                this.option.singleCategory = responseData.singleCategory;
                this.option.multiCategory = responseData.multiCategory;
                this.option.singlePattern = responseData.singlePattern;
                this.option.multiPattern = responseData.multiPattern;
            },
        },
    }
</script>
