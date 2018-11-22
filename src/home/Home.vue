<template>
  <div class="hello">
    <public-header></public-header>
    <home-slider></home-slider>
    <finance></finance>
    <product></product>
    <information></information>
    <navigation></navigation>
  </div>
</template>

<script>
  import PublicHeader from '../public/Header'
  import HomeSlider from './components/Slider'
  import Finance from './components/Finance'
  import Product from './components/Product'
  import Information from '../public/Information'
  import Navigation from '../public/Navigation'
  export default {
    name: 'Home',
    components: {
      PublicHeader,
      HomeSlider,
      Finance,
      Product,
      Information,
      Navigation

    }
  }
</script>



