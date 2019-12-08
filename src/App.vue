<template>
    <div>
        <main-header></main-header>

        <!--<main-toolbar></main-toolbar>-->

        <router-view />
    </div>
</template>


<script>
    import MainHeader from './components/MainHeader';
    //import MainToolbar from './components/MainToolbar';

    export default {

        components: {
            'main-header': MainHeader,
            //'main-toolbar': MainToolbar
        },
    };
</script>
