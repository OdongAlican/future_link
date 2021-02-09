<template>
    <div class="update-product-section">
        <h3>Update {{ product.product_name }}'s Information</h3>
        <div class="update-product-form">
            <form @submit.prevent="updateProduct">
                <input type="text" v-model="product_name" placeholder="Add product name ...">
                <input type="text" v-model="product_price" placeholder="Add address ...">
                <input class="submit-button" type="submit" value="Update">
            </form>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    name: "UpdateProduct",
    props: ['product', 'displayModal'],
    data () {
    return {
        product_name: this.product.product_name,
        product_price: this.product.product_price,
        img: 'https://s3.amazonaws.com/uifaces/faces/twitter/fronx/128.jpg'
        }
    },
    methods: {
        ...mapActions(['editProduct']),
        updateProduct(){
            const data = {
                product_name: this.product_name,
                product_price: this.product_price,
                img: this.img,
                id: this.product.id
            }

            this.editProduct(data)
            this.displayModal(false)
        }
    }
}
</script>
<style scoped>

    .update-product-section {
        padding: 0 20px 20px;
        width: 100%;
    }

    .update-product-section input {
        border: none;
        height: 35px;
        width: 100%;
        margin-bottom: 10px;
        display: block;
        padding: 0 10px;
        outline: none;
    }
    
    .update-product-section h3 {
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