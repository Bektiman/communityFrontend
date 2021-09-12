<template>
  <v-app>
    <Navbar/>
    <v-main class="white">
        <router-view>

      </router-view>
      
    </v-main>
  </v-app>
</template>

<script>
  import Navbar from '@/components/Navbar'

  export default {
    name: 'App',
    components : {Navbar},
    data() {
      return {

      }
    }
    
  }
</script>

<style lang="scss" scoped>

</style>