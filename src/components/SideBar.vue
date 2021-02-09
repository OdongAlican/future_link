<template>
    <div class="side-bar-section">
        <div class="upper-user-section">
            <div class="loggedin-user-image">
                <img :src="`https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80`" alt="profile">
            </div>
            <div class="logged-in-user-name ml-2">
                <div class="username-section">
                    <span>John Doe</span>
                </div>
                <div class="user-city-section">
                    <span>Kampala City</span>
                </div>
            </div>
        </div>
        <div class="dashboard-section">
            <div class="dashboard-icon">
                <i class="fas fa-chart-pie"></i>
            </div>
            <div class="dashboard-text-section">
                <router-link to="/"
                >Customers</router-link>
            </div>
        </div>
        <div class="list-of-users-section">
            <div class="users-list-icon">
                <i class="fas fa-users"></i>
            </div>
            <div class="users-list-text">
                <span>Users</span>
            </div>
        </div>
        <div class="product-section">
            <div class="product-icon-section">
                <i class="fas fa-poll"></i>
            </div>
            <div class="product-text-section">
                <router-link to="/products"
                >Products</router-link>
            </div>
        </div>
        <div class="settings-section">
            <div class="settings-icon-section">
                <i class="fas fa-cogs"></i>
            </div>
            <div class="settings-text-section">
                <span>Settings</span>
            </div>
        </div>
        <div class="future-link-logo-section">
            <div class="innner-future-link-section">
                <h5>Future<span>Link</span></h5>
                <h6>Technologies</h6>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "SideBar",
}
</script>
<style scoped>
    .loggedin-user-image img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }

    .side-bar-section {
        background-color: #0086C2;
        height: 100vh;
        position: fixed;
        left: 0;
        width: 200px;
        z-index: 2;
        border: 1px solid #0086c2
    }

    .upper-user-section {
        background-color: #0078AE;
        display: flex;
        padding: 16px;
        font-size: 14px;
        color: #fff;
    }

    .username-section {
        font-weight: bold;
    }

    .user-city-section span {
        color:lightgray;
    }

    .dashboard-section,
    .list-of-users-section,
    .product-section,
    .settings-section {
        padding: 20px 25px;
        display: flex;
        color: #fff;
    }

    .dashboard-icon,
    .users-list-icon,
    .product-icon-section,
    .settings-icon-section {
        flex: 1;
        cursor: pointer;
    }

    .dashboard-text-section,
    .users-list-text,
    .product-text-section,
    .settings-text-section {
        flex: 3;
        font-weight: bold;
        cursor: pointer;
    }

    .dashboard-text-section a,
    .product-text-section a {
        color: #fff;
        text-decoration: none;
    }
    
    .future-link-logo-section {
        position: absolute;
        bottom: 0;
        text-align: center;
        width: 70%;
        width: 100%;
        background-color: #0078AE;
        padding: 10px;
        display: flex;
        justify-content: center;

    }

    .future-link-logo-section h5 {
        font-weight: 900;
        color: #fff;
    }

    .future-link-logo-section h6 {
        font-weight: 600;
        color: #fff;
        font-size: 14px;
    }

    .innner-future-link-section {
        border: 1px solid #fff;
        padding: 2px 20px;
        margin-bottom: 5px;
    }

</style>