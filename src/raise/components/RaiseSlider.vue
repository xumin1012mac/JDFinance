<template>
    <Panel title="竖向slider" :class="$style.panel">
      <div :class="$style.container">
        <swiper :options="options">
          <swiper-slide>百万白条券免费送，速来领取！！ <em>></em> </swiper-slide>
          <swiper-slide>签到领流量，1元500M！<em>></em> </swiper-slide>
        </swiper>
      </div>
    </Panel>
</template>


<script>
  import Panel from "../../JS/Panel";
  import Slider from "../../JS/Slider";
  export default {
    components: {Slider, Panel},
    data() {
      return {
        options: {
          autoplay: true,
          loop: true,
          direction: "vertical"
        }
      }
    }
  }
</script>

<style lang="scss">
  .swiper-container-vertical{
    height: 72px;
    .swiper-slide{
      font-family: PingFangSC-Medium;
      font-size: 28px;
      color: #333;
      em{
        color: #ddd;
        float: right;
        margin-right: 20px;
      }
    }
  }
</style>

<style lang="scss" module>
  @import "../../assets/element.scss";
  .panel {
    @include panel;
    margin-top: 120px !important;
    >h4 {
      display: none;
    }
    .container {
      height: 72px;
      line-height: 72px;
      overflow: hidden;
      padding-left: 178px;
      background: url(//m.jr.jd.com/spe/qyy/main/images/scroll_title_img.png) left top no-repeat;
    }
  }
</style>
