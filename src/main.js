import Vue from "vue";
import Vuelidate from 'vuelidate'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import dateFilter from "@/filters/date.filter";
import messagePlugin from '@/utils/message.plugin'
import "materialize-css/dist/js/materialize.min";
import "./registerServiceWorker";

import firebase from "firebase";
import 'firebase/auth';
import 'firebase/database';

Vue.config.productionTip = false;

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter("date", dateFilter);

const firebaseConfig = {
  apiKey: "AIzaSyBdMC_b5aN8yNxgDFFjnzIi6wNVebA2eN0",
  authDomain: "vue-crm-course-b8ece.firebaseapp.com",
  databaseURL: "https://vue-crm-course-b8ece.firebaseio.com",
  projectId: "vue-crm-course-b8ece",
  storageBucket: "vue-crm-course-b8ece.appspot.com",
  messagingSenderId: "309948065925",
  appId: "1:309948065925:web:3296cf97598c625a2a61ec"
};

firebase.initializeApp(firebaseConfig)

let app ;

firebase.auth().onAuthStateChanged(()=>{
  if(!app){
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }


})
