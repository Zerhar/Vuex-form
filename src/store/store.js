import { createStore } from 'vuex';
import countryModule from './country';
import professionModule from './profession';
import modalModule from './modal';
import userModule from './user';

export default createStore({
  modules: {
    countryModule,
    modalModule,
    professionModule,
    userModule,
  },
})
