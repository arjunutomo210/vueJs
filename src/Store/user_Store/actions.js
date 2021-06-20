const url = 'http://localhost:8881/cb/api/';

const getListUser = async (context) => {
	try {
		const headers = new Headers();
		headers.append('Authorization', 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTYxOTY2NzM3MSwiZXhwIjoxNjE5NjczNzcxfQ.yMw8rn9eBnxb4HRsq3_Vy-M88rzaateEDcfjaMZQV8cuD7cT13HrfqCA2_-z3b6sxylHl6kwPzBr6AoawkAdag');
		const data = await fetch(url + 'getUserService', {
			method: 'GET',
			headers,
			mode: 'cors',
			cache: 'default'
		});
		const res = await data.json();
		// this.results = res;
		context.commit('listUser', res);
	} catch (error) {
		context.commit('errorMessage', 'error get list mas');
	}
};
export default { getListUser };
