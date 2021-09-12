<template>
  <div class="grey">
        <v-row>
          <v-col
            cols="12"
            sm="3"
          >
            <v-sheet
              rounded="lg"
              min-height="268"
            >
              <!--  -->
            </v-sheet>
          </v-col>

          <v-col
            cols="12"
            sm="6"
          >
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
              <!--  -->
            </v-sheet>
          </v-col>

          <v-col
            cols="12"
            sm="3"
          >
            <v-sheet
              rounded="lg"
              min-height="268"
            >
              <!--  -->
            </v-sheet>
          </v-col>
        </v-row>
        <v-container fluid>
          <v-container>
          <v-row justify="center" align="center">
           <v-col md="4" v-for="n in 1" :key="n">
          <v-card  >
              <v-sheet height="50vh">
                
              </v-sheet>
            </v-card>

        </v-col>
          
        </v-row>
        
        <v-row justify="center" align="center">
           <v-col md="4" sm ="6" xs = "12"  v-for="n in 7" :key="n">
          <v-card  >
              <v-sheet height="50vh">
                
              </v-sheet>
            </v-card>

        </v-col>
          
        </v-row>

        </v-container>
        <v-container>
          <v-row>
          <v-col md="3" v-for="n in 28" :key="n" >
            <v-card >
              <v-sheet height="30vh">
                
              </v-sheet>
            </v-card>

          </v-col>
        </v-row>

        </v-container>

        </v-container>
        
        
        
       
      </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {

};
</script>
