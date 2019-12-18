import Vue from 'vue'
import VueRouter from 'vue-router'

import WelcomePage from '../pages/WelcomePage.vue'
import BookListPage from '../pages/BookListPage.vue'
import BookCreatePage from '../pages/BookCreatePage.vue'
import BookItemPage from '../pages/BookItemPage.vue'
import TagDataTable from '../components/TagDataTable.vue'
import PatternDataTable from '../components/PatternDataTable.vue'
import CategoryDataTable from '../components/CategoryDataTable.vue'
import _404 from '../pages/_404.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'welcome',
        component: WelcomePage,
    },
    {
        path: '/book',
        name: 'book-list-page',
        component: BookListPage,
    },
    {
        path: '/book/create',
        name: 'book-create-page',
        component: BookCreatePage,
    },
    {
        path: '/book/1',
        name: 'book-item-page',
        component: BookItemPage,
        redirect: '/book/1/p-apple',
        children: [
            {
                path: 'p-apple',
                name: 'book-item-page-n-apple',
                component: TagDataTable,
            },
            {
                path: 'p-banana',
                name: 'book-item-page-n-banana',
                component: PatternDataTable,
            },
            {
                path: 'p-candy',
                name: 'book-item-page-n-candy',
                component: CategoryDataTable,
            },
            {
                path: '*',
                name: 'book-item-page-other',
                redirect: 'p-apple',
            },
        ]
    },
    {
        path: '/_404',
        name: '_404',
        component: _404,
    },
    {
        path: '*',
        name: 'other',
        redirect: '/_404',
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
