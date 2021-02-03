import axios from 'axios';

const state = {
    invoices: [
    ]
};

const getters = {
    allInvoices: (state) => state.invoices
};

const actions = {
    async fetchInvoices({ commit }, id){
        try {
            const response = await axios.get(`https://6012bf0f54044a00172dc953.mockapi.io/sp5/api/v1/customer/${id}/invoice`)
            commit('setInvoices', response.data)
        } catch (error) {
            console.log(error, 'error messages')
        }
    },
};

const mutations = {
    setInvoices: (state, invoices) => (state.invoices = invoices),
};

export default {
    state,
    getters,
    actions,
    mutations
}