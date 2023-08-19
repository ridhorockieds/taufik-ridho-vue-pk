import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme:{
        themes:{
            light:{
                primary: '#4CAF50',
                secondary: '#b0bec5',
                accent: '#8c9eff',
                error: '#F44336',
                success: '#64B5F6',
                warning: '#ff9800',
                info: '#2196f3',
            },
            dark:{
                primary: '#4CAF50',
                secondary: '#dcdcdc',
                accent: '#8c9eff',
                error: '#F44336',
                success: '#64B5F6',
                warning: '#ff9800',
                info: '#2196f3',
            }
        }
    }
});
