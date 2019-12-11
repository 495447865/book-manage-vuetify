<template>
    <v-container>
        <book-data-table></book-data-table>
    </v-container>
</template>

<script>
    import BookDataTable from '@/components/BookDataTable';

    export default {
        components: {
            'book-data-table': BookDataTable,
        },
    };
</script>
