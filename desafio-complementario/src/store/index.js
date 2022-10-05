import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'


let url = 'https://632ba0ac5568d3cad872d716.mockapi.io/users'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        users: []
    },
    getters: {
        getUsers(state) {
            return state.users
        }
    },
    mutations: {
        setUsers(state, payload) {
            state.users = payload
        }
    },
    actions: {
        async get({
            commit
        }) {
            await axios.get(url).then((response) => {
                commit('setUsers',response.data)
            })
        },
        async create({
            commit
        }, data) {
            await axios.post(url,data).then((response) => {
                console.log('response.data',response.data);
            })
        },
        async update({
            commit
        }) {

        },
        async destroy({
            commit
        }) {

        }
    },
    modules: {}
})