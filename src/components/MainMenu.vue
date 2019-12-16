<template>
    <v-navigation-drawer :value="drawer" :clipped="$vuetify.breakpoint.lgAndUp" app>
        <v-list dense>
            <v-list-item-group>
                <div v-for="(item, i) in items" :key="i">
                    <v-list-item :to="{name: item.route}">
                        <v-list-item-icon class="mr-4">
                            <v-icon v-text="item.icon"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>{{ item.text }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item :to="{name: item.route}" v-for="(child, j) in item.children" :key="j">
                        <v-list-item-icon class="mr-4">
                            <v-icon>{{ child.icon }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content class="ml-4">
                            <v-list-item-title>{{ child.text }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </div>
            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        props: {
            drawer: null,
        },
        data: () => ({
            items: [
                { icon: 'mdi-apps', text: '图书列表页' },
                { icon: 'mdi-apps', text: '新增图书页' },
                {
                    icon: 'mdi-apps',
                    text: '一级菜单',
                    children: [
                        { icon: 'mdi-apps', text: '二级菜单1' },
                        { icon: 'mdi-apps', text: '二级菜单2' },
                    ]
                },
            ],
        })
    }
</script>

