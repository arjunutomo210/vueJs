// import Vue from 'vue';

const listUser = (state, payload) => {
	state.data = payload;
	// payload.forEach((element) => {
	// 	state.books.push(element);
	// });
};

const errorMessage = (state, payload) => {
	state.error = payload;
	// alert(state.error);
};
export default { listUser, errorMessage };
