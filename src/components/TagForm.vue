<template>
    <v-form v-model="formValid" ref="form">
        <v-text-field v-model="item.name" label="名称"></v-text-field>
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
                this.appService.tag_empty({}).then(this.tag_empty_callback)
            },
            tag_empty_callback: function (response) {
                var responseData = response.data;
                if (responseData.status != 1) {
                    return;
                }
            },
        },
    }
</script>
