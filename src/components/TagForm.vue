<template>
    <v-form v-model="formValid" ref="form">
        <v-text-field v-model="item.name" :rules="rule.name" label="名称" :counter="10" required></v-text-field>
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
                name: null,
                dataStatus: null,
                createTime: null,
                lastUpdateTime: null,
            },
            rule: {
                name: [
                    v => !!v || '名称 required.',
                    v => v != null && v.length <= 10 || '名称 length > 10',
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
                this.appService.tag_empty({}).then(this.tag_empty_callback)
            },
            tag_empty_callback: function (response) {
            },
        },
    }
</script>
