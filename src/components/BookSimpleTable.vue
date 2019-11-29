<template>
    <v-simple-table>
        <template v-slot:default>
            <thead>
                <tr>
                    <th class="text-left">书名</th>
                    <th class="text-left">定价</th>
                    <th class="text-left">简介</th>
                    <th class="text-left">单选标签</th>
                    <th class="text-left">多选标签</th>
                    <th class="text-left">单选状态</th>
                    <th class="text-left">多选状态</th>
                    <th class="text-left">单选颜色</th>
                    <th class="text-left">多选颜色</th>
                    <th class="text-left">单选分类</th>
                    <th class="text-left">多选分类</th>
                    <th class="text-left">单选形态</th>
                    <th class="text-left">多选形态</th>
                    <th class="text-left">状态</th>
                    <th class="text-left">创建时间</th>
                    <th class="text-left">最后更新时间</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" :key="item.id">
                    <th>{{ item.name }}</th>
                    <th>{{ item.price }}</th>
                    <th>{{ item.brief }}</th>
                    <th>{{ item.singleTag }}</th>
                    <th>{{ item.multiTag }}</th>
                    <th>{{ item.singleStatus }}</th>
                    <th>{{ item.multiStatus }}</th>
                    <th>{{ item.singleColor }}</th>
                    <th>{{ item.multiColor }}</th>
                    <th>{{ item.singleCategory }}</th>
                    <th>{{ item.multiCategory }}</th>
                    <th>{{ item.singlePattern }}</th>
                    <th>{{ item.multiPattern }}</th>
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
                this.appService.book_items({}).then(this.book_items_callback)
            },
            function (response) {
                this.items = response.data.items;
            },
        },
    }
</script>
