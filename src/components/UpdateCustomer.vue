<template>
    <div class="update-customer-section">
        <h3>Update {{ customer.name }}'s Information</h3>
        <div class="update-customer-form">
            <form @submit.prevent="updateCustomer">
                <input type="text" v-model="name" placeholder="Add customer name ...">
                <input type="text" v-model="address" placeholder="Add address ...">
                <input class="submit-button" type="submit" value="Update">
            </form>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    name: "UpdateCustomer",
    props: ['customer', 'displayModal'],
    data () {
    return {
        name: this.customer.name,
        address: this.customer.address,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/fronx/128.jpg'
        }
    },
    methods: {
        ...mapActions(['editCustomer']),
        updateCustomer(){
            const data = {
                name: this.name,
                address: this.address,
                avatar: this.avatar,
                id: this.customer.id
            }

            this.editCustomer(data)
            this.displayModal(false)
        }
    }
}
</script>
<style scoped>

    .update-customer-section {
        padding: 0 20px 20px;
        width: 100%;
    }

    .update-customer-section input {
        border: none;
        height: 35px;
        width: 100%;
        margin-bottom: 10px;
        display: block;
        padding: 0 10px;
        outline: none;
    }
    
    .update-customer-section h3 {
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