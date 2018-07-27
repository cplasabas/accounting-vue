<template>
  <div>
    <md-table v-model="inventory" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Item Name">{{ item.item.name }}</md-table-cell>
        <md-table-cell md-label="On Stock">{{ item.on_stock }}</md-table-cell>
        <md-table-cell md-label="Last Updated">{{ item.updatedAt | moment("ll") }}</md-table-cell>
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
  name: 'inventory-table',
  props: {
    tableHeaderColor: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      selected: [],
      inventory: []
    }
  },
  created () {
    Api().get('inventory').then(response => {
      this.inventory = response.data
      console.log(response.data)
    }).catch(error => {
      this.error = error.response.data.message
    })
  }
}
</script>
