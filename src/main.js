import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
Vue.prototype.merge=function(url,params){
        url += "?";
        if (!url) {
            return null;
        }
        for (var pname in params) {
            url += "&" + pname + "=" + params[pname];
        }
        url = url.replace("?&", "?");
        return url;
    
}