<template>
    <div class="add-product-section">
        <h3>Add Product</h3>
        <div class="add-product-form">
            <form @submit.prevent="submitProduct">
                <input type="text" v-model="product_name" placeholder="Add product name ...">
                <input type="number" v-model="product_price" placeholder="Add product price ...">
                <input type="file" @change="onFileSelected">
                <input 
                type="submit" value="Submit" class="submit-button">
            </form>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    name: "AddProduct",
    props: ['displayModalAdd'],
    data () {
        return {
            selectedFile: null,
            product_name: '',
            product_price: '',
            img: 'https://s3.amazonaws.com/uifaces/faces/twitter/fronx/128.jpg'
        }
    },
    methods: {
        ...mapActions(['addProduct']),

        onFileSelected(){
            this.selectedFile = event.target.files[0]            
        },

        submitProduct(){
            const data = {
                product_name: this.product_name,
                product_price: this.product_price,
                img: this.img
            }
            this.addProduct(data) 
            this.displayModalAdd(false)
        }
    }
}
</script>
<style scoped>
    .add-product-section {
        padding: 0 20px 20px;
        width: 100%;
    }

    .add-product-section input {
        border: none;
        height: 35px;
        width: 100%;
        margin-bottom: 10px;
        display: block;
        padding: 0 10px;
        outline: none;
    }
    
    .add-product-section h3 {
        font-size: 15px;
        font-weight: 600;
        color: #666;
    }

    .submit-button {
        background-color: #0078AE;
        border-radius: 3px;
        font-weight: 600;
        color: #fff;
    }
</style>