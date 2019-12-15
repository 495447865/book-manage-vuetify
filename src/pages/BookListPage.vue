<template>
    <v-row>
        <v-col>
            <book-data-table></book-data-table>
        </v-col>
    </v-row>
</template>

<script>
    import BookDataTable from '@/components/BookDataTable';

    export default {
        components: {
            'book-data-table': BookDataTable,
        },
    }
</script>
