<template>
    <div class="update-invoice-section">
        <h3>Update Invoice No:{{ invoice.invoice_no }}</h3>
        <div class="update-invoice-form">
            <form @submit.prevent="updateInvoice">
                <input type="date" v-model="due_date" placeholder="Add due date ...">
                <input type="number" v-model="invoice_no" placeholder="Add invoice number ...">
                <input class="submit-button" type="submit" value="Update">
            </form>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    name: "UpdateInvoice",
    props: ['invoice', 'displayModal'],
    data () {
    return {
        due_date: '',
        invoice_no: this.invoice.invoice_no,
        }
    },
    methods: {
        ...mapActions(['editInvoice']),
        updateInvoice(){
            const data = {
                due_date: this.due_date,
                invoice_no: this.invoice_no,
                id: this.invoice.id,
                customerId: this.$route.params.id,
            }

            this.editInvoice(data)
            this.displayModal(false)
        }
    }
}
</script>
<style scoped>

    .update-invoice-section {
        padding: 0 20px 20px;
        width: 100%;
    }

    .update-invoice-section input {
        border: none;
        height: 35px;
        width: 100%;
        margin-bottom: 10px;
        display: block;
        padding: 0 10px;
        outline: none;
    }
    
    .update-invoice-section h3 {
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