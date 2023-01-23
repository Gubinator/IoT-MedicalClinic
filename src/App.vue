<template>
  <router-view/>
  
</template>


<script>

const socket = new WebSocket('ws://192.168.1.100:81');

socket.onopen = function () {
  console.log('WebSocket is open now.');
};

socket.onmessage = function (event) {
  console.log('Data received: ' + event.data);
};

socket.onclose = function () {
  console.log('WebSocket is closed now.');
};

socket.onerror = function (event) {
  console.log('WebSocket error: ' + event);
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

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
