import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ( /* webpackChunkName: "login" */ '../views/Login.vue')
    },
    {
        path: '/game',
        name: 'Game',
        component: () =>
            import ( /* webpackChunkName: "game" */ '../views/Game.vue')
    },
    {
        path: '/friends',
        name: 'Friends',
        component: () =>
            import ( /* webpackChunkName: "friends" */ '../views/Friends.vue')
    },
    {
        path: '/profile',
        name: 'Profile',
        component: () =>
            import ( /* webpackChunkName: "profile" */ '../views/Profile.vue')
    },
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