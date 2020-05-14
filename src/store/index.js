import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

axios.defaults.baseURL = 'http://127.0.0.1:8000/api'
    //axios.defaults.baseURL = 'http://bus-pub.site/api'

export default new Vuex.Store({
    state: {
        user: null,
        users: [],
        notifications: [],
        friends: [],
        status: false
    },

    mutations: {
        setUserData(state, userData) {
            state.user = userData
            localStorage.setItem('user', JSON.stringify(userData))
            axios.defaults.headers.common.Authorization = `Bearer ${userData.token}`
        },

        clearUserData() {
            localStorage.removeItem('user')
            location.reload()
        },

        setUsers(state, users) {
            state.users = users
        },

        allNotifications(state, notifications) {
            state.notifications = notifications
        },

        allFriends(state, friends) {
            state.friends = friends
        },

    },



    actions: {
        login({ commit }, credentials) {
            return axios
                .post('/login', credentials)
                .then(({ data }) => {
                    commit('setUserData', data)
                })
        },

        registration({ commit }, credentials) {
            return axios
                .post('/registration', credentials)
                .then(({ data }) => {
                    commit('setUserData', data)
                })

        },

        fetchUsers({ commit }) {
            axios
                .get('alluser')
                .then(response => {
                    commit('setUsers', response.data)
                })

        },

        addFriend({ state }, userID) {
            axios
                .post(`add-friend/${state.user.user.id}/${userID}`)
        },

        fetchNotifications({ state, commit }) {
            axios
                .get(`notifications/${state.user.user.id}`)
                .then(({ data }) => {
                    commit('allNotifications', data.recipients)
                })
        },

        confirmation({ state }, senderId) {
            axios
                .post(`confirmation/${state.user.user.id}/${senderId}`)
        },

        deny({ state }, senderId) {
            axios
                .post(`deny-friend-request/${state.user.user.id}/${senderId}`)

        },

        fetchFriends({ state, commit }) {
            axios
                .get(`notifications/${state.user.user.id}`)
                .then(({ data }) => {
                    commit('allFriends', data.friends)
                })
        },

        logout({ commit }) {
            commit('clearUserData')
        }
    },

    getters: {
        isLogged: state => !!state.user
    }
})