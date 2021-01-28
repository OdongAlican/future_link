<template>
    <div class="cutomer-section">
        <h3 class="header-section">Customers</h3>
        <div class="customers-list">
            <div v-for="customer in allCustomers" :key="customer.id" class="customer card p-2 m-2">
                <p>{{ customer.name }}</p>
                <p>{{ customer.address}}</p>
                <div class="avatar">
                    <img :src="customer.avatar">
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
        ...mapActions(['fetchCustomers'])
    },
    computed: mapGetters(['allCustomers']),
    created(){
        this.fetchCustomers();
    }
}
</script>
<style scoped>

</style>