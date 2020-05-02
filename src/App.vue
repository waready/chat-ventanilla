<template>
  <div >
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark " style="background-color: #E81E3C;">
  <a class="navbar-brand" href="#">Colegio de Ingenieros cd Puno</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link  class="nav-link" to="/">Chat</router-link> <span class="sr-only">(current)</span>
      </li>
      <li class="nav-item">
        <router-link class="nav-link"  to="/contador">Contador</router-link>
      </li>

    </ul>
    <span class="navbar-text">
      Procura lavarte bien las manos y contar con los implementos de proteccion
    </span>
  </div>
</nav>
    
    </header>
    <div class="container" id="app">
       <img src="./assets/logo.png">
        <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
