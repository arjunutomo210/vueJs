import Vue from 'vue';
import Vuex from 'vuex';
import initialState from './initialState.js';
import getters from './getters.js';
import mutations from './mutation.js';
import actions from './actions.js';
Vue.use(Vuex);

const store = new Vuex.Store({
	state: initialState,
	actions,
	mutations,
	getters
});

export default store;
