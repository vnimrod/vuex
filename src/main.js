import { createApp } from 'vue';
import { createStore } from 'vuex';
import axios from 'axios';

import App from './App.vue';

const store = createStore({
  state() {
    return {
      counter: 0,
      history: [0],
    };
  },
  mutations: {
    addToCounter(state, payload) {
      state.counter += payload;
      state.history.push(state.counter);
    },
    subtractFromCounter(state, payload) {
      state.counter -= payload;
      state.history.push(state.counter);
    },
  },
  actions: {
    //context will contain everything that is inside our store (the state, the mutations)
    async addRandomNumber(context) {
      let data = await axios.get(
        'https://www.random.org/integers/?num=1&min=-1000&max=1000&col=1&base=10&format=plain&rnd=new'
      );
      console.log(data);

      // call for api, then mutate the addToCounter method that eventually will re render our screen
      context.commit('addToCounter', data.data);
    },
  },
  getters: {
    activeIndexes: (state) => {
      // payload is the value that will be bolded when we search a number by its index
      return (payload) => {
        let indexes = [];
        state.history.forEach((number, index) => {
          if (number === payload) {
            indexes.push(index);
          }
        });
        return indexes;
      };
    },
  },
});

const app = createApp(App);

app.use(store);

app.mount('#app');
