<template>
  <div>
    <md-table v-model="projects" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Project Name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Client">{{ item.client }}</md-table-cell>
        <md-table-cell md-label="Date Started">{{ item.date_started | moment("ll") }}</md-table-cell>
        <md-table-cell md-label="Status">{{ item.status }}</md-table-cell>
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
  name: 'projects-table',
  props: {
    tableHeaderColor: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      selected: [],
      projects: []
    }
  },
  created () {
    Api().get('projects').then(response => {
      this.projects = response.data
    }).catch(error => {
      this.error = error.response.data.message
    })
  }
}
</script>
