import Vue from 'vue'
import Vuex from 'vuex'
import Printer from './modules/Printer.js'
import Queue from './modules/Queue.js'
import PrintJob from './modules/PrintJob.js'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Printer,
    PrintJob,
    Queue
  },
  data() {
      return {
        makerBot: new Printer('makerBot', "Makerbot"),
        formLabs: new Printer('formLabs', "Formlabs"),
        lightBox: new Printer('lb', "Lightbox"),

      }
    },
    computed: {
      printerList() {
        return [this.makerBot, this.formLabs, this.lightBox]
      }
    }
})
