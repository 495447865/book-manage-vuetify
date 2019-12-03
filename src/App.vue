<template>
    <v-app>

        <!--默认-->
        <!--<v-app-bar app color="primary" dark>
            <div class="d-flex align-center">
                <v-img alt="Vuetify Logo" class="shrink mr-2" contain src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png" transition="scale-transition" width="40" />
                <v-img alt="Vuetify Name" class="shrink mt-1 hidden-sm-and-down" contain min-width="100" src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png" width="100" />
            </div>

            <v-spacer></v-spacer>

            <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
                <span class="mr-2">Latest Release</span>
                <v-icon>mdi-open-in-new</v-icon>
            </v-btn>
        </v-app-bar>-->

        <!--示例1-->
        <v-app-bar color="deep-purple accent-4" dark>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <v-toolbar-title>Page title</v-toolbar-title>

            <v-toolbar-items>
                <v-btn text>模块 1</v-btn>
                <v-btn text>模块 2</v-btn>
                <v-btn text>模块 3</v-btn>
            </v-toolbar-items>

            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
        </v-app-bar>

        <!--工具栏-->
        <v-toolbar>
            <v-toolbar-title>模块标题</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-toolbar-items>
                <v-btn text>页面 1</v-btn>
                <v-btn text>页面 2</v-btn>
                <v-btn text>页面 3</v-btn>
            </v-toolbar-items>

        </v-toolbar>

        <v-content>
            <HelloWorld />
        </v-content>
    </v-app>
</template>


<script>
    import HelloWorld from './components/HelloWorld';

    export default {
        name: 'App',

        components: {
            HelloWorld,
        },

        data: () => ({
            //
        }),
    };
</script>
