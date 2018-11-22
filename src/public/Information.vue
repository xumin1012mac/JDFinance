<template>
    <Panel title="公司信息" :class="$style.panel">
      <ul :class="$style.content">
        <li>Copyright © 2004-2018 京东JD.com 版权所有</li>
        <li>投资有风险，购买需谨慎</li>
        <li>京东金融平台服务协议</li>
        <li>京东金融隐私政策</li>
      </ul>
    </Panel>
</template>


<script>
    import Panel from "../JS/Panel";
    export default {
      components: {Panel}
    }
</script>

<style lang="scss" module>
  @import "../assets/element";
  .panel {
    @include panel(#f5f5f5);
    margin-bottom: 120px;
    &>h4 {
      display: none;
    }
    li {
      /*height: 86px;*/
      width: 100%;
      font-size: 24px;
      line-height: 38px;
      border-top: 1px solid #DDD;
      text-align: center;
      padding: 24px 32px;
      box-sizing: border-box;
      color: #999;
      }
  }

</style>
