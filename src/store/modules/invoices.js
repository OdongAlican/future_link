import axios from 'axios';

const state = {
    invoices: []
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
    async addInvoice({ commit }, data ){
        try {
            const response = await axios.post(`https://6012bf0f54044a00172dc953.mockapi.io/sp5/api/v1/customer/${data.customerId}/invoice`, data)
            commit('newInvoice', response.data)            
        } catch (error) {
            console.log(error)
        }
    },
    async editInvoice({commit}, data) {
        const details = {
            due_date: data.due_date,
            invoice_no: data.invoice_no
        }

        try {
            const response = await axios.put(`https://6012bf0f54044a00172dc953.mockapi.io/sp5/api/v1/customer/${data.customerId}/invoice/${data.id}`, details)
            commit('updateInvoice', response.data)   
        } catch (error) {
            console.log(error)
        }
    },
    async deleteInvoice({ commit }, data){
        try {
            await axios.delete(`https://6012bf0f54044a00172dc953.mockapi.io/sp5/api/v1/customer/${data.customerId}/invoice/${data.invoiceId}`)
            commit('removeInvoice', data.invoiceId)            
        } catch (error) {
            console.log(error)
        }
    },
};

const mutations = {
    setInvoices: (state, invoices) => (state.invoices = invoices),
    newInvoice: (state, invoice) => state.invoices.push(invoice),
    removeInvoice: (state, id) => state.invoices = state.invoices.filter(invoice => invoice.id !== id),
    updateInvoice: (state, updatedInvoice) => {
        let invoices = [...state.invoices];
        const index = invoices.findIndex(invoice => invoice.id === updatedInvoice.id);
        if(index !== -1) {
            invoices.splice(index, 1, updatedInvoice);
        }
        state.invoices = [...invoices];
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}