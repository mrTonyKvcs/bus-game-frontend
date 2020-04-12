import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        meta: {
            auth: true
        },
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Dashboard.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ( /* webpackChunkName: "login" */ '../views/Login.vue')
    },
    {
        path: '/registration',
        name: 'Registration',
        component: () =>
            import ( /* webpackChunkName: "registration" */ '../views/Registration.vue')
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () =>
            import ( /* webpackChunkName: "dashboard" */ '../views/Dashboard.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    const loggedIn = localStorage.getItem('user')

    if (to.matched.some(record => record.meta.auth) && !loggedIn) {
        next('/login')
        return
    }
    next()
})

export default router