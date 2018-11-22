<template>
  <div class="hello">
    <public-header></public-header>
    <raise-slider></raise-slider>
    <daily></daily>
    <in></in>
    <information></information>
    <navigation></navigation>
  </div>
</template>

<script>
  import PublicHeader from '../public/Header'
  import RaiseSlider from './components/RaiseSlider'
  import Daily from './components/Daily'
  import In from './components/In'
  import Information from '../public/Information'
  import Navigation from '../public/Navigation'
  export default {
    name: 'Home',
    components: {
      PublicHeader,
      RaiseSlider,
      Daily,
      In,
      Information,
      Navigation
    }
  }
</script>



