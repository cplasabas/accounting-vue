<template>
  <form>
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">Edit Profile</h4>
        <p class="category">Complete your profile</p>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>User Name</label>
              <md-input v-model="username" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Email Address</label>
              <md-input v-model="email" type="email"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>First Name</label>
              <md-input v-model="first_name" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Last Name</label>
              <md-input v-model="last_name" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Password</label>
              <md-input v-model="password" type="password"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Contact</label>
              <md-input v-model="contact" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Address</label>
              <md-input v-model="address" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised md-primary" @click="update_profile">Update Profile</md-button>
          </div>
        </div>

      </md-card-content>
    </md-card>
  </form>
</template>
<script>
import Api from '@/services/Api'

export default {
  name: 'edit-profile-form',
  props: {
    dataBackgroundColor: {
    type: String,   
      default: ''
    }
  },
  data () {
    return {
      username: this.$store.state.user.username,
      email: this.$store.state.user.email,
      first_name: this.$store.state.user.first_name,
      last_name: this.$store.state.user.last_name,
      password: null,
      contact: this.$store.state.user.contact,
      address: this.$store.state.user.address
    }
  },
  methods: {
    update_profile () {
      var userId = this.$store.state.user.id
      var payload = {
        username: this.username,
        email: this.email,
        first_name: this.first_name,
        last_name: this.last_name,
        contact: this.contact,
        address: this.address
      }

      if (this.password != null) {
        payload.password = this.password
      }

      Api().put('users/' + userId, payload).then(response => {
        Api().get('users/' + userId).then(response => {
          var userData = response.data[0]
          delete userData.createdAt
          delete userData.permissions
          delete userData.updatedAt

          this.password = null
          this.$store.dispatch('setUser', userData)
        })
      }).catch(error => {
        console.log(error)
        this.error = error.response.data.message
      })
    }
  }
}

</script>
<style>

</style>
