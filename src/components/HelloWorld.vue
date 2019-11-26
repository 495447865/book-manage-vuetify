<template>
    <v-container>
        <v-layout text-centerwrap>
            <v-flex xs12>

                <booklist></booklist>

            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import BookList from './BookList';

    export default {
        name: 'HelloWorld',
        components: { 'booklist': BookList }
    };
</script>
