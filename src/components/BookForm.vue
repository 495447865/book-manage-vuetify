<template>
    <v-form v-model="formValid" ref="form">
        <v-text-field v-model="item.name" label="书名"></v-text-field>
        <v-text-field v-model="item.price" label="定价"></v-text-field>
        <v-text-field v-model="item.brief" label="简介"></v-text-field>
        <v-radio-group v-model="item.singleTag" row>
            <v-radio v-for="v in option.singleTag" :key="v.id" :value="v.id" :label="v.tagName"></v-radio>
        </v-radio-group>
        <v-checkbox-group row>
            <v-checkbox v-for="v in option.multiTag" :key="v.id" v-model="item.multiTag" :value="v.id" :label="v.tagName"></v-checkbox>
        </v-checkbox-group>
        <v-radio-group v-model="item.singleStatus" row>
            <v-radio v-for="v in option.singleStatus" :key="v.statusId" :value="v.statusId" :label="v.statusName"></v-radio>
        </v-radio-group>
        <v-checkbox-group row>
            <v-checkbox v-for="v in option.multiStatus" :key="v.statusId" v-model="item.multiStatus" :value="v.statusId" :label="v.statusName"></v-checkbox>
        </v-checkbox-group>
        <v-radio-group v-model="item.singleColor" row>
            <v-radio v-for="v in option.singleColor" :key="v.colorId" :value="v.colorId" :label="v.colorName"></v-radio>
        </v-radio-group>
        <v-checkbox-group row>
            <v-checkbox v-for="v in option.multiColor" :key="v.colorId" v-model="item.multiColor" :value="v.colorId" :label="v.colorName"></v-checkbox>
        </v-checkbox-group>
        <v-radio-group v-model="item.singleCategory" row>
            <v-radio v-for="v in option.singleCategory" :key="v.categoryId" :value="v.categoryId" :label="v.categoryName"></v-radio>
        </v-radio-group>
        <v-checkbox-group row>
            <v-checkbox v-for="v in option.multiCategory" :key="v.categoryId" v-model="item.multiCategory" :value="v.categoryId" :label="v.categoryName"></v-checkbox>
        </v-checkbox-group>
        <v-radio-group v-model="item.singlePattern" row>
            <v-radio v-for="v in option.singlePattern" :key="v.patternId" :value="v.patternId" :label="v.patternName"></v-radio>
        </v-radio-group>
        <v-checkbox-group row>
            <v-checkbox v-for="v in option.multiPattern" :key="v.patternId" v-model="item.multiPattern" :value="v.patternId" :label="v.patternName"></v-checkbox>
        </v-checkbox-group>
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
                name: null,
                price: null,
                brief: null,
                singleTag: null,
                multiTag: [],
                singleStatus: null,
                multiStatus: [],
                singleColor: null,
                multiColor: [],
                singleCategory: null,
                multiCategory: [],
                singlePattern: null,
                multiPattern: [],
                dataStatus: null,
                createTime: null,
                lastUpdateTime: null,
            },
            option: {
                singleTag: [],
                singleStatus: [],
                singleColor: [],
                singleCategory: [],
                singlePattern: [],
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
