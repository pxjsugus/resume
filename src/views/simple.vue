<template>
  <div class="simple">
  	<div class="toggle" @click="checkControl">{{!isDown?'DOWN':'UP'}}</div>
      <div class="content" :class="{active: isDown}">
          <div class="content-left">
              <div class="content-iamge">
                  <img :src="`${res}images/sugus.jpg`" alt="">
              </div>
              <div class="content-title">彭小军</div>
              <div class="content-context">
                  <div class="content-text">一腔热血的激情</div>
                  <div class="content-text">一夜失眠的奋斗</div>
                  <div class="content-text">一个完美的追求</div>
                  <div class="content-text-large">WEB前端工程师</div>
              </div>
              <div class="content-list">
                  <div class="content-li" v-for="(item, index) in skills" :key="item">
                      <div class="content-li-left">{{item.name}}</div>
                      <div class="content-li-right">
                          <div class="content-li-right-act" :style="`width: ${100-item.num}%;`"></div>
                      </div>
                  </div>
              </div>
              <div class="content-text">我是一个充满热情、创意丰富、善于解决问题的前端工程师。希望找到能让我充分发挥这些特长的工作！ :)</div>
              <div class="content-left-footer">
                  <div class="content-left-footer-item">https://github.com/pxjsugus</div>
                  <div class="content-left-footer-item">1090510498@qq.com</div>
                  <div class="content-left-footer-item">13622378580</div>
              </div>
          </div>
          <div class="content-right">
              <div class="content-title">项目经历</div>
              <div class="content-items">
                  <div class="content-item" v-for="(item, index) in projects" :key="index">
                      <div class="content-row">
                          <div class="content-text">{{item.name}}</div>
                          <div class="content-span">
                              <span v-for="(val, key) in item.skill" :key="key">{{val}}</span>
                          </div>
                      </div>
                      <div class="content-time">{{item.time}}</div>
                      <div class="content-description">{{item.description}}</div>
                  </div>
              </div>
              <div class="content-title">实习经历</div>
              <div class="content-items">
                  <div class="content-item" v-for="(item, index) in projectsSecond" :key="index">
                      <div class="content-row">
                          <div class="content-text">{{item.name}}</div>
                          <div class="content-span">
                              <span v-for="(val, key) in item.skill" :key="key">{{val}}</span>
                          </div>
                      </div>
                      <div class="content-time">{{item.time}}</div>
                      <div class="content-description">{{item.description}}</div>
                  </div>
              </div>
              <div class="content-title">教育背景</div>
              <div class="content-items">
                  <div class="content-item">
                      <div class="content-row">
                          <div class="content-text">南昌大学鄱阳湖校区</div>
                          <div class="content-span">
                              <span>机电一体化技术</span>
                          </div>
                      </div>
                      <div class="content-time">大专</div>
                      <div class="content-time">2012年9月 至 2015年7月</div>
                      <div class="content-description">数控机床编程以及机械一体化管理</div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
	import gd from '@/config'
export default {
  name: 'simple',
  data () {
      return {
      	isDown: true,
      	res: gd.staticUrl,
          projects: [
          		{
                  name: '投票',
                  time: '2017年9月 至 2017年10月 （深圳港深亚视传媒有限公司）',
                  skill: ['vue全家桶', 'webpack', 'scss', 'nodejs'],
                  description: '商务头等舱里的一个投票活动，艺人投票，艺人打赏互动'
              },
              {
                  name: '商务头等舱',
                  time: '2017年8月 至 2017年9月 （深圳港深亚视传媒有限公司）',
                  skill: ['zepto', 'css', 'javascript'],
                  description: '商务头等舱是影视街旗下专门为高端VIP用户所定制的一个商务模块，以快速定位客户需求和顶级周到服务为路线，把服务做到行业第一位'
              },
              {
                  name: '影视街（微信小程序）',
                  time: '2017年5月 至 2017年7月 （深圳港深亚视传媒有限公司）',
                  skill: ['wxml', 'wxss', 'javascript'],
                  description: '影视街小程序版，把本平台从各个方面发扬光大，服务于更多的客户'
              },
              {
                  name: '影视街',
                  time: '2016年8月 至 2017年4月 （深圳港深亚视传媒有限公司）',
                  skill: ['zeptoJs', 'sui', 'javascript', 'css3', 'html5'],
                  description: '一个专注于艺人经济共享的平台，整合行业资源，助力艺人圆星梦，促进演艺生态圈的工业化发展，实现影视生态O2O'
              },
              {
                  name: '哆啦妈咪',
                  time: '2015年9月 至 2016年6月 （深圳云健科技有限公司）',
                  skill: ['jQuery', 'javascript', 'css', 'json'],
                  description: '最专业的母婴资讯，最丰富的母婴问答，最精彩的私密圈子，最贴心的数据管理'
              },
          ],
          projectsSecond: [
              {
                  name: 'H&M',
                  time: '2015年3月 至 2017年7月',
                  skill: ['javascript', 'css', 'php', 'mysql', 'jquery'],
                  description: '高仿H&M电商平台，用到PHP做后台，完成一个增删改成的购买商品的流程'
              }
          ],
          skills: [
              {
                  name: 'HTML',
                  num: 90
              },
              {
                  name: 'CSS',
                  num: 90
              },
              {
                  name: 'JavaScript',
                  num: 80
              },
              {
                  name: 'TypeScript',
                  num: 70
              },
              {
                  name: 'jQuery',
                  num: 80
              },
              {
                  name: 'Bootstrap',
                  num: 70
              },
              {
                  name: 'Sui.Mobile',
                  num: 80
              },
              {
                  name: 'Scss',
                  num: 80
              },
              {
                  name: 'Less',
                  num: 70
              },
              {
                  name: 'VueJs',
                  num: 80
              },
              {
                  name: 'AngularJs',
                  num: 50
              },
              {
                  name: 'ReactJs',
                  num: 50
              },
              {
                  name: 'NodeJs',
                  num: 40
              },
              {
                  name: 'PHP',
                  num: 40
              }
          ]
      }
  },
  methods: {
  	checkControl () {
  		this.isDown = !this.isDown
  	}
  }
}
</script>

