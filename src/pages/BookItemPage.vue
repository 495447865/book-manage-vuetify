<template>
    <v-tabs>
        <v-tab :to="{name: item.routeName}" v-for="(item, index) in items" :key="index">{{ item.text }}</v-tab>
        <v-tabs-items>
            <router-view />
        </v-tabs-items>
    </v-tabs>
</template>

<script>
    export default {
        data: () => ({
            items: [
                { routeName: 'book-item-page-n-apple', text: '基本信息' },
                { routeName: 'book-item-page-n-banana', text: '扩展信息' },
                { routeName: 'book-item-page-n-candy', text: '其他' },
            ],
        })
    }
</script>
