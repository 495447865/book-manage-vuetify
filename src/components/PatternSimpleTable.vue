<template>
    <v-simple-table>
        <template v-slot:default>
            <thead>
                <tr>
                    <th class="text-left">形态编号</th>
                    <th class="text-left">形态名称</th>
                    <th class="text-left">状态</th>
                    <th class="text-left">创建时间</th>
                    <th class="text-left">最后更新时间</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" :key="item.id">
                    <th>{{ item.patternId }}</th>
                    <th>{{ item.patternName }}</th>
                    <th>{{ item.dataStatus }}</th>
                    <th>{{ item.createTime }}</th>
                    <th>{{ item.lastUpdateTime }}</th>
                </tr>
            </tbody>
        </template>
    </v-simple-table>
</template>

<script>
    export default {
        data: () => ({
            items: null,
        }),
        mounted: function () {
            this.load_items();
        },
        methods: {
            load_items: function () {
                this.appService.pattern_items({}).then(this.pattern_items_callback)
            },
            pattern_items_callback: function (response) {
                this.items = response.data.items;
            },
        },
    }
</script>
