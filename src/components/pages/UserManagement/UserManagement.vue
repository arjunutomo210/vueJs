<template>
	<div>
		<p>user management</p>
	</div>
</template>
<script>
export default {
	name: 'ListUser',
	components: {},
	computed: {
		userList() {
			return this.$store.getters;
		}
	},
	mounted() {
		this.$store.dispatch('getListUser');
		// this.getData();
	}
};
</script>

<style scoped></style>
