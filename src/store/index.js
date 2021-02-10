import Vuex from 'vuex';
import Vue from 'vue';
import customers from './modules/customers';
import invoices from './modules/invoices';
import products from './modules/products'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        customers,
        invoices,
        products
    }
});