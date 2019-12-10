<template>
    <v-container>
        <v-breadcrumbs :items="items"></v-breadcrumbs>

        <div class="mb-12 pb-8">
            <v-btn class="ma-2" outlined color="teal">新建</v-btn>
        </div>

        <book-data-table></book-data-table>
    </v-container>
</template>

<script>
    import BookDataTable from '@/components/BookDataTable';

    export default {
        components: {
            'book-data-table': BookDataTable,
        },
        data: () => ({
            items: [
                {
                    text: '首页',
                    to: { name: 'welcome' },
                },
                {
                    text: '图书列表页',
                    to: { name: 'book-list-page' },
                },
            ],
        }),
    };
</script>
