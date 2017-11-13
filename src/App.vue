<template>
  <div id="app">
    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <router-view class="router"/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
  	return {
//		staticUrl: 'http://img.cctvshow.com/pxj//images/'
  	}
  }
}
</script>

<style>
@import './stylesheets/reset.css';
@import './styleSheets/animate.css';
@import './styleSheets/swiper.min.css';

.router{
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
</style>
