<template>
    <div class="cutomer-section">
        <h3 class="header-section">Customers</h3>
        <div class="customers-list">
            <div v-for="customer in allCustomers" :key="customer.id" class="customer card p-2 m-2">
                <p>{{ customer.name }}</p>
                <p>{{ customer.address}}</p>
                <div class="avatar">
                    <img :src="`${customer.avatar}`">
                </div>
                <div class="update-and-delete-icons-section">
                    <i 
                    @click="deleteCustomer(customer.id)"
                    class="fas fa-trash-alt"></i>
                </div>
                <div class="list-of-invoices">
                    <span>
                        <router-link
                        :to="`/customer/${customer.id}/invoices`"
                        >View Invoices</router-link>
                    </span>
                </div>
                <div class="update-customer">
                    
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

</style>