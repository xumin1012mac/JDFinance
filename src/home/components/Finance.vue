<template>
    <Panel title="理财精选" :class="$style.panel">
      <section :class="$style.content">
            <div :class="$style.item" v-for="(item,index) of items" :key="index">
              <h4>{{item.title}}<span :class="$style.red">{{item.feature}}</span></h4>
              <p :class="$style.value">{{item.value}}</p>
              <p :class="$style.desc">{{item.desc}}</p>
            </div>
      </section>

    </Panel>
</template>


<script>
  import Panel from "../../JS/Panel";
  export default {
    components: {Panel},
    data() {
      return {
        items : [
          {
            title: '长乐盈',
            feature: '180天可质押',
            value: '5.80%',
            desc: '近1年历史年化投资回报率'
          },{
            title: '京智0号',
            feature: '大数据赋能',
            value: '6.00%',
            desc: '近1月历史年化投资回报率'
          },{
            title: '建信养老飞益鑫',
            feature: '1000起投',
            value: '4.57%',
            desc: '近7日年化收益'
          },{
            title: '小白基金',
            feature: '超短期',
            value: '4.50%',
            desc: '近7日年化收益'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" module>
  @import "../../assets/element.scss";

  .panel {
    @include panel;
    .content {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      height: 436px;
      width: 100%;
      .item {
        position: relative;
        width: 50%;
        height: 50%;
        padding-left: 32px;
        box-sizing: border-box;
       /* background: lightblue;*/
        /*border: 1px solid #F04752;*/
        /*text-align: center;*/
        &:after {
          content: '';
          width: 1px;
          height: 136px;
          display: block;
          position: absolute;
          top: 50%;
          right: 0;
          margin-top: -68px;
          border: 1px solid #eee;
        }
        &:nth-child(2n) {
          &:after {
            display: none;
          }
        }
        &:first-child, &:nth-child(2){
          border-bottom: 1px solid #eee;
        }
        h4{
          font-size: 26px;
          line-height: 40px;
          color: #333;
          font-weight: 700;
          margin: 34px 0 16px;
        }
        .red {
          color: #F04752;
          border: 1px solid #F04752;
          padding: 0 8px;
          margin: 0 8px;
          font-weight: 400;
        }
        .value {
          font-weight: 700;
          font-size: 44px;
          height: 58px;
          line-height: 58px;
          color: #FF5155;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        .desc {
          font-size: 24px;
          height: 34px;
          line-height: 34px;
          color: #999;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }
  }


</style>
