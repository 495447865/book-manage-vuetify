<template>
    <v-container>
        <h3>simple table</h3>
        <v-layout>
            <v-flex xs12>
                <book-simple-table></book-simple-table>
            </v-flex>
        </v-layout>

        <h3>data table</h3>
        <v-layout>
            <v-flex xs12>
                <book-data-table></book-data-table>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import BookSimpleTable from './BookSimpleTable';
    import BookDataTable from './BookDataTable';

    export default {
        name: 'HelloWorld',
        components: { 'book-simple-table': BookSimpleTable, 'book-data-table': BookDataTable }
    };
</script>
