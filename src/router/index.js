import Vue from 'vue'
import VueRouter from 'vue-router'

import WelcomePage from '../pages/WelcomePage.vue'
import BookListPage from '../pages/BookListPage.vue'
import BookCreatePage from '../pages/BookCreatePage.vue'
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
