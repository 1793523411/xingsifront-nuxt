<template>
   <div class="topc">
    <div class="democ"></div>
    <el-carousel>
      <el-carousel-item key="item">
        <img src="~@/static/banner.png" alt="">
      </el-carousel-item>
      <el-carousel-item key="item1">
        <img src="~@/static/banner.png" alt="">
      </el-carousel-item>
      <el-carousel-item key="item2">
        <img src="~@/static/banner.png" alt="">
      </el-carousel-item>
      <el-carousel-item key="item3">
        <img src="~@/static/banner.png" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.democ { 
    width: 100%;
    height: 60px;
  }
.top {
  width: 100%;
  height: 60%;
}
.topc img {
    width: 100%;
    position: fixed;
    top: 50%;
    transform: translate(0, -50%);
  }
</style>