import Vuex from 'vuex';
import Vue from 'vue';
import customers from './modules/customers';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        customers
    }
});