import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from '../pages/Welcome.vue'
import _404 from '../pages/_404.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'welcome',
        component: Welcome
    },
    {
        path: '/_404',
        name: '_404',
        component: _404
    },
    {
        path: "*",
        redirect: "/_404"
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
