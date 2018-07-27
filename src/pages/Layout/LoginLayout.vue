<template>
  <form>
    <md-card>
      <md-card-header data-background-color="primary">
        <h4 class="title">Login</h4>
      </md-card-header>

      <md-card-content>
        <div class="alert alert-danger" v-show="error">
            <button type="button" class="close" data-close="alert" @click="close_error"></button>
            <span>{{error}}</span>
        </div>

        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Username</label>
              <md-input v-model="username" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Password</label>
              <md-input v-model="password" type="password"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised md-primary"  @click="login">Login</md-button>
          </div>
        </div>

      </md-card-content>
    </md-card>
  </form>
</template>
<script>
import Api from '@/services/Api'

export default {
  props: {
    dataBackgroundColor: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      username: null,
      password: null,
      error: null
    }
  },
  methods: {
    async login () {
      Api().post('login', {
        username: this.username,
        password: this.password
      }).then(response => {
        this.$store.dispatch('setToken', response.data.data.attributes.token)
        this.$store.dispatch('setUser', response.data.data.attributes)
        this.$router.push('/dashboard/dashboard')
      }).catch(error => {
        console.log(error)
        this.error = error.response.data.message
      })
    },
    close_error () {
      this.error = null
    }
  }
}
</script>