<style lang="scss" scoped>


.simple{
	.toggle{
		position: fixed;
		top: 1rem;
		left: 1rem;
		height: 3rem;
		width: 3rem;
		background: radial-gradient(white 0,#383E4A 50px,rgba(255,0,0,0.5));
		background: -webkit-radial-gradient(white 0,#383E4A 50px,rgba(255,0,0,0.5));
		background: -moz-radial-gradient(white 0,#383E4A 50px,rgba(255,0,0,0.5));
		box-shadow: 0 0 10px 2px #383E4A;
		border-radius: 5rem;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #fff;
		cursor: pointer;
		z-index: 99;
		font-size: .6rem;
	}
    .content{
        width: 30rem;
        margin: 0 auto;
        display: flex;
        box-sizing: border-box;
        box-shadow: 0 0 200px 50px #808080;
        -webkit-transition: all .3s;         
                transition: all .3s;
        &.active{
        	-webkit-transform: rotateX(60deg) rotateY(0deg) rotateZ(45deg);
        					transform: rotateX(60deg) rotateY(0deg) rotateZ(45deg);
        	-webkit-transition: all .3s;         
                  transition: all .3s;
        }
        .content-left{
            position: relative;
            width: 12rem;
            background:#383E4A;
            /*padding: 1rem;*/
            .content-iamge{
                text-align: center;
                margin-top: 1rem;
                img{
                    width: 5rem;
                    height: 5rem;
                    border: solid .25rem #fff;
                    border-radius: 5rem;
                    object-fit: cover;
                }
            }
            .content-title{
                color: #ffffff;
                text-align: center;
                font-size: 1rem;
            }
            .content-context{
                text-align: center;
                padding: .25rem;
                margin: .25rem 1rem;
                border-top: solid 1px #ffffff;
                border-bottom: solid 1px #ffffff;
            }
            .content-text{
                color: #c0c0c0;
                padding: .1rem 1rem;
                font-size: .6rem;
            }
            .content-text-large{
                color: #ffffff;
                font-size: .8rem;
                padding: .25rem;
            }
            .content-list{
            	font-size: .65rem;
                .content-li{
                    color: #ffffff;
                    display: flex;
                    align-items: center;
                    .content-li-left{
                        width: 38%;
                        text-align: right;
                        margin-right: 2%;
                    }
                    .content-li-right{
                        width: 55%;
                        height: .5rem;
                        text-align: left;
                        background: #ffffff;
                        border-radius: 5rem;
                        position: relative;
                        .content-li-right-act{
                            position: absolute;
                            height: .5rem;
                            padding: 0;
                            right: 0;
                            background: #555555;
                            border-top-right-radius: 5rem;
                            border-bottom-right-radius: 5rem;
                        }
                    }
                }
            }
            .content-left-footer{
                position: absolute;
                bottom: 1rem;
                left: 0;
                width: 100%;
                .content-left-footer-item{
                	  font-size: .65rem;
                    padding: .1rem;
                    text-align: center;
                    color: #ffffff;
                }
            }
        }
        .content-right{
            width: 18rem;
            padding: 1rem;
            .content-title{
                font-size: 1rem;
            }
            .content-items{
                .content-item{
                    padding: .25rem 0;
                    .content-row{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: .5rem 0;
                        .content-span{
                            span{
                                font-size: .5rem !important;
                                padding: .25rem .5rem;
                                background: #ff8000;
                                margin: 0 .125rem;
                                color: #ffffff;
                            }
                        }
                        .content-text{
                        	font-size: .75rem;
                            color: #ff8000;
                        }
                    }
                    .content-time{
                        font-size: .5rem;
                        color: #2E7E71;
                        padding-bottom: .25rem;
                    }
                    .content-description{
                        font-size: .6rem;
                        color:#383E4A;
                    }
                }
            }
        }
    }
}
</style>
