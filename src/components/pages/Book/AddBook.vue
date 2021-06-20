<template>
	<div class="row justify-content-center">
		<!-- <div class="card"> -->
		<!-- <div class="card-body"> -->
		<!-- <form action=""> -->
		<!-- <div class="form-row"> -->
		<div class="col-md-3">
			<label>Title</label>
			<input type="text" class="form-control" v-model.trim="$v.title.$model" :class="{ 'is-invalid': $v.title.$error, 'is-valid': !$v.title.$invalid }" />
			<!-- <div class="valid-feedback">Your title is valid</div> -->
			<div class="invalid-feedback">
				<span v-if="!$v.title.required">Title is required</span>
				<!-- <span v-if="!$v.title.minLength">Title must have at least {{ $v.title.$params.minLength.min }} letters</span> -->
				<span v-if="!$v.title.maxLength">Title must have at least {{ $v.title.$params.maxLength.max }} letters</span>
			</div>
		</div>
		<div class="col-md-3">
			<label>Author</label>
			<input type="text" class="form-control" v-model.trim="$v.author.$model" :class="{ 'is-invalid': $v.author.$error, 'is-valid': !$v.author.$invalid }" />
			<!-- <div class="valid-feedback">Your author is valid</div> -->
			<div class="invalid-feedback">
				<span v-if="!$v.author.required">author is required</span>
				<!-- <span v-if="!$v.author.minLength">author must have at least {{ $v.author.$params.minLength.min }} letters</span> -->
				<span v-if="!$v.author.maxLength">author must have at least {{ $v.author.$params.maxLength.max }} letters</span>
			</div>
		</div>
		<div class="col-md-3">
			<span class="form-label text-start text-trans">-</span>
			<button type="submit" class="btn bt btn-primary" @click="submitForm()">Submit {{ submitstatus }}</button>
		</div>
		<notifications position="bottom right" group="foo" />
		<!-- </div> -->
		<!-- </form> -->
		<!-- </div> -->
		<!-- </div> -->
		<!-- <div class="col-md-3">
			<p class="form-label text-start">Title</p>
			<input class="form-control" v-model="title" placeholder="Title" />
		</div>
		<div class="col-md-3">
			<p class="form-label text-start">Author</p>
			<input class="form-control" v-model="author" placeholder="Author" />
		</div>
		<div class="col-md-3">
			<p class="form-label text-start text-trans">-</p>
			<button type="submit" style="" @click="postData" class="btn bt btn-primary">Add</button>
		</div>
		<notifications position="bottom right" class="nitification" group="foo" /> -->
	</div>
</template>

<script>
import Vue from 'vue';
import Notifications from 'vue-notification';
import Vuelidate from 'vuelidate';
import { required, maxLength } from 'vuelidate/lib/validators';
import 'bootstrap/dist/css/bootstrap.min.css';
Vue.use(Vuelidate);
Vue.use(Notifications);
export default {
	name: 'App',
	components: {},

	data() {
		return {
			title: '',
			author: '',
			submitstatus: null
		};
	},
	validations: {
		title: {
			required,
			// minLength: minLength(3),
			maxLength: maxLength(50)
		},
		author: {
			required,
			// minLength: minLength(5),
			maxLength: maxLength(20)
		}
	},
	computed: {
		formAdd() {
			return this.$store.getters.getBook;
		}
	},
	watch: {
		formAdd() {
			(this.title = ''), (this.author = '');
		}
	},
	methods: {
		async postData() {
			const body = JSON.stringify({ title: this.title, author: this.author });
			this.$store.dispatch('addBook', body);
			Vue.notify({
				group: 'foo',
				type: 'success',
				title: 'Tambah Buku',
				text: 'Sukses tambah buku!'
			});
		},
		async submitForm() {
			// console.info(this.submitstatus);

			if (this.$v.$invalid) {
				this.submitstatus = 'FAIL';
				if (this.submitstatus == 'FAIL') {
					console.info(this.submitstatus);
					this.$v.$touch();
				}
			} else {
				const body = JSON.stringify({ title: this.title, author: this.author });
				this.$store.dispatch('addBook', body);
				Vue.notify({
					group: 'foo',
					type: 'success',
					title: 'Tambah Buku',
					text: 'Sukses tambah buku!'
				});
				this.submitstatus = 'SUCCESS';
				// (this.title = ''), (this.author = '');
			}
		}
	},

	mounted() {
		// this.getData();
	},
	created() {
		// console.info('');
	}
};
</script>

<style scoped></style>
