<template>
  <Panel title="导航栏" :class="$style.panel">
    <ul :class="$style.content" >
     <router-link tag="li" :to="item.href" :class="$style.item" v-for="item of items" :key="item.id">
         <img :src="item.src">
         <p>{{item.desc}}</p>
     </router-link>
    </ul>
  </Panel>
</template>


<script>
  import Panel from "../JS/Panel";
  export default {
    name: 'Navigation',
    components: {Panel},
    data () {
      return {
        items: [
          {
            id:'0001',
            href:'/',
            src: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/8325/8/4331/3095/5bda5c89E1be47c14/47b6a296683a12a5.png?width=90&amp;height=90',
            desc:'首页'
          },{
            id:'0002',
            href:'/money',
            src: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/1890/15/14183/1269/5bda5c97E34734b01/241a0f5b17fd3e51.png?width=60&amp;height=60',
            desc:'赚钱'
          },{
            id:'0003',
            href:'/borrow',
            src: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/5291/40/14133/594/5bda5ca3E92d0e800/09ac81fa5a5c96ef.png?width=60&amp;height=60',
            desc:'借钱'
          },{
            id:'0004',
            href:'/raise',
            src: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/3358/38/14064/816/5bda5cabEcb7eca8b/9bb064f1cda7ceba.png?width=60&amp;height=60',
            desc:'省钱'
          },{
            id:'0005',
            href:'/vip',
            src: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/7491/15/4277/926/5bda5cb9E421a0e60/89ee14ce9daf4aab.png?width=60&amp;height=60',
            desc:'金融会员'
          },
        ]
      }
    }
  }
</script>

<style lang="scss" module>
  @import "../assets/element.scss";
  .panel {
    @include panel;
    &>h4 {
      display: none;
    }
    .content {
      z-index: 99;
      position: fixed;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      height: 100px;
      right: 0;
      left: 0;
      bottom: 0;
      text-align: center;
      li {
        width: 20%;
        background: white;
        box-sizing: border-box;
        img {
          height: 44px;
          width: 44px;
          margin: 12px auto 6px;
        }
        p {
          font-size: 24px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          color: #B1B4BB;
        }
      }

    }
  }
</style>
