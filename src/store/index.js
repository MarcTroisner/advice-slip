import { createStore } from 'vuex';
import axios from 'axios';
import validatePayload from '@/helpers/validation';

export default createStore({
  state: {
    status: 'PENDING',
    slips: [],
  },
  mutations: {
    UPDATE_STATUS(state, payload) {
      state.status = payload.status;
    },
    PUSH_SLIP(state, payload) {
      state.slips.push(payload.slip);
    },
    CLEAR_SLIPS(state) {
      state.slips = [];
    },
  },
  actions: {
    getSlips({ commit }, payload) {
      let endpoint = 'https://api.adviceslip.com/advice';

      // Set status to pending
      commit('UPDATE_STATUS', { status: 'PENDING' });

      // Check for search term
      validatePayload(payload, ['search'], (isValid) => {
        if (isValid) endpoint = `${endpoint}/search/${payload.search}`;
      });

      // Clear previous slips
      commit('CLEAR_SLIPS');

      // Fetch slips
      axios.get(endpoint)
        .then((res) => {
          const { data } = res;

          // Check if data got returned
          if (data.message !== undefined) {
            commit('UPDATE_STATUS', { status: 'NORESULTS' });
            return;
          }

          // Check if search has been used and push data
          if (data.query !== undefined) {
            data.slips.forEach((slip) => commit('PUSH_SLIP', { slip }));
          } else commit('PUSH_SLIP', { slip: data.slip });

          // Update status
          commit('UPDATE_STATUS', { status: 'OK' });
        })
        .catch(() => {
          commit('UPDATE_STATUS', { status: 'ERROR' });
        });
    },
  },
  getters: {
    getStatus(state) {
      return state.status;
    },
    getFetchFailed(state) {
      return state.status === 'ERROR';
    },
    getNoResults(state) {
      return state.status === 'NORESULTS';
    },
    getSlips(state) {
      return state.slips;
    },
  },
});
