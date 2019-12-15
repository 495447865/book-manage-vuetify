<template>
    <v-row>
        <v-col>
            <book-form></book-form>
        </v-col>
    </v-row>
</template>

<script>
    import BookForm from '@/components/BookForm';

    export default {
        components: {
            'book-form': BookForm,
        },
    }
</script>
