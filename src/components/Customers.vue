<template>
    <div class="cutomer-section">
        <div class="upper-search-section">
            <div class="input-search-section">
                <i class="fas fa-search"></i>
                <input type="text" placeholder="Search Customer ...">
            </div>
            <div class="create-cutomer-button-section">
                <button>Create</button>
                <i class="far fa-bell"></i>
            </div>
        </div>
        <h3 class="header-section">{{ allCustomers.length }} Customers</h3>
        <div class="customers-list">
            <div v-for="customer in allCustomers" :key="customer.id" class="customer shadow card p-2 m-2">
                <div class="main-customer-details-section">
                    <div class="avatar">
                        <img :src="`https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80`">
                    </div>
                    <div class="name-address-viewinvoices">
                        <div class="address-name-section">
                            <h6>{{ customer.name }}</h6>
                            <span>Address: {{ customer.address}}</span>
                        </div>
                        <div class="list-of-invoices">
                                <router-link
                                :to="`/customer/${customer.id}/invoices`"
                                >View Invoices</router-link>
                        </div>
                    </div>
                </div>
                <div class="update-and-delete-icons-section">
                    <i class="fas fa-user-edit"></i>
                    <i 
                    @click="deleteCustomer(customer.id)"
                    class="fas fa-trash-alt"></i>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: "Customers",
    methods: {
        ...mapActions(['fetchCustomers', 'deleteCustomer'])
    },
    computed: mapGetters(['allCustomers']),
    created(){
        this.fetchCustomers();
    }
}
</script>
<style scoped>

    i {
        color: #D3D3D3;
    }

    .customers-list {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        padding: 16px;
    }

    .customers-list .customer img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }

    .main-customer-details-section {
        display: flex;
    }

    .main-customer-details-section .avatar {
        flex: 1;
        background-color: #ECF0F3;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;
        border-radius: 3px;
    }

    .main-customer-details-section .name-address-viewinvoices {
        flex: 2;
        color: #0078AE;
        font-size: 13px;
        font-weight: bold;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .main-customer-details-section .address-name-section h6 {
        font-weight: 900;
        color: #666;
        font-size: 14px;
    }

    .main-customer-details-section .address-name-section {
        width: 100%;
        padding: 0 10px;
    }

    .list-of-invoices {
        padding: 5px;
        display: flex;
        width: 95%;
        background-color: #ECF0F3;
        margin: auto;
        justify-content: flex-end;
    }

    .list-of-invoices a {
        background-color: #0086C2;
        padding: 5px;
        border-radius: 3px;
        text-decoration: none;
        color: #fff;
        border: 2px solid #fff;
    }

    .update-and-delete-icons-section {
        display: flex;
        justify-content: flex-end;
        font-size: 20px;
    }

    .update-and-delete-icons-section i {
        margin: 5px;
        cursor: pointer;
    }

    .fa-trash-alt {
        color: red;
    }
</style>