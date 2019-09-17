import Vue from 'vue';
import App from './App';
import 'lib-flexible';
import 'normalize.css';
import './app.scss';
import 'font-awesome/css/font-awesome.css';

new Vue({
  render: h => h(App)
}).$mount("#app");