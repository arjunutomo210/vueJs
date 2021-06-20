const url = 'http://localhost:3004/';
const urlUser = 'http://localhost:8881/cb/api/';

const getListBook = async (context) => {
	try {
		const data = await fetch(url + 'posts');
		const res = await data.json();
		// this.results = res;
		context.commit('listBook', res);
	} catch (error) {
		context.commit('errorMessage', 'error get list mas');
	}
};

const getListUser = async (context) => {
	try {
		let token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTYxOTY2NzM3MSwiZXhwIjoxNjE5NjczNzcxfQ.yMw8rn9eBnxb4HRsq3_Vy-M88rzaateEDcfjaMZQV8cuD7cT13HrfqCA2_-z3b6sxylHl6kwPzBr6AoawkAdag';
		const headers = { method: 'GET', 'Content-Type': 'application/json', Authorization: token };
		const data = await fetch(urlUser + 'getUserService', headers, { mode: 'no-cors' });
		const res = await data.json();
		console.info(res);
		// this.results = res;
		context.commit('listUser', res);
	} catch (error) {
		context.commit('errorMessage', 'error get list mas');
	}
};

const addBook = async (context, payload) => {
	try {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: payload
		};
		const response = await fetch(url + 'posts', requestOptions);
		const data = await response.json();
		if (response.status == 201) {
			context.commit('stateBook', data);
		} else {
			alert('gagal Add');
		}
	} catch (error) {
		context.commit('errorMessage', 'error add mas');
	}
};

const deleteBook = async (context, payload) => {
	try {
		let index = payload[0];
		let id = payload[1];

		const response = await fetch(url + 'posts/' + id, {
			method: 'DELETE',
			headers: {
				'Content-type': 'application/json'
			}
		});
		if (response.status == 200) {
			context.commit('delBook', index);
		}
	} catch (error) {
		context.commit('errorMessage', 'error delete mas');
	}
};

const updateBook = async (context, payload) => {
	try {
		// console.info(context);
		// console.info(payload);
		const requestOptions = {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload.dt)
		};
		const response = await fetch(url + 'posts/' + payload.dt.id, requestOptions);
		const data = await response.json();
		// console.log(response);
		if (response.status == 200) {
			context.commit('updBook', data);
		} else {
			alert('gagal Update');
		}
	} catch (error) {
		context.commit('errorMessage', 'error update mas');
	}
};

export default { addBook, getListBook, deleteBook, updateBook, getListUser };
