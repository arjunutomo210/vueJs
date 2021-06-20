<template>
	<div id="app">
		<div id="nav">
			<Header />
		</div>
		<div>
			<div class="container">
				<router-view />
			</div>
		</div>
		<br />
		<br />
		<br />
		<Footer />
	</div>
</template>
<script>
import Header from './components/pages/Header/Header.vue';
import Footer from './components/pages/Footer/Footer.vue';
export default {
	name: 'App',
	components: { Header, Footer }
};
</script>
<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

#nav {
	/* padding: 30px; */
	margin-top: 100px;
}

#nav a {
	font-weight: bold;
	color: #2c3e50;
}

#nav a.router-link-exact-active {
	color: #42b983;
}
</style>
