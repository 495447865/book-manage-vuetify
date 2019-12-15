<template>
    <v-app>

        <main-menu :drawer="drawer"></main-menu>

        <main-header :drawer.sync="drawer"></main-header>

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
        data: () => ({
            drawer: true,
        }),
    };
</script>
