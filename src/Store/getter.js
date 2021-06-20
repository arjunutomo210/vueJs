const getBook = (state) => {
	return state.books;
};
const getUsers = (state) => {
	return state.data;
};
// const getListBook = (state) => {
// 	return state.listBook;
// };

export default { getBook, getUsers };
