<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" md="3">
        <v-autocomplete rounded class="white" label="Badan Pusat Statistik">
        </v-autocomplete>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="12" sm="6" md="3">
        <v-text-field
          class="white"
          rounded
          label="Cari Pegawai"
          placeholder="nama/nip"
        ></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>