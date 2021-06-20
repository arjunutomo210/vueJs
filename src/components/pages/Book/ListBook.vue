<template>
	<div id="app">
		<div class="container">
			<h1 class="display-4">Daftar Buku</h1>
			<AddBook />
			<br />
			<br />
			<div class="row row-cols-1 row-cols-md-3 g-4">
				<div class="col" v-for="(result, index) in bookList" :key="index">
					<div class="card h-100">
						<div class="card-header">
							<h5 class="card-title">#{{ result.id }}</h5>
						</div>
						<div class="card-body">
							<div class="row rowmrg text-start">
								<div class="col-md-12">
									<p class="navbar-brand">{{ result.title }}</p>
								</div>
							</div>
							<div class="row rowmrg">
								<div class="col-md-3">
									<p class="card-text">Author</p>
								</div>
								<div class="col-md-1"><p>:</p></div>
								<div class="col-md-7">
									<p class="card-text">{{ result.author }}</p>
								</div>
							</div>
						</div>
						<div class="card-footer">
							<div class="row ">
								<div class="col-md-6 d-grid">
									<button type="button" class="btn btn-outline-success" @click="detailTask(result.id, result.title, result.author, index)" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Update</button>
								</div>
								<div class="col-md-6 d-grid">
									<button type="button" class="btn btn-danger" @click="deleteData(index, result.id, result.title)">Delete</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="modal fade" id="staticBackdrop" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalLabel">{{ detail.id }}</h5>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body text-start">
						<div class="row">
							<div class="col-md-3">
								<p>Title</p>
							</div>
							<div class="col-md-7">
								<!-- <input type="text" class="form-control" :value="detail.title" /> -->
								<textarea class="form-control" id="exampleFormControlTextarea1" rows="3" :value="detail.title" name="titleUpdate"></textarea>
							</div>
						</div>
						<div class="row">
							<div class="col-md-3">
								<p>Author</p>
							</div>
							<div class="col-md-7">
								<input type="text" class="form-control" :value="detail.author" name="authorUpdate" />
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
						<button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="updateBook()">Submit</button>
					</div>
				</div>
			</div>
		</div>
		<notifications position="bottom right" group="foo" />
	</div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import AddBook from './AddBook.vue';
import Vue from 'vue';
import Notifications from 'vue-notification';
Vue.use(Notifications);
export default {
	name: 'ListBook',
	components: { AddBook },
	data() {
		return {
			detail: {
				id: '',
				title: '',
				author: '',
				index: ''
			}
		};
	},
	computed: {
		bookList() {
			return this.$store.getters.getBook;
		},
		clearList() {
			return this.$store.getters.getBook;
		}
	},

	methods: {
		async deleteData(id, rsid, title) {
			const idr = [];
			idr.push(id);
			idr.push(rsid);
			this.$store.dispatch('deleteBook', idr);
			this.$notify({
				group: 'foo',
				title: 'Hapus Buku ' + title,
				text: 'Hapus buku berhasil!'
			});
		},
		async updateData(id, title, author) {
			console.info(id, title, author);
		},
		detailTask(id, title, author, index) {
			this.detail.id = id;
			this.detail.title = title;
			this.detail.author = author;
			this.detail.index = index;
		},
		async updateBook() {
			const authorUpdate = document.querySelector('input[name=authorUpdate]').value;
			const titleUpdate = document.querySelector('textarea[name=titleUpdate]').value;

			const dt = {
				id: this.detail.id,
				title: titleUpdate,
				author: authorUpdate
			};
			const index = this.detail.index;
			this.$store.dispatch('updateBook', { dt, index });
		}
	},
	mounted() {
		this.$store.dispatch('getListBook');
		// this.getData();
	}
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
.bt {
	width: 100%;
}
.text-trans {
	color: transparent;
}
td,
th {
	border: 1px solid #dddddd;
	text-align: left;
	padding: 8px;
}
tr:nth-child(even) {
	background-color: #dddddd;
}
</style>
