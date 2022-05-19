import { createStore } from 'vuex';
import validatePayload from '@/helpers/validation';

const status = {
  PENDING: 'pending',
  OK: 'ok',
  ERROR: 'error',
};

export default createStore({
  state: {
    status: status.PENDING,
  },
  mutations: {
    UPDATE_STATUS(state, payload) {
      state.status = status[payload.status];
    },
  },
  actions: {
    updateAppStatus({ commit }, payload) {
      // Check if correct payload has been passed
      if (validatePayload(payload, ['status']) === false) return;

      // Check if new status is defined in status
      if (validatePayload(status, payload.status) === false) return;

      // Commit UPDATE_STATUS mutation
      commit('UPDATE_STATUS', payload);
    },
  },
  getters: {
    fetchFailed(state) {
      return state.status === status.ERROR;
    },
  },
});
