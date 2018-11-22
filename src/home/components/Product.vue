<template>
    <Panel title="新品推荐" :class="$style.panel">
      <section :class="$style.content">
        <div :class="more">更多尖货&nbsp;></div>
        <Slider :options="options" :items="items" :cname="product-slider"></Slider>
      </section>

    </Panel>
</template>


<script>
  import Panel from "../../JS/Panel";
  import Slider from "../../JS/Slider";
  export default {
    components: {Slider, Panel},
    data (){
      return {
        items:[
          {
            href:'/',
            src:"https://img12.360buyimg.com/jrpmobile/jfs/t25891/268/2097181035/42657/b8584396/5bc43fd0Nac95eb04.jpg?width=335&amp;height=421"
          },{
          href:'/',
          src: 'https://img12.360buyimg.com/jrpmobile/jfs/t27892/325/1984931380/71410/61ed8546/5bf24deeNf7457c6f.jpg?width=335&height=421'
          },{
          href:'/',
          src: 'https://img12.360buyimg.com/jrpmobile/jfs/t24958/177/2070925579/46278/53db97cc/5bc43fedNc8cfd19d.jpg?width=335&height=421'
          },{
            href:'/',
            src:'https://img12.360buyimg.com/jrpmobile/jfs/t26968/61/1274056827/41076/5bdf947c/5bc43fdeN03255b3a.jpg?width=335&height=421'
          },
        ],
        options:{
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          slidersPerview: 2.3,
          spaceBetween: 30,
          freeMode: true,
        }
      }
    }
  }
</script>
<!--因为这里是第三方样式，如果写module 就不能获取到 .swiper-container-->
<style lang="scss">
  .product-slider{
    .swiper-container{
      box-sizing: border-box;
      padding: 0 24px;
      .swiper-slide{
        a{
          display: inline-block;
          width: 100%;
          img{
            width: 100%;
            display: block;
            height: 314px;
            border: 1px solid #fafafa;
          }
        }
      }
    }
  }
</style>

<style lang="scss" module>
  @import "../../assets/element.scss";
  .panel {
    @include panel;
    .content{
      position: relative;
      padding-bottom: 40px;
      &>div {
        position: absolute;
        font-size: 28px;
        color: #999;
        right: 22px;
        top: -70px;
      }
    }
  }
</style>
