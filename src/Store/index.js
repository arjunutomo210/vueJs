import Vue from 'vue';
import Vuex from 'vuex';
import initialState from './initialState.js';
import getters from './getter.js';
import mutations from './mutation.js';
import actions from './action.js';
import userStore from './user_Store';
Vue.use(Vuex);

const store = new Vuex.Store({
	state: initialState,
	actions,
	mutations,
	getters,
	userStore
});

export default store;
