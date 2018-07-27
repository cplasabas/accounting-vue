<template>
  <div class="wrapper">
    <notifications></notifications>

    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/dashboard/dashboard">
        <md-icon>home</md-icon>
        <p>Dashboard</p>
      </sidebar-link>
      <sidebar-link to="/dashboard/projects">
        <md-icon>build</md-icon>
        <p>Projects</p>
      </sidebar-link>
      <sidebar-link to="/dashboard/workers">
        <md-icon>business_center</md-icon>
        <p>Workers</p>
      </sidebar-link>
      <sidebar-link to="/dashboard/inventory">
        <md-icon>content_paste</md-icon>
        <p>Inventory</p>
      </sidebar-link>
      <sidebar-link to="/dashboard/items">
        <md-icon>view_headline</md-icon>
        <p>Items</p>
      </sidebar-link>
      <sidebar-link to="/dashboard/suppliers">
        <md-icon>store</md-icon>
        <p>Suppliers</p>
      </sidebar-link>
        <sidebar-link to="/dashboard/users">
        <md-icon>person</md-icon>
        <p>Users</p>
      </sidebar-link>
      <sidebar-link to="/dashboard/settings">
        <md-icon>settings</md-icon>
        <p>Settings</p>
      </sidebar-link>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content>

      </dashboard-content>

      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
import TopNavbar from './TopNavbar.vue'
import ContentFooter from './ContentFooter.vue'
import DashboardContent from './Content.vue'
import MobileMenu from '@/pages/Layout/MobileMenu.vue'

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu
  }
}
</script>
