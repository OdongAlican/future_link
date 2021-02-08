<template>
    <div class="add-customer-section">
        <h3>Add Customer</h3>
        <div class="add-customer-form">
            <form @submit.prevent="submitCustomer">
                <input type="text" v-model="name" placeholder="Add customer name ...">
                <input type="number" v-model="address" placeholder="Add address ...">
                <input type="file" @change="onFileSelected">
                <input 
                type="submit" value="Submit">
            </form>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    name: "AddCustomer",
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
        }
    }
}
</script>
<style scoped>

</style>