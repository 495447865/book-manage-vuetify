<template>
    <div>
        <main-header></main-header>
        <router-view />
    </div>
</template>

<script>
    import MainHeader from './components/MainHeader';

    export default {
        components: {
            'main-header': MainHeader,
        },
    };
</script>
