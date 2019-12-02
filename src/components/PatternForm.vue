<template>
    <v-form v-model="formValid" ref="form">
        <v-text-field v-model="item.patternId" label="形态编号"></v-text-field>
        <v-text-field v-model="item.patternName" label="形态名称"></v-text-field>
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
                patternId: null,
                patternName: null,
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
                this.appService.pattern_empty({}).then(this.pattern_empty_callback)
            },
            pattern_empty_callback: function (response) {
            },
        },
    }
</script>
