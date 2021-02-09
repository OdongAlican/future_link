import axios from 'axios';

const state = {
    products: []
};

const getters = {
    allProducts: (state) => state.products
};

const actions = {
    async fetchProducts({ commit }){
        try {
            const response = await axios.get('https://6012bf0f54044a00172dc953.mockapi.io/sp5/api/v1/product')
            console.log(response.data)
            commit('setProducts', response.data)
        } catch (error) {
            console.log(error, 'error messages')
        }
    },
    async addProduct({ commit }, data ){
        try {
            const response = await axios.post('https://6012bf0f54044a00172dc953.mockapi.io/sp5/api/v1/product', data)
            console.log(response.data, "new data")
            commit('newProduct', response.data)            
        } catch (error) {
            console.log(error, "product error")
        }
    },
    async editProduct({commit}, data) {
        const details = {
            product_name: data.product_name,
            product_price: data.product_price
        }

        try {
            const response = await axios.put(`https://6012bf0f54044a00172dc953.mockapi.io/sp5/api/v1/product/${data.id}`, details)
            commit('updateProduct', response.data)   
        } catch (error) {
            console.log(error)
        }
    },
    async deleteProduct({ commit }, id){
        try {
            await axios.delete(`https://6012bf0f54044a00172dc953.mockapi.io/sp5/api/v1/product/${id}`)
            commit('removeProduct', id)            
        } catch (error) {
            console.log(error)
        }
    },
};

const mutations = {
    setProducts: (state, products) => (state.products = products),
    newProduct: (state, product) => state.products.push(product),
    removeProduct: (state, id) => state.products = state.products.filter(product => product.id !== id),
    updateProduct: (state, updatedProduct) => {
        let products = [...state.products];
        const index = products.findIndex(product => product.id === updatedProduct.id);
        if(index !== -1) {
            products.splice(index, 1, updatedProduct);
        }
        state.products = [...products];
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}