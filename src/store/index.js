import { createStore } from 'vuex'

export default createStore({
  state: {
    isConnected: true,
    string: 'rqwe',
    socket: null,
    data: [].reverse()
  },
  getters: {
  },
  mutations: {
    changeState(state){
      state.isConnected=!state.isConnected
      console.log(state.isConnected)
    },
    SOCKET_CONNECT(state) {
      state.isConnected = true;
      console.log(state.isConnected)
    },
    SOCKET_DISCONNECT(state) {
      state.isConnected = false;
      console.log(state.isConnected)
    },
    ADD_DATA(state, data) {
      state.data.push(data);
    },
    addThree(state){
      const today = new Date();
      const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = '[ '+ date +' '+ time + ' ]';
      state.data.push(dateTime+" Nesto");
      console.log(state.data);
    },
    addButton(state){
      const today = new Date();
      const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = '[ '+ date +' '+ time + ' ]';
      state.data.push(dateTime+" BUTTON");
      console.log(state.data);
    },
    storeLog(state){
      console.log(state.data);
    }
  },
  actions: {
    connect({ commit }) {
      const socket = new WebSocket('ws://192.168.1.100:81');
      socket.onopen = () => {
        commit('SOCKET_CONNECT');
      };
      socket.onclose = () => {
        commit('SOCKET_DISCONNECT');
        setTimeout(() => this.dispatch('connect'), 5000);
      };
      socket.onmessage = (event) => {
        commit('SET_DATA', event.data);
      };
    }
  },
  modules: {
  }
})
