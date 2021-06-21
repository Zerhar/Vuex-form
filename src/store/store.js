import { createStore } from 'vuex';
import userModule from './user';
import countryModule from './country';
import professionModule from './profession';

export default createStore({
  modules: {
    userModule,
    countryModule,
    professionModule,
  },
})
