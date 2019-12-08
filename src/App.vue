<template>
    <div>
        <main-header></main-header>

        <main-toolbar></main-toolbar>

        <v-breadcrumbs :items="items"></v-breadcrumbs>

        <welcome></welcome>

        <!--<v-content>
            <welcome></welcome>
        </v-content>-->
    </div>
</template>


<script>
    import MainHeader from './components/MainHeader';
    import MainToolbar from './components/MainToolbar';
    import Welcome from './components/Welcome';

    export default {


        components: {
            'welcome': Welcome,
            'main-header': MainHeader,
            'main-toolbar': MainToolbar
        },

        data: () => ({
            items: [
                {
                    text: 'Dashboard',
                    disabled: false,
                    href: 'breadcrumbs_dashboard',
                },
                {
                    text: 'Link 1',
                    disabled: false,
                    href: 'breadcrumbs_link_1',
                },
                {
                    text: 'Link 2',
                    disabled: true,
                    href: 'breadcrumbs_link_2',
                },
            ],
        }),
    };
</script>
