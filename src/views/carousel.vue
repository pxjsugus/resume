<template>
  <div class="carousel">
      <div class="bgm">
          <div class="bgi">
              <img :class="{active: isPaused}" @click="toggleControl" :src="`${res}images/music_icon.png`" alt="">
          </div>
          <audio ref="myBackgroundMusic" autoplay loop :src="`${res}audio/bm.mp3`"></audio>
      </div>
      
    <swiper :options="swiper">
        <swiper-slide>
            <div class="swiper-background">
                <img :src="`${res}images/bg/bg_3.jpg`" alt="">
            </div>
            <div class="swiper-content">
                <div class="swiper-image">
                    <img :src="`${res}images/sugus.jpg`" alt="">
                </div>
                <div class="swiper-title">{{informations.name}}</div>
                <div class="swiper-description">{{informations.introduction}}</div>
                <div class="swiper-text">{{informations.job}}</div>    
                <div class="swiper-text-gray">{{informations.Email}}</div>   
                <div class="swiper-text-gray">{{informations.mobile}}</div> 
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="swiper-background">
                <img :src="`${res}images/bg/bg_13.jpg`" alt="">
            </div>
            <div class="swiper-content">
                <div class="swiper-title">熟悉的技能</div>
                <div class="swiper-items">
                    <div class="swiper-item" v-for="(item, index) in informations.skills" :key="item">{{item}}</div>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="swiper-background">
                <img :src="`${res}images/bg/bg_11.jpg`" alt="">
            </div>
            <div class="swiper-content">
                <div class="swiper-title">项目经验</div>
                <div class="swiper-list">
                    <div class="swiper-li" v-for="(item, index) in informations.projects" :key="index">
                        <div class="swiper-image">
                            <img :src="item.logo" alt="">
                        </div>
                        <div class="swiper-col">
                            <a :href="item.url">
                                <div class="swiper-title">{{item.title}}</div>
                            </a>
                            <div class="swiper-description">{{item.introduction}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="swiper-background">
                <img :src="`${res}images/bg/bg_9.jpg`" alt="">
            </div>
            <div class="swiper-content">
                <div class="swiper-title">教育背景</div>
                <div class="swiper-text">{{informations.university}}</div>
                <div class="swiper-text">{{informations.profressional}}</div>
                <div class="swiper-description">{{informations.educationalLevel}}</div>    
                <div class="swiper-text-gray">{{informations.gradutionTime}}</div>  
                <div class="swiper-text-gray">{{informations.taskMessage}}</div>  
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="swiper-background">
                <img :src="`${res}images/bg/bg_15.jpg`" alt="">
            </div>
            <div class="swiper-content">
                <div class="swiper-title">目前供职</div>
                <div class="swiper-text">{{informations.company}}</div>
                <div class="swiper-text">从事web网页，微信小程序，嵌入式app网页的设计与开发</div>    
                <div class="swiper-text-gray">工作地点：深圳</div>   
                <div class="swiper-text-gray">涉及到vuejs框架，javascript，nodejs，canvas，数据可视化</div>
                <div class="swiper-text-gray">https://github.com/pxjsugus</div>
            </div>
        </swiper-slide>
        <div class="swiper-pagination swiper-pagination-white"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
	import gd from '@/config'
export default {
  name: 'carousel',
  data () {
      return {
      	  res: gd.staticUrl,
          isPaused: true,
          swiper: {
              speed: 800,
              pagination: '.swiper-pagination',
              paginationClickable: true,
              direction: 'vertical'
          },
          informations: {
              name: '彭小军',
              introduction: '一腔热血的激情 · 一夜失眠的奋斗 · 一个完美的追求',
              job: 'WEB前端工程师',
              Email: '1090510498@qq.com',
              mobile: '13622378580',
              university: '南昌大学鄱阳湖校区',
              profressional: '机电一体化技术',
              educationalLevel: '大学专科',
              gradutionTime: '2015年6月毕业',
              taskMessage: '数控机床编程以及机械一体化管理',
              company: '深圳港深亚视传媒有限公司web前端工程师',
              skills: [
                  'HTML',
                  'CSS',
                  'Less',
                  'Scss',
                  'jQuery',
                  'Bootstrap',
                  'Sui.Mobile',
                  'JavaScript',
                  'TypeScript',
                  'NodeJs',
                  'VueJs',
                  'Webpack',
                  'AngularJs',
                  'ReactJs',
                  'PHP',
                  'Mysql',
                  'MongoDB'
              ],
              projects: [
              		{
                      url: 'http://m.cctvshow.com/cctvshow-app-portal/spages/smartisan/vote/dist/index.html',
                      title: '投票',
                      logo: gd.staticUrl + 'images/singer.jpg',
                      introduction: '商务头等舱里的衍生出来的一个活动，用于艺人投票和打赏互动',
                  },
                  {
                      url: 'http://m.cctvshow.com/cctvshow-app-portal/spages/business/home.html',
                      title: '商务头等舱',
                      logo: gd.staticUrl + 'images/business.jpg',
                      introduction: '商务头等舱是影视街旗下专门为高端VIP用户所定制的一个商务模块',
                  },
                  {
                      url: '#',
                      title: '影视街(微信小程序)',
                      logo: gd.staticUrl + 'images/wxxcx.jpg',
                      introduction: '影视街小程序版，把本平台从各个方面发扬光大，服务于更多的客户',
                  },
                  {
                      url: 'http://m.cctvshow.com/cctvshow-app-portal/spages/FilmTelevision/home.html',
                      title: '影视街（web版）',
                      logo: gd.staticUrl + 'images/ysj.png',
                      introduction: '影视街是一个提供演艺从业人员在线互动社交、艺人在线邀约接工作，助力艺人圆星梦，促进演艺生态圈的工业化发展',
                      
                  },
                  {
                      url: '#',
                      title: '哆啦妈咪',
                      logo: gd.staticUrl + 'images/dlmm.png',
                      introduction: '最专业的母婴资讯，最丰富的母婴问答，最精彩的私密圈子',
                  }
              ]
          }
      }
  },
  methods: {
      toggleControl () {
          let obj = this.$refs.myBackgroundMusic
          this.isPaused = obj.paused
          if (obj.paused) {
              obj.play()
          } else {
              obj.pause()
          }
      }
  }
}
</script>

<style lang="scss" scoped>

.bgm{
    position: fixed;
    top: 2rem;
    right: 2rem;
    width: 2rem;
    height: 2rem;
    z-index: 99;
    .bgi img{
        width: 2.5rem;
        height: 2.5rem;
        background: #ffffff;
        border-radius: 5rem;
        padding: .25rem;
        cursor: pointer;
       &.active{
            -webkit-animation: rotate 5s infinite 0s linear forwards;
                    animation: rotate 5s infinite 0s linear forwards;
       }
    }
}
@-webkit-keyframes rotate{
    to{
        -webkit-transform: rotate(360deg);
    }
}
@keyframes rotate{
    to{
        transform: rotate(360deg);
    }
}
.swiper-container{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    .swiper-slide{
        .swiper-background{
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background:#383E4A;
            img{
                min-width: 100%;
                min-height: 100%;
                object-fit: cover;
            }
        }
        .swiper-content{
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            color: #ffffff;
            .swiper-image{
                img{
                    width: 5rem;
                    height: 5rem;
                    border-radius: 10rem;
                    border: solid .3rem #fff;
                    object-fit: cover;
                }
            }
            .swiper-title{
                margin: .5rem;
                font-size: 1.5rem;
                text-shadow: 0 2px 2px #ffffff !important;
            }
            .swiper-description{
                margin: .5rem;
                font-size: .7rem;
            }
            .swiper-text{
                margin: .5rem;
                font-size: 1rem;
            }
            .swiper-text-gray{
                margin: .5rem;
                font-size: .7rem;
                color: #dddddd;
            }
            .swiper-items{
                width: 60%;
                text-align: center;
                .swiper-item{
                    display: inline-block;
                    padding: .25rem .5rem;
                    background: #ff8000;
                    margin: .25rem;
                    cursor: pointer;
                    -webkit-transition: all .3s;         
                            transition: all .3s;
                    &:nth-of-type(odd):hover{
                        -webkit-transform: scale(1.4) rotate(30deg);
                                transform: scale(1.4) rotate(30deg);
                        -webkit-transition: all .3s;         
                                transition: all .3s;
                               
                    }
                    &:nth-of-type(even):hover{
                        -webkit-transform: scale(1.3) rotate(-30deg);
                                transform: scale(1.3) rotate(-30deg);
                        -webkit-transition: all .3s;         
                                transition: all .3s;
                    }
                }
            }
            .swiper-list{
                display: flex;
                flex-wrap: wrap;
                .swiper-li{
                    box-sizing: border-box;
                    flex: 50%;
                    display: inline-flex;
                    justify-content: flex-start;
                    align-items: center;
                    padding: 0 .5rem;
                    a{
                        text-decoration: none;
                        color: #ff8000;
                       
                    }
                    .swiper-title{
                        font-size: 1rem;
                        margin: 0 .5rem;
                        text-shadow: 0 0 0 #ffffff !important;
                    }
                    .swiper-image{
                        img{
                            width: 2.5rem;
                            height: 2.5rem;
                            border-radius: .25rem;
                            border: none;
                            object-fit: cover;
                        }
                    }
                    .swiper-description{
                    	font-size: .7rem;
                    	padding: 0 !important;
                    }
                }
            }
        }
    }
}
@media screen and (max-width: 900px) {
    .swiper-li{
        flex: 100% !important;
    }
}
</style>
