<template>

  <v-app app class ="secondary"
  >
  
    <v-app-bar app class="red lighten-3" dark>
      <v-tool-bar-title>NEED-U</v-tool-bar-title>
      <v-spacer> </v-spacer>
      <v-tab to="/">
      <v-btn  text rounded style="font-weight: bold">Home</v-btn>
      </v-tab>
      <v-spacer> </v-spacer>
      <v-tab to="/apropos">
      <v-btn text rounded style="font-weight: bold"> A propos</v-btn>
      </v-tab>
      <v-spacer> </v-spacer>
      <v-tab to="/actu">
        <v-btn text rounded style="font-weight: bold">Actualités</v-btn>
<<<<<<< HEAD
      </v-tab>      <v-spacer> </v-spacer>
=======
         </v-tab>   
         <v-spacer> </v-spacer>
        
>>>>>>> cc7a62467f39aa602b0a97c12b642c481b0b6ac9
      <v-tab to="/contact">
        <v-btn text rounded style="font-weight: bold">Contact</v-btn>
      </v-tab>
      <v-spacer> </v-spacer>
      <v-btn icon prepend-icon="mdi-account-cercle">
        <v-icon light> mdi-heart </v-icon>
      </v-btn>
      <v-btn icon prepend-icon="mdi-account-cercle">
        <v-icon rounded> mdi-account </v-icon>
      </v-btn>
      <v-tab to="/login">
      <v-btn text rounded>Login</v-btn>
      </v-tab>
    </v-app-bar>

    <v-container class="test">
      <router-view></router-view>
    </v-container>
<<<<<<< HEAD

    <v-autocomplete
      v-model="model"
      :items="items"
      :loading="isLoading"
      :search-input.sync="search"
      chips
      clearable
      hide-details
      hide-selected
      prepend-icon="mdi-magnify" 
      item-text="name"
      item-value="symbol"
      label= " Search for a friend..." 
      solo
      class="search-bar"
      position="absolute"
      background-color="#bbc8ce"
      rounded
     
      
    
    
    >
      
      >
      <v-btn icon prepend-icon="mdi-account-cercle">
        <v-icon  dark rounded> mdi-account </v-icon>
      </v-btn>
    
    </v-autocomplete>
    <v-avatar>
      <img
        src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
        alt="John"
        width="200px"
      >
    </v-avatar>
    
=======
>>>>>>> cc7a62467f39aa602b0a97c12b642c481b0b6ac9

   

    


     

    <v-footer class="footer_color" light padless>
      <v-card flat tile class="red lighten-3 white--text text-center">
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
           
           
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
          Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
          accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim
          a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula
          lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus
          iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum
          tempor vel ut orci. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>WAJIH</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>

</template>

<script>

export default {
  name: "App",
  

  data: () => ({
    date: '2018-03-02',

    
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
  methods:{
    allowedDates: val=> parseInt(val.split('-')[2], 10)% 2 ===0,
  
},

};

</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap');


.v-btn{
  font-family: 'Architects Daughter', cursive;}

</style>