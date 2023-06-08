import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      coaches: [
        {
          id: 'c1',
          firstName: 'Anna',
          lastName: 'Gmiąt',
          areas: ['frontend', 'backend', 'career'],
          description: 'Mam na imie Anna i mam 20 lat',
          hourlyRate: 30,
        },
        {
          id: 'c2',
          firstName: 'Julia',
          lastName: 'Żądło',
          areas: ['frontend', 'career'],
          description: 'Mam na imię Julia i mam 30 lat',
          hourlyRate: 30,
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
