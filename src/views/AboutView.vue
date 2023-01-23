<template>
  <div class="MessageList__container">
    <h1>Popis kontrolnih poruka</h1>
    <div class="container__links">
    <router-link class="link" to="/">Popis pacijenata</router-link> | 
    <router-link class="link" to="/about">Popis kontrolnih poruka</router-link>
    </div>
    <ul class="container__information">
      <li>{{ getNow() }}</li>
    </ul>
    <button v-on:click="addBeginning">Dodaj li</button>
    <button v-on:click="$store.commit('addThree')">Dodaj u listu element</button>
    <button v-on:click="$store.commit('addButton')">BUTTON PRESS element</button>
    <button v-on:click="$store.commit('storeLog')">Log</button>
  </div>
  <div>
    <div v-for="message in $store.state.data" :key="message.id">
      <span v-if="message.includes('BUTTON')" style="color: red;">{{ message }}</span>
      <span v-else>{{ message }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  props: {
    msg: String
  },
  created() {
                setInterval(this.getNow, 1000);
            },
  data(){
    return{
      isConnected: false,
      timestamp: ""
    }
  },
  methods:{
    getNow: function() {
                    const today = new Date();
                    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                    const dateTime = '[ '+ date +' '+ time + ' ]';
                    return dateTime;
                },
    getNowData: function(data) {
        return this.getNow() + "  " + data;
    },
    addBeginning: function(){
      const unorderedList = document.querySelector(".container__information");
      const elementLi = document.createElement("li")
      elementLi.innerHTML = this.getNow();
      unorderedList.prepend(elementLi);
    }
  }
}
</script>


<style>

*{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container__links{
  font-size: 1.25rem;
  font-weight: 500;
  padding-bottom: 3rem;
}

.container__information li{
  text-align: left;
}

</style>
