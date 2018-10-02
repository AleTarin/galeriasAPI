<template>
  <section class="aboutMe">
		<b-row>
			<b-col sm="0" md="6">
				<b-img class="img" src="https://picsum.photos/300/150/?image=41" fluid-grow alt="Image of me" />
  		</b-col>
  		<b-col sm="11" md="6">
  			<b-container fluid class="info-container">
				<div class="inner-container">
					<h1 class="mb-5">¡Hola! Soy Vick Romero</h1>
					<p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					<h3><router-link to="/about">Conoce más sobre mi </router-link></h3>
				</div>
			</b-container fluid>
  		</b-col>
  	</b-row>
  </section>
</template>

<script>
export default {
  name: 'AboutMe',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.aboutMe {
padding: 0 15px;

  .col { 
    padding-left: 0;
    padding-right: 0;
  }
}

.info-container {
background-color: #f2f2f2;
width: 100%;
height: 100%;
}

.inner-container {
padding: 18% 15%;
width: 100%;

}

.img {
width: 100%;
height: 100%;

	@media only screen and (max-width: 600px) {
		display: none;
	}
}
</style>
