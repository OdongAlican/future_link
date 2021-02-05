<template>
    <div class="invoices-list">
        <div class="upper-search-section">
            <div class="input-search-section">
                <i class="fas fa-search"></i>
                <input type="text" placeholder="Search Invoices ...">
            </div>
            <div class="create-cutomer-button-section">
                <button>Create</button>
                <i class="far fa-bell"></i>
            </div>
        </div>
        <h3 class="header-section">{{ allInvoices.length }} Invoices</h3>
        <div class="list-of-invoices">
            <div class="container-invoice" v-for="invoice in allInvoices" :key="invoice.id">
                <div class="display-passed-date">
                    <div 
                    class="upcoming-invoice-section" 
                    v-if="((new Date(invoice.due_date)) - (new Date())) > 1">
                        <button class="pending-invoice">Pending</button>
                    </div>
                    <div class="passed-invoice-section" v-else>
                        <div class="passed-overdue-invoice">Over Due</div>
                    </div>
                </div>
                <div class="invoice-number">Invoice No: {{ invoice.invoice_no }}</div>
                <div class="invoice-due-date"> 
                    Due Date: {{ (
                        new Date(invoice.due_date)).toDateString() 
                        }}
                </div>
                <div class="update-and-delete-icons-section">
                    <i class="fas fa-user-edit"></i>
                    <i class="fas fa-trash-alt"></i>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: "Invoices",
    methods: {
        ...mapActions(['fetchInvoices'])
    },
    computed: mapGetters(['allInvoices']),
    created(){
    this.fetchInvoices(this.$route.params.id);
    }
}
</script>
<style scoped>
    i {
        color: #D3D3D3;
    }

    .list-of-invoices {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        padding: 16px;
        background-color: #ECF0F3;
    }

    .container-invoice {
        background-color: #fff;
        margin: 10px;
        padding: 10px;
        border-radius: 3px;
    }

    .invoice-number {
        font-size: 15px;
        font-weight: 600;
        color: #555;
    }

    .invoice-due-date {
        font-size: 13px;
        color: #0086C2;
        font-weight: bold;
    }

    .upcoming-invoice-section {
        display: flex;
        justify-content: flex-end;
    }

    .upcoming-invoice-section .pending-invoice {
        background-color: #70D25F;
        color: #fff;
        padding: 0 10px;
        border: none;
        border-radius: 2px;
        font-weight: bold;
        font-size: 12px;
    }

    .update-and-delete-icons-section {
        display: flex;
        justify-content: flex-end;
    }

    i {
        cursor: pointer;
        font-size: 20px;
    }

    .fa-trash-alt {
        margin-left: 10px;
        color: red;
    }
</style>