<template>
  <div class="home__container">
    <div class="container__logo">
      <div class="logo__image">
        <img src="../assets/arrow.gif" alt="" class="logo--arrow1">
        <img src="../assets/Doktori.png" alt="" class="logo--image">
        <img src="../assets/arrow.gif" alt="" class="logo--arrow2">
      </div>
      <div class="logo__text">
        <h1 class="">Naša mala web-klinika</h1>
        <h2 class="">Dr. Gubo i Dr. Ćosić</h2>
      </div>
    </div>
    <div class="container__items">
      <router-link class="link" to="/">Popis pacijenata</router-link> 
      <router-link class="link" to="/about">Popis kontrolnih poruka</router-link>
    </div>
    <div class="container__connectivity">
      <h3>POVEZANOST:</h3>
      <img v-if="$store.state.isConnected" src="../assets/has_connectivity.gif" alt="">
      <img v-else  src="../assets/no_connectivity.gif" alt="">
      <p>{{ $store.state.string }}</p>
      <button v-on:click="$store.commit('changeState')">PROM</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String
  },
  data(){
    return{
      isConnected: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

h1{
  font-size: 3.75rem;
}

.container__logo{
  display: flex;
  flex-flow: column wrap;
  align-items: center;
}

.logo__image{
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  column-gap: 4rem;
}

.logo__text{
  display: flex;
  flex-flow: column wrap;
}

.logo__text h1{
  margin: 0;
  padding-top: 2rem;
}

.logo__text h2{
  margin: 0;
  font-size: 2.2rem;
}



.logo--arrow2, .logo--arrow1 {
  width: 6%;
  height: 6%;
  padding-top: 0rem;
  align-self: flex-end;
}

.logo--arrow1{
  transform: rotate(90deg);
}

.logo--arrow2{
  transform: rotate(270deg) scaleX(-1);
}
.logo--image{
  border-radius: 25%;
  width: 15%;
}


.container__items{
  padding-top: 4rem;
  display: flex;
  flex-flow: column wrap;
  font-size: 1.5rem;
}

.container__items .link{
  margin: 0;
  padding-top: 1.5rem;
}


.container__connectivity{
  display: flex;
  flex: row wrap;
  justify-content: center;
  align-items: center;
  padding-top: 5rem;
  font-size: 1.5rem;
}

.container__connectivity img{
  width: 6rem;
  padding-left: 2rem;
}
</style>
