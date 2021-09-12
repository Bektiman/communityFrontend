<template>
  <div>
    <v-navigation-drawer mini-variant-width="20" v-model="sidebar" app class="hidden-sm-and-up primary ">
      <v-list>
        <v-list-item active-class="warning"
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
        >
          <v-list-item-content class="white--text">
              
                  {{item.title}}
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app flat class="white" >
      <span class="hidden-sm-and-up">
        <v-app-bar-nav-icon @click="sidebar = !sidebar"></v-app-bar-nav-icon>
      </span>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">
          {{ appTitle }}
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-toolbar-items class="hidden-xs-only"> -->
      <v-btn
      rounded
        text
        class="hidden-xs-only mx-4"
        active-class="primary "
        v-for="item in menuItems"
        :key="item.title"
        :to="item.path"

      >
        <!-- <v-icon left dark>{{ item.icon }}</v-icon> -->
        {{ item.title }}
      </v-btn>
      <!-- </v-toolbar-items> -->
      <v-spacer></v-spacer>
      <v-btn rounded outlined class="warning--text">Keluar</v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      appTitle: "Community",
      sidebar: false,
      menuItems: [
        { title: "Beranda", path: "/beranda", icon: "" },
        { title: "Organisasi", path: "/organisasi", icon: "" },
        { title: "Berita", path: "/berita", icon: "" },
        { title: "Ruang Baca", path: "/ruang-baca", icon: "" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>