<template>

  <v-app app class ="secondary"
  >
  
    <v-app-bar app class="red lighten-3" dark>
      <v-tool-bar-title>NEED-U</v-tool-bar-title>
      <v-spacer> </v-spacer>
      <v-btn to='"/contact"' text rounded style="font-weight: bold">Home</v-btn>
      <v-spacer> </v-spacer>
      <v-btn text rounded style="font-weight: bold"> A propos</v-btn>
      <v-spacer> </v-spacer>
      <v-tab to="/actu">
        <v-btn text rounded style="font-weight: bold">Actualités</v-btn>
      </v-tab>      <v-spacer> </v-spacer>
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
      <v-btn text rounded>Login</v-btn>
    </v-app-bar>

    <v-container class="test">
      <router-view></router-view>
    </v-container>

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
    

    <v-carousel height="700px">
      <v-carousel-item
        position="top"
        height="100%"
        witdh="100%"
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
      </v-carousel-item>
    </v-carousel>


     <v-container class="grey lighten-5">
    <v-row
      class="mb-6"
      no-gutters
    >
      <v-col md="4" ml-auto>
        <v-card
          class="pa-2"
          outlined
          tile
        >
          <h1 class="font-weight-bold">NEED-U C'EST QUOI ?</h1>
          <v-spacer></v-spacer>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas porro assumenda optio, magni beatae eveniet necessitatibus corporis ut reprehenderit dolorem totam repellendus? Pariatur error doloribus possimus quibusdam beatae est omnis nisi, corporis, impedit velit, accusantium assumenda! Ut, eos delectus quisquam incidunt necessitatibus at, ipsum, facere repellendus nam laborum sequi quod architecto labore sed quis recusandae vitae perspiciatis magni nihil optio. Optio nam id beatae commodi unde a doloribus, repellendus eos explicabo pariatur maiores doloremque expedita at! Quod accusantium expedita commodi perspiciatis, illo beatae reprehenderit, atque id quibusdam eum dolores cumque adipisci sequi porro voluptatum? Sit voluptates laboriosam laborum aspernatur error?</p>
        
        </v-card>
      </v-col>

      <v-col
        md="4"
        offset-md="4"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
         <v-img mx-auto
        justify-space-between
          contain
          position="center"
          
          max-height="300"
          max-width="500"
          src="../src/assets/images/equipe_NeedU.png"
        ></v-img>
          
        </v-card>
      </v-col>
    </v-row>
    <v-row
      class="mb-6"
      no-gutters>
        
           </v-row>
     </v-container>
     <v-container>
       <v-row>
     <v-carousel height="300px" p-b="5"
          >
  <v-card
    class="mx-auto"
    max-width="434"
    tile
  >
    <v-img
      height="100%"
      src="https://images.pexels.com/photos/1484759/pexels-photo-1484759.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    >
      <v-row
        align="end"
        class="fill-height"
      >
        <v-col
          align-self="start"
          class="pa-0"
          cols="12"
        >
          <v-avatar
            class="profile"
            color="grey"
            size="164"
            tile
          >
            <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
          </v-avatar>
        </v-col>
        <v-col class="py-0">
          <v-list-item
            color="rgba(0, 0, 0, .4)"
            dark
          >
            <v-list-item-content>
              <v-list-item-title class="title">
                Marcus Obrien
              </v-list-item-title>
              <v-list-item-subtitle>Network Engineer</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
    </v-img>
  </v-card>
   
  
  
  
  </v-carousel>
       </v-row>
   <v-row justify="center">
    <v-date-picker
      v-model="date"
      :allowed-dates="allowedDates"
      class="mt-4"
      min="2016-06-15"
      max="2018-03-20"
    ></v-date-picker>
  </v-row>
  </v-container>
  

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

    items: [
      {
        src:
           "https://images.pexels.com/photos/1267697/pexels-photo-1267697.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          
      },
      {
        src:
          "https://i.pinimg.com/originals/d4/49/da/d449da75691ce2c50d47c57ea9c477a2.jpg",
      },
    ],
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
  methods:{
    allowedDates: val=> parseInt(val.split('-')[2], 10)% 2 ===0,
  
},

};

</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap');
.search-bar {
  position: absolute;
  top: 150px;
  z-index: 1;
  text-align: center;
  width: 60%;
}
.v-text-field.v-text-field--enclosed {
  margin-left: 20%;
  margin-right: 20%;
}
.v-list-item .v-list-item__title, .v-list-item .v-list-item__subtitle {
    line-height: 1.2;
    color: pink!important;
}
.v-card > *:first-child:not(.v-btn):not(.v-chip), .v-card > .v-card__progress + *:not(.v-btn):not(.v-chip) {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    padding-bottom: 20px;
    margin-top: 40px!important;
    border:0px!important;
}
.v-application .grey.lighten-5 {
    background-color:"white"!important;
    border: 0px;
}
.container.grey.lighten-5{
  background-color: white!important;
}
.theme--light.v-sheet--outlined {
    border: 0px;
}
.h1.font-weight-bold{
  font-weight: 900;
}

.v-btn{
  font-family: 'Architects Daughter', cursive;}

</style>