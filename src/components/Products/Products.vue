<template>
    <div class="products-list-section">
        <div class="upper-search-section shadow">
            <div class="input-search-section">
                <i class="fas fa-search"></i>
                <input type="text" placeholder="Search Product ...">
            </div>
            <div class="create-cutomer-button-section">
                    <button @click="displayModalAdd(true)">Create</button>
                <i class="far fa-bell"></i>
            </div>
        </div>
        <h3 class="header-section">{{ allProducts.length }} Products</h3>
        <div class="product-list">
            <div v-for="product in allProducts" :key="product.id" class="product shadow">
                <div class="product-image-section">
                    <img :src="`https://www.free-mockup.com/wp-content/uploads/edd/2018/04/Box-Package-Design-Mock-Up.jpg`" alt="product">
                </div>
                <div class="product-name">
                    Product: {{ product.product_name }}
                </div>
                <div class="product-price">
                    Price: {{ product.product_price }} $
                </div>
                <div class="edit-and-delete-product">
                    <i @click="displayModal(true); updateModal(product)"
                    class="fas fa-user-edit"></i>
                    <i @click="deleteProduct(product.id)"
                    class="fas fa-trash-alt"></i>
                </div>
            </div>
        </div>
        <transition name="fade" appear>
            <div v-if="showModalAdd" class="modal-overlay">
                <div class="modal-overlay-inner">
                    <i @click="displayModalAdd(false)" class="far fa-times-circle"></i>
                    <add-product :displayModalAdd="displayModalAdd"/>
                </div>
            </div>
        </transition>
        <transition name="fade" appear>
            <div v-if="showModal" class="modal-overlay">
                <div class="modal-overlay-inner">
                    <i @click="displayModal(false)" class="far fa-times-circle"></i>
                    <update-product 
                    :displayModal="displayModal"
                    :product="editingProduct"></update-product>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct'
export default {
    name: 'Products',
    data(){
        return {
            showModalAdd: false,
            showModal: false,
            editingProduct: {}
        }
    },
    components: {
        'add-product': AddProduct,
        'update-product': UpdateProduct
    },
    methods: {
        ...mapActions(['fetchProducts', 'deleteProduct']),
        displayModalAdd(value){
            console.log(value, 'inside value')
            this.showModalAdd = value
        },
        displayModal(value){
            this.showModal = value
        },
        updateModal(product){
            this.editingProduct = product
        },
    },
    computed: mapGetters(['allProducts']),
    created() {
        this.fetchProducts()
    }
}
</script>
<style scoped>

.products-list-section {
    position: relative;
}

.product-image-section img {
    width: 70px;
    height: 70px;
}

.modal-overlay {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 98;
    background-color: rgba(0, 0, 0, 0.7);
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-overlay-inner {
    width: 40%;
    height: 40%;
    background-color: #ECF0F3;;
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

.product-image-section {
    padding: 0 16px;
}

.product-list {
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
}

.product {
    padding: 16px 0 0;
    margin: 10px;
    display: flex;
    flex-direction: column;
}

.product-name,
.product-price {
    flex: 1;
    padding: 0 15px;
    font-size: 14px;
    color: #0078AE;
    font-weight: 600;
}

.product-name {
    padding-top: 5px;
    color: #000;
    font-size: 15px;
    font-weight: 600;
}

.edit-and-delete-product {
    background-color: #ECF0F3;
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding: 10px;
}

.edit-and-delete-product i {
    margin: 0 5px;
    cursor: pointer;
    font-size: 20px;
}

.fa-user-edit {
    color: #D3D3D3;
}

.fa-trash-alt {
    color: red;
}

.fa-times-circle {
    cursor: pointer;
    color: red;
}
</style>