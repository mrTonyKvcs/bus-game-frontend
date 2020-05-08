import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

axios.defaults.baseURL = 'http://127.0.0.1:8000/api'
    //axios.defaults.baseURL = 'http://bus-pub.site/api'

export default new Vuex.Store({
    state: {
        user: null,
        allUser: [],
        notifications: []
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

        setUsers(state, alluser) {
            alluser.forEach(user => {
                state.allUser.push({
                    first_name: user.first_name,
                    last_name: user.last_name,
                    id: user.id,
                    status: true
                })
            })
        },

        changeButton(state, id) {
            const findID = state.allUser.find(user => user.id === id)
            if (findID) {
                findID.status = false
            }
        },

        allNotifications(state, notifications) {
            state.notifications = notifications
        }
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

        addFriend({ state, commit }, userID) {
            axios
                .post(`add-friend/${state.user.user.id}/${userID}`)
                .then(() => {
                    commit('changeButton', userID)
                })


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
                .then(({ data }) => {
                    console.log(data)
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