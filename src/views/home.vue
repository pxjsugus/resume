<template>
  <div class="index">
      <img class="bg" :src="`${res}images/bg/bg_13.jpg`" alt="">
      <section>
          <router-link to="/carousel">
              <div class="round">CAROUSEL</div>
          </router-link>
          <router-link to="/simple">
              <div class="round">SIMPLE</div>
          </router-link>
      </section>
  </div>
</template>

<script>
import gd from '@/config'
export default {
  name: 'index',
  data () {
      return {
				res: gd.staticUrl
      }
  },
  mounted () {
//	console.log(this.res)
  }
}
</script>

<style lang="scss" scoped>

.bg{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: blur(10px);
    object-fit: cover;
}
section{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    a{
        text-decoration: none !important;
    }
    .round{
        width: 8rem;
        height: 8rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #ffffff;
        border-radius: 10rem;
        border: solid .3rem #383E4A;
        color :#383E4A;
        font-size: 1rem;
        
        -webkit-transition: all .3s;
                transition: all .3s; 
        &:hover{
        	border: solid .5rem #383E4A;
            -webkit-transform: scale(1.3);
                    transform: scale(1.3);
            -webkit-transition: all .3s;
                    transition: all .3s;        
        }
    }
}
</style>
