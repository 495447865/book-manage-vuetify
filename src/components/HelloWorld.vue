<template>
    <v-container>
        <v-layout text-centerwrap>
            <v-flex xs12>

                <ul v-if="posts && posts.length">
                    <li v-for="(post,x) of posts" :key="x">
                        <p><strong>{{post.title}}</strong></p>
                        <p>{{post.body}}</p>
                    </li>
                </ul>

                <ul v-if="errors && errors.length">
                    <li v-for="(error,x) of errors" :key="x">
                        {{error.message}}
                    </li>
                </ul>

            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data: () => ({
            posts: null,
            errors: null
        }),
        methods: {

        },
        mounted: function () {

            this.bookService.get_post_items().then(response => {

                this.posts = response.data
            }).catch(e => {

                this.errors.push(e)
            });
        }
    };
</script>
