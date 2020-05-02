import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions.js';
import getters from './getters.js';
import mutations from './mutations.js';
import state from './state.js';

Vue.use(Vuex);

const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations
});

export default store;
