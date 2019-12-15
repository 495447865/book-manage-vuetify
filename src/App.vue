<template>
    <v-app>

        <main-menu></main-menu>

        <main-header></main-header>

        <v-content>
            <v-container fluid>
                <router-view />
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    import MainMenu from '@/components/MainMenu';
    import MainHeader from '@/components/MainHeader';

    export default {
        components: {
            'main-menu': MainMenu,
            'main-header': MainHeader
        },
        props: {
            source: String,
        },
        data: () => ({
            dialog: false,
            drawer: null,
        }),
    };
</script>
