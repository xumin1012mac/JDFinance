<template>
  <article class="">
    <slider :items="items" :cname="$style.slider"></slider>

    <section :class="$style.list">
      <div :class="$style.item" v-for="item of enters" :key="item.href">
        <router-link to="item.href">
          <img :src="item.src" :alt="item.title"/>
          <h4>{{item.title}}</h4>
        </router-link>
      </div>
    </section>
  </article>
</template>


<script>
  import Slider from "../../JS/Slider";
  export default {
    name: 'HomeSlider',
    components: {Slider},
    data() {
      return {
        /*抽象定义的 slider 模板中就是循环items数组，为保持一致*/
        items: [
          {
            href: '/',
            src: 'https://img12.360buyimg.com/jrpmobile/jfs/t25078/90/2556237720/38676/679449d/5be957eeN02d78c18.jpg?width=750&height=320'
          },{
            href: '/',
            src: 'https://img12.360buyimg.com/jrpmobile/jfs/t29311/7/144758099/82184/778eeafd/5be94f53N6885ac13.jpg?width=750&height=320'
          },
        ],
        enters: [
          {href: '/',
           src: 'https://img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132',
           title: '优惠券'
          },{
            href: '/',
            src: 'https://img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132',
            title: '领福利'
          },{
            href: '/',
            src: 'https://img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132',
            title: '抢钢镚'
          },{
            href: '/',
            src: 'https://img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135',
            title: '白条提额'
          },{
            href: '/',
            src: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/520/34/950/3686/5b9239e3Eaaf5465c/8d8c35badacfc114.png?width=90&height=90',
            title: '工资理财'
          },{
            href: '/',
            src: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/1216/39/659/4516/5b923b1cE5943d1c6/dabaf8b842f57eb9.png?width=90&height=90',
            title: '众筹'
          },{
            href: '/',
            src: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/3924/28/657/3552/5b9240dbE60256c31/78b52d5ab675f800.png?width=90&height=90',
            title: '租房'
          },{
            href: '/',
            src: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/479/25/929/9198/5b9243aaE826fc97b/37ef0a7cdfd24238.png?width=120&height=120',
            title: '电影票'
          }]
      }
    }
  }
</script>

<style lang="scss" module>
  @import "../../assets/element.scss";
  .slider {
    margin-top: 120px;
    img {
      width: 100%;
    }
  }
  .list {
    @include list(row);
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-around;
    background: white;
    a {
      text-decoration: none;
    }
    .item {
      width: 25%;
      padding: 40px 0;
      text-align: center;
      img {
        /*display: inline-block;*/
        height: 90px;
        width: 90px;
      }
      h4 {
        font-size: 26px;
        margin-top: 12px;
        color: #666;
      }
    }

  }
</style>
