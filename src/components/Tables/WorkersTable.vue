<template>
  <div>
    <md-table v-model="workers" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="First Name">{{ item.first_name }}</md-table-cell>
        <md-table-cell md-label="Last Name">{{ item.last_name }}</md-table-cell>
        <md-table-cell md-label="Email">{{ item.address }}</md-table-cell>
        <md-table-cell md-label="Username">{{ item.date_employed | moment("ll")}}</md-table-cell>
        <md-table-cell md-label="">
          <md-button class="md-just-icon md-simple md-primary">
            <md-icon>edit</md-icon>
            <md-tooltip md-direction="top">Edit</md-tooltip>
          </md-button>
          <md-button class="md-just-icon md-simple md-danger">
            <md-icon>close</md-icon>
            <md-tooltip md-direction="top">Close</md-tooltip>
          </md-button></md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import Api from '@/services/Api'

export default {
  name: 'workers-table',
  props: {
    tableHeaderColor: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      selected: [],
      workers: []
    }
  },
  created () {
    Api().get('workers').then(response => {
      this.workers = response.data
    }).catch(error => {
      this.error = error.response.data.message
    })
  }
}
</script>
