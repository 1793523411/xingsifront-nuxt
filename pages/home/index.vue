<template>
  <div>
    <Swiper></Swiper>  
    <Maincenter></Maincenter>
  </div>
</template>

<script>
  import Swiper from './children/Swiper'
  import Maincenter from './children/Maincenter'
export default {
  name: 'Main',
  components: {
    Swiper,
    Maincenter
  }
}
</script>
