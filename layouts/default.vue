<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >

          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>

        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    
    <!-- title bar -->
    <v-toolbar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-toolbar-side-icon @click="drawer = !drawer" />
      
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-toolbar>
    <!-- end title bar -->

    <!-- main content -->
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <!-- ends main content -->
    <!-- footer page -->
  
    <v-footer
      :fixed="fixed"
      app
      height="auto"
    >
    <v-card
      class="flex dark lighten-1 white--text"
      flat
      tile

    >
      <v-card-title>
        <v-layout row wrap>
          <v-flex xs4>
            <strong class="subheading">Get connected</strong> 
          </v-flex>
          <v-flex xs2>
              <a href="https://www.linkedin.com/in/suleolanrewaju/"><fa :icon="fab.faLinkedin"  class="mx-4 fa-2x"/></a> 
          </v-flex>
          <v-flex xs2>
            <a href="https://medium.com/@suleabimbola/"><fa :icon="fab.faMedium"  class="mx-4 fa-2x"/></a>
          </v-flex>
          <v-flex xs2>
            <a href="https://twitter.com/lanromanero"><fa :icon="fab.faTwitter"  class="mx-4 fa-2x"/></a>
          </v-flex>
          <v-flex xs2>
            <a href="https://github.com/larrysul"><fa :icon="fab.faGithub"  class="mx-4 fa-2x"/></a>
          </v-flex>
        </v-layout>  

      </v-card-title>
    </v-card>
  </v-footer>

    <!-- ends footer -->
  </v-app>
</template>
<style>
  a{
    color:#fff
  }
</style>

<script>
import {fab} from '@fortawesome/free-brands-svg-icons'


export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'arrow_forward_io',
          title: 'Latest News',
          to: '/news'
        },
        {
          icon: 'arrow_forward_io',
          title: 'About App',
          to: '/about'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Top Headlines'
    }

  },
  computed: {
    fab () {
         return fab
      }
  }
}
</script>
