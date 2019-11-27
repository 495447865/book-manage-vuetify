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

        <h3>form</h3>
        <v-layout>
            <v-flex xs12>
                <book-form></book-form>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import BookSimpleTable from './BookSimpleTable';
    import BookDataTable from './BookDataTable';
    import BookForm from './BookForm';

    export default {
        name: 'HelloWorld',
        components: {
            'book-simple-table': BookSimpleTable,
            'book-data-table': BookDataTable,
            'book-form': BookForm
        }
    };
</script>
