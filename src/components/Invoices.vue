<template>
    <div class="invoices-list">
        <p>List of invoices</p>
        <div class="container-invoice card" v-for="invoice in allInvoices" :key="invoice.id">
            <p>{{ invoice.invoice_no }}</p>
            <p>{{ invoice.due_date }}</p>
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

</style>