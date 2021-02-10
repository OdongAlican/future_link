import axios from 'axios';

const state = {
    customers: []
};

const getters = {
    allCustomers: (state) => state.customers
};

const actions = {
    async fetchCustomers({ commit }){
        try {
            const response = await axios.get('https://6012bf0f54044a00172dc953.mockapi.io/sp5/api/v1/customer')
            commit('setCustomers', response.data.items)
        } catch (error) {
            console.log(error)
        }
    },
    async addCustomers({ commit }, data ){
        try {
            const response = await axios.post('https://6012bf0f54044a00172dc953.mockapi.io/sp5/api/v1/customer', data)
            commit('newCustomer', response.data)            
        } catch (error) {
            console.log(error)
        }
    },
    async deleteCustomer({ commit }, id){
        try {
            await axios.delete(`https://6012bf0f54044a00172dc953.mockapi.io/sp5/api/v1/customer/${id}`)
            commit('removeCustomer', id)            
        } catch (error) {
            console.log(error)
        }
    },
    async editCustomer({ commit }, data){
        
        const details = {
            name: data.name,
            address: data.address,
            avatar: data.avatar
        }

        try {
            const response = await axios.put(`https://6012bf0f54044a00172dc953.mockapi.io/sp5/api/v1/customer/${data.id}`, details)
            console.log(response.data, 'updated customer')
            commit('updateCustomer', response.data)            
        } catch (error) {
            console.log(error)
        }
    }
};

const mutations = {
    setCustomers: (state, customers) => (state.customers = customers),
    newCustomer: (state, customer) => state.customers.push(customer),
    removeCustomer: (state, id) => state.customers = state.customers.filter(customer => customer.id !== id),
    updateCustomer: (state, updatedCustomer) => {
        let customers = [...state.customers];
        const index = customers.findIndex(customer => customer.id === updatedCustomer.id);
        if(index !== -1) {
            customers.splice(index, 1, updatedCustomer);
        }
        state.customers = [...customers];
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}