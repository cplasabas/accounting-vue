<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="primary">
            <h4 class="title">Workers</h4>
            <p class="category">List of Workers</p>
          </md-card-header>
          <md-card-content>
            <workers-table table-header-color="primary"></workers-table>
          </md-card-content>
        </md-card>
      </div>

      <!-- <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card class="md-card-plain">
          <md-card-header data-background-color="primary">
            <h4 class="title">Table on Plain Background</h4>
            <p class="category">Here is a subtitle for this table</p>
          </md-card-header>
          <md-card-content>
            <ordered-table></ordered-table>
          </md-card-content>
        </md-card>
      </div> -->
    </div>
  </div>
</template>

<script>
import {
  WorkersTable
} from '@/components'

export default{
  components: {
    WorkersTable
  }
}
</script>
