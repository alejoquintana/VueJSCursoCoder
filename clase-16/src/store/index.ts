import {
    createStore
} from 'vuex'

export default createStore({
    state: {},
    getters: {},
    mutations: {},
    actions: {
        doConsole({},text) {
            console.log(text);
        }
    },
    modules: {}
})
