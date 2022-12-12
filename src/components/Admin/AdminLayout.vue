<template>
  

  
  <v-app id="inspire">
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-img class="ml-auto" max-height="48" max-width="48" src="../../../public/img/icons/ms-icon-310x310.png"></v-img>
      <v-toolbar-title>Caudex</v-toolbar-title>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-avatar color="grey darken-1 shrink" size="32" class="ml-auto" v-on="on"></v-avatar>
        </template>
        <v-list>
          <p class="text-center mt-2 mb-4">Nama Pengguna</p>
          <p class="text-center mb-2">Administrator</p>
          <v-divider/>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-cog</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Settings</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item v-for="navigationDrawerItem in navigationDrawerItems" link tag="router-link" :to="navigationDrawerItem.to">
          <v-list-item-icon>
            <v-icon>{{ navigationDrawerItem.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ navigationDrawerItem.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'AdminLayout',
  data: () => ({
    drawer: null,
    navigationDrawerItems: [
      { icon: 'mdi-home', text: 'Dashboard', to: '/Admin/Dashboard'},
      { icon: 'mdi-account', text: 'Users', to: '/Admin/Users' },
      { icon: 'mdi-book', text: 'Books', to: '/Admin/Books' },
      { icon: 'mdi-cash', text: 'Subscriptions', to: '/Admin/Subscriptions' },
      { icon: 'mdi-chart-box', text: 'Analytics', to: '/Admin/Analytics' }
    ],
  })
}
</script>