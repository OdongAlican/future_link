<template>
    <div class="add-invoice-section">
        <h3>Add New Invoice</h3>
        <div class="add-invoice-form">
            <form @submit.prevent="submitInvoice">
                <input type="date" v-model="due_date" placeholder="Add due date ...">
                <input type="number" v-model="invoice_no" placeholder="Add invoice number ...">
                <input 
                type="submit" value="Submit" class="submit-button">
            </form>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    name: "AddInvoice",
    props: ['displayCreateModal'],
    data(){
        return{
            due_date: '',
            invoice_no: ''
        }
    },
    methods: {
        ...mapActions(['addInvoice']),
        submitInvoice(){
            const data = {
                customerId: this.$route.params.id,
                invoice_no: this.invoice_no,
                due_date: this.due_date
            }
            this.addInvoice(data)
            this.displayCreateModal(false)
        }
    }
}
</script>
<style scoped>
    .add-invoice-section {
        padding: 0 20px 20px;
        width: 100%;
    }

    .add-invoice-section input {
        border: none;
        height: 35px;
        width: 100%;
        margin-bottom: 10px;
        display: block;
        padding: 0 10px;
        outline: none;
    }
    
    .add-invoice-section h3 {
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