require('./bootstrap');

// window.Vue = require('vue');

// var $ = require('jquery');
import $ from 'jquery';
window.$ = window.jQuery = $;

import Vue from 'vue';
import Albums from './Albums.vue';

Vue.component('albums', Albums);

const app = new Vue({
  el: "#app"
});

//TEST ALBUMS OLD
// import AlbumsOld from './AlbumsOld.vue';

// Vue.component('albums-old', AlbumsOld);
// const app = new Vue({
//   el: "#app"
// });

// const app = new Vue({
//   el: "#app",
//   components: { Albums }
// });

function init() {
  // // new Vue({
  //   el: "#app"
  // });

  console.log('hello world');

  $('.header').on('click', function() {
    console.log('header clicked');
  });

};

$(document).ready(init);