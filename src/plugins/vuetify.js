import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
// src/plugins/vuetify.js

import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader





Vue.use(Vuetify);

export default new Vuetify({

    theme: {

       
        themes: { 

            
            light: {
                primary: '#EF9A9A',
                secondary: 'Green',
                accent: '#8c9eff',
                error: '#F44336',
                
                menu_color: '#ED957F',

                color_searchbar: '#bbc8ce',
                footer_color:'#ED957F',
                

            },
            icons: {
                iconfont: 'mdi', // default - only for display purposes
            },
            


        },
    },

});


