import Vue from 'vue';
import Vuex from 'vuex';

import Printer from '../classes/Printer.js';
import mutations from './mutations';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    printerIds: ['makerBot', 'formLabs', 'lightBox'],
    printersById: {
      makerBot: new Printer('makerBot', 'Makerbot'),
      formLabs: new Printer('formLabs', 'Formlabs'),
      lightBox: new Printer('lightBox', 'Lightbox')
    },
    selectedPrinterId: ''
  },
  mutations: {
    SELECT_PRINTER: (state, printerId) => {
      state.selectedPrinterId = printerId;
    }
  },
  getters: {
    printerList: state => {
      return state.printerIds.map(id => state.printersById[id]);
    },
    selectedPrinter: (state, getters) => {
      return state.printersById[state.selectedPrinterId];
    }
  }
});

export default store;
