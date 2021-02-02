<template>
  <v-app>
    <v-navigation-drawer
      v-if="isCurrentPathInNavListItems"
      v-model="navDrawerOpen"
      app
      clipped
      :expand-on-hover="!$vuetify.breakpoint.mobile"
      :permanent="!$vuetify.breakpoint.mobile"
      :touchless="!$vuetify.breakpoint.mobile"
    >
      <v-list dense>
        <v-list-item v-for="(item, i) in navListItems" :key="`navListItems-${i}`" :to="item.path">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app clipped-left color="light-blue accent-2" dark dense>
      <template v-if="isCurrentPathInNavListItems">
        <v-app-bar-nav-icon
          v-if="$vuetify.breakpoint.mobile"
          @click.stop="navDrawerOpen = !navDrawerOpen"
        />
        <v-icon v-else class="ml-n3" style="width: 48px; height: 48px">
          mdi-{{ $store.state.app.icon }}
        </v-icon>
      </template>
      <v-btn v-else icon @click="$router.back()">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title class="pl-0">{{ $store.state.app.name }}</v-toolbar-title>
      <v-spacer />
      <v-menu v-model="appMenuOpen" left offset-y transition="slide-y-transition">
        <template #activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list dense>
          <v-list-item @click="$vuetify.theme.dark = !$vuetify.theme.dark">
            <v-list-item-icon>
              <v-icon>
                mdi-{{ !$vuetify.theme.dark ? 'weather-night' : 'white-balance-sunny' }}
              </v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              Theme: {{ `${!$vuetify.theme.dark ? 'Dark' : 'Light'}` }}
            </v-list-item-title>
          </v-list-item>
          <about-dialog v-model="aboutDialogOpen" @input="$event ? null : (appMenuOpen = false)">
            <template #activator="{ on, attrs }">
              <v-list-item v-bind="attrs" v-on="on">
                <v-list-item-icon>
                  <v-icon>mdi-information</v-icon>
                </v-list-item-icon>
                <v-list-item-title>About</v-list-item-title>
              </v-list-item>
            </template>
          </about-dialog>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-main>
      <transition name="fade" mode="out-in">
        <router-view style="height: calc(100vh - 48px)" />
      </transition>
    </v-main>
    <v-overlay v-model="requesting">
      <v-progress-circular indeterminate size="64" />
    </v-overlay>
  </v-app>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.5, 1);
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

<script>
import Vue from 'vue';

import AboutDialog from '@/components/App/AboutDialog';
import extensions from '@/mixins/extensions';

export default Vue.extend({
  name: 'App',
  components: { AboutDialog },
  mixins: [extensions],
  data: () => ({
    navListItems: [
      {
        title: 'Home',
        path: '/',
        icon: 'mdi-home',
      },
      {
        title: 'Profile',
        path: '/profile',
        icon: 'mdi-account',
      },
      {
        title: 'Explore',
        path: '/explore',
        icon: 'mdi-apps',
      },
      {
        title: 'Log Out',
        path: '/logout',
        icon: 'mdi-exit-to-app',
      },
    ],
    navDrawerOpen: false,
    appMenuOpen: false,
    aboutDialogOpen: false,
    requesting: false,
  }),
  computed: {
    isCurrentPathInNavListItems() {
      return this.navListItems.map((item) => item.path).includes(this.$route.path);
    },
  },
});
</script>
 