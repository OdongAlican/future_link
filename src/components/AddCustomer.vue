<template>
    <div class="add-customer-section">
        <h3>Add Customer</h3>
        <div class="add-customer-form">
            <form @submit.prevent="submitCustomer">
                <input type="text" v-model="name" placeholder="Add customer name ...">
                <input type="number" v-model="address" placeholder="Add address ...">
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
    name: "AddCustomer",
    props: ['displayModalAdd'],
    data () {
        return {
            selectedFile: null,
            name: '',
            address: '',
            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/fronx/128.jpg'
        }
    },
    methods: {
        ...mapActions(['addCustomers']),

        onFileSelected(){
            this.selectedFile = event.target.files[0]
        },

        submitCustomer(){
            const data = {
                name: this.name,
                address: this.address,
                avatar: this.avatar
            }
            this.addCustomers(data) 
            this.displayModalAdd(false)
        }
    }
}
</script>
<style scoped>
        .add-customer-section {
        padding: 0 20px 20px;
        width: 100%;
    }

    .add-customer-section input {
        border: none;
        height: 35px;
        width: 100%;
        margin-bottom: 10px;
        display: block;
        padding: 0 10px;
        outline: none;
    }
    
    .add-customer-section h3 {
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