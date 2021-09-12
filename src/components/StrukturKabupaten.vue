<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4">
        <v-autocomplete rounded class="white" label="Badan Pusat Statistik">
        </v-autocomplete>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="12" md="4" order-sm="12">
        <v-text-field
          class="white"
          rounded
          label="Cari Pegawai"
          placeholder="nama/nip"
        ></v-text-field>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="12" md="4" class="px-15">
        <v-card
          flat
          rounded="lg"
          class="text-sm-center align-content-center justify-center"
        >
          <v-card-title
            class="text-md-caption white--text primary justify-center"
          >
            Kepala BPS Kota</v-card-title
          >
          <v-avatar
            class="my-5 justify-center"
            color="primary"
            rounded
            size="130"
          >
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            ></v-img>
          </v-avatar>
          <v-divider></v-divider>

          <div class="grey lighten-2 align-center justify-center">
            <div>
              <v-text class="text-md-caption"> Nama </v-text>
            </div>
            <div>
              <v-text class="text-md-caption"> NIP </v-text>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mt-5 justify-center" >
      <v-col v-for="n in 30" :key="n" cols="12" sm="2" class>
        <v-card
          flat
          rounded="lg"
          class="text-sm-center align-content-center justify-center"
        >
          <v-card-title
            class="text-md-caption white--text primary justify-center"
          > 
            </v-card-title
          >
          <v-avatar
            class="my-5 justify-center"
            color="primary"
            rounded
            size="110"
          >
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            ></v-img>
          </v-avatar>
          <v-divider></v-divider>

          <div class="grey lighten-2 align-center justify-center">
            <div>
              <v-text class="text-md-caption"> Nama </v-text>
            </div>
            <div>
              <v-text class="text-md-caption"> NIP </v-text>
            </div>
            <div>
              <v-text class="text-md-caption"> Fungsional </v-text>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    selectedItem: 1,
    items: [
      { text: "Nama1", icon: "mdi-clock" },
      { text: "Nama2", icon: "mdi-clock" },
      { text: "Nama3", icon: "mdi-clock" },
      { text: "Nama4", icon: "mdi-clock" },
      { text: "Nama5", icon: "mdi-clock" },
      { text: "Nama6", icon: "mdi-clock" },
    ],
  }),
};
</script>