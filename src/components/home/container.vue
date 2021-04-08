<template>
  <container fluid >
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
      margin-left="200px"
      rounded>
      
    
    </v-autocomplete>
   
 
  <v-carousel height="600px">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
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
          src="https://images.pexels.com/photos/1267697/pexels-photo-1267697.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
         
        ></v-img>
          
        </v-card>
      </v-col>
    </v-row>
    <v-row
      class="mb-6"
      no-gutters>
        
           </v-row>
           <v-btn dark fab bottom color="blue" small :href="`https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`" target="_blank">
          <v-icon>mdi-facebook</v-icon>
        </v-btn>
     </v-container>
    
   
  </container>
  

 
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://images.pexels.com/photos/1267697/pexels-photo-1267697.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          },
          {
            src: 'https://i.pinimg.com/originals/d4/49/da/d449da75691ce2c50d47c57ea9c477a2.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
      }
    },
  }
</script>

<style>
.container{
    display: contents;
    margin-bottom:0px;
    margin-top: 5px;
    max-width: 100%;
    max-height: 10%;
    
}
.search-bar {
  position: absolute;
  top: 100px;
  z-index: 1;
  text-align: center;
  width:60%;
  left: 270px;
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
   

.container.div.v-text-field.v-text-field--enclosed {
    margin: 0;
    padding: 0;
    margin-left: 250px;
    margin-top:300px;
}


</style>