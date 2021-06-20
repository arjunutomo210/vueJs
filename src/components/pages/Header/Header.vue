<template>
	<nav class="navbar fixed-top navbar-expand-lg navbar-dark bgHeader shadow">
		<div class="container">
			<a class="navbar-brand text-white" href="#home">SURRA ARJUN UTOMO</a>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav ms-auto">
					<li class="nav-item">
						<a class="nav-link"><router-link to="/">Home</router-link></a>
					</li>

					<li class="nav-item">
						<a class="nav-link"><router-link to="/book">Book</router-link></a>
					</li>
					<li class="nav-item">
						<a class="nav-link"><router-link to="/dailytask">Daily Task</router-link></a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#project">Projects</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#contact">Contact</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
export default {
	name: 'Header',
	components: {}
};
</script>
<style scoped>
.bgHeader {
	background-color: #000141;
}
</style>
