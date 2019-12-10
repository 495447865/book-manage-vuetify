<template>
    <div>
        <main-header></main-header>

        <!--<main-toolbar></main-toolbar>-->

        <router-view />

        <main-footer></main-footer>
    </div>
</template>


<script>
    import MainHeader from './components/MainHeader';
    import MainFooter from './components/MainFooter';
    //import MainToolbar from './components/MainToolbar';

    export default {

        components: {
            'main-header': MainHeader,
            'main-footer': MainFooter,
            //'main-toolbar': MainToolbar
        },
    };
</script>
