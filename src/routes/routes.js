import DashboardLayout from '@/pages/Layout/DashboardLayout.vue'
import LoginLayout from '@/pages/Layout/LoginLayout.vue'

import Dashboard from '@/pages/Dashboard.vue'
import Users from '@/pages/Users.vue'
import Projects from '@/pages/Projects.vue'
import Workers from '@/pages/Workers.vue'
import Inventory from '@/pages/Inventory.vue'
import Items from '@/pages/Items.vue'
import Suppliers from '@/pages/Suppliers.vue'
import UserSettings from '@/pages/UserSettings.vue'
// import TableList from '@/pages/TableList.vue'
// import Typography from '@/pages/Typography.vue'
// import Icons from '@/pages/Icons.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginLayout
  },
  {
    path: '/dashboard',
    component: DashboardLayout,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: 'users',
        name: 'Users',
        component: Users
      },
      {
        path: 'projects',
        name: 'Projects',
        component: Projects
      },
      {
        path: 'workers',
        name: 'Workers',
        component: Workers
      },
      {
        path: 'inventory',
        name: 'Inventory',
        component: Inventory
      },
      {
        path: 'items',
        name: 'Items',
        component: Items
      },
      {
        path: 'suppliers',
        name: 'Suppliers',
        component: Suppliers
      },
      {
        path: 'settings',
        name: 'Settings',
        component: UserSettings
      }
      // {
      //   path: 'table',
      //   name: 'Table List',
      //   component: TableList
      // },
      // {
      //   path: 'typography',
      //   name: 'Typography',
      //   component: Typography
      // },
      // {
      //   path: 'icons',
      //   name: 'Icons',
      //   component: Icons
      // }
    ]
  }
]

export default routes
