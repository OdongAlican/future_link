import axios from 'axios';

const state = {
    customers: [
    ]
};

const getters = {
    allCustomers: (state) => state.customers
};

const actions = {
    async fetchCustomers({ commit }){
        const response = await axios.get('https://6012bf0f54044a00172dc953.mockapi.io/sp5/api/v1/customer')
        commit('setCustomers', response.data.items)
    }
};

const mutations = {
    setCustomers: (state, customers) => (state.customers = customers)
};

export default {
    state,
    getters,
    actions,
    mutations
}