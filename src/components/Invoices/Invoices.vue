<template>
    <div class="invoices-list">
        <div class="upper-search-section shadow">
            <div class="input-search-section">
                <i class="fas fa-search"></i>
                <input type="text" placeholder="Search Invoices ...">
            </div>
            <div class="create-cutomer-button-section">
                <button @click="displayCreateModal(true)">Create</button>
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
                        <button class="passed-overdue-invoice">Over Due</button>
                    </div>
                </div>
                <div class="invoice-number">Invoice No: {{ invoice.invoice_no }}</div>
                <div class="invoice-due-date"> 
                    Due Date: {{ (
                        new Date(invoice.due_date)).toDateString() 
                        }}
                </div>
                <div class="update-and-delete-icons-section">
                    <i 
                    @click="displayModal(true); updateModal(invoice)"
                    class="fas fa-user-edit"
                    ></i>
                    <i @click="removeInvoice(invoice.id)" class="fas fa-trash-alt"></i>
                </div>
            </div>
                <transition name="fade" appear>
                    <div v-if="showModalAdd" class="modal-overlay">
                        <div class="modal-overlay-inner">
                            <i @click="displayCreateModal(false)" class="far fa-times-circle"></i>
                            <add-invoice :displayCreateModal="displayCreateModal"/>
                        </div>
                    </div>
                </transition>
                <transition name="fade" appear>
                    <div v-if="showModal" class="modal-overlay">
                        <div class="modal-overlay-inner">
                            <i @click="displayModal(false)" class="far fa-times-circle"></i>
                            <update-invoice 
                            :displayModal="displayModal"
                            :invoice="editingInvoice"></update-invoice>
                        </div>
                    </div>
                </transition>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import AddInvoice from './AddInvoice'
import UpdateInvoice from './UpdateInvoice'
export default {
    name: "Invoices",
    components: {
        'add-invoice': AddInvoice,
        'update-invoice': UpdateInvoice
    },
    data(){
        return {
            showModalAdd: false,
            showModal: false,
            editingInvoice: {},
        }
    },
    methods: {
        ...mapActions(['fetchInvoices', 'deleteInvoice']),
        displayCreateModal(value){
            console.log(value)
            this.showModalAdd = value
        },
        displayModal(value){
            this.showModal = value
        },
        updateModal(invoice){
            this.editingInvoice = invoice;
        },
        removeInvoice(id){
            const data = {
                customerId: this.$route.params.id,
                invoiceId: id
            }

            this.deleteInvoice(data)
        }
    },
    computed: mapGetters(['allInvoices']),
    created(){
    this.fetchInvoices(this.$route.params.id);
    }
}
</script>
<style scoped>
    .invoices-list {
        position: relative;
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

    .upcoming-invoice-section,
    .passed-invoice-section {
        display: flex;
        justify-content: flex-end;
    }

    .upcoming-invoice-section .pending-invoice,
    .passed-overdue-invoice {
        background-color: #70D25F;
        color: #fff;
        padding: 0 10px;
        border: none;
        border-radius: 2px;
        font-weight: bold;
        font-size: 12px;
        outline: none;
    }

    .passed-overdue-invoice {
        background-color: #555;
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

    .fa-times-circle {
        cursor: pointer;
        color: red;
    }
</style>