import Vue from 'vue';

const stateBook = (state, payload) => {
	// state.books = payload;

	// payload.forEach((element) => {
	state.books.push(payload);
	// });
};
const listUser = (state, payload) => {
	state.data = payload;
	// payload.forEach((element) => {
	// 	state.books.push(element);
};

const listBook = (state, payload) => {
	state.books = payload;
	// payload.forEach((element) => {
	// 	state.books.push(element);
	// });
};

const delBook = (state, payload) => {
	state.books.splice(payload, 1);
};

const updBook = (state, payload) => {
	const index = state.books.findIndex((item) => item.id === payload.id);
	Vue.set(state.books, index, payload);
};
const errorMessage = (state, payload) => {
	state.error = payload;
	// alert(state.error);
};
export default { stateBook, listUser, listBook, delBook, updBook, errorMessage };
