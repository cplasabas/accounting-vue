<template>
  <md-card class="md-card-profile">
    <md-card-content>
      <md-button class="md-round md-primary"  @click="logout">Sign Out</md-button>
    </md-card-content>
  </md-card>
</template>
<script>
export default {
  name: 'user-card',
  data () {
    return {
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push('/')
    }
  }
}

</script>
<style>

</style>
