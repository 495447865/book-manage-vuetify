<template>
    <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" app>
        <v-list dense>
            <template v-for="item in items">
                <v-list-group v-if="item.children" :key="item.text" v-model="item.model" :prepend-icon="item.model ? item.icon : item['icon-alt']" append-icon="">
                    <template v-slot:activator>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>{{ item.text }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </template>
                    <v-list-item v-for="(child, i) in item.children" :key="i" link>
                        <v-list-item-action v-if="child.icon">
                            <v-icon>{{ child.icon }}</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>{{ child.text }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-group>
                <v-list-item v-else :key="item.text" link>
                    <v-list-item-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>
                            {{ item.text }}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </template>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        data: () => ({
            items: [
                { icon: 'mdi-apps', text: 'Contacts', heading: true },
                { icon: 'mdi-apps', text: 'Frequently contacted' },
                { icon: 'mdi-apps', text: 'Duplicates' },
                {
                    icon: 'mdi-chevron-up',
                    'icon-alt': 'mdi-chevron-down',
                    text: 'Labels',
                    model: true,
                    children: [
                        { icon: 'mdi-apps', text: 'Create label' },
                    ],
                },
                {
                    icon: 'mdi-chevron-up',
                    'icon-alt': 'mdi-chevron-down',
                    text: 'More',
                    model: false,
                    children: [
                        { icon: 'mdi-apps', text: 'Import' },
                        { icon: 'mdi-apps', text: 'Export' },
                        { icon: 'mdi-apps', text: 'Print' },
                        { icon: 'mdi-apps', text: 'Undo changes' },
                        { icon: 'mdi-apps', text: 'Other contacts' },
                    ],
                },
                { icon: 'mdi-apps', text: 'Settings' },
                { icon: 'mdi-apps', text: 'Send feedback' },
                { icon: 'mdi-apps', text: 'Help' },
                { icon: 'mdi-apps', text: 'App downloads' },
                { icon: 'mdi-apps', text: 'Go to the old version' },
            ],
        })
    }
</script>
