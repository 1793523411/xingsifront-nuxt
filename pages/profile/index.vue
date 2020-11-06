<template>
  <div class="topnav">
    <div class="centernav" v-for="item in navList" :key="item.typeId">
      <div class="centerTnav">
        <i class="el-icon-star-on" style="font-size:19px; color:#555;"></i>
        <p>
          {{item.type}}
        </p>
      </div>
      <div class="centerCnav">
        <el-popover
        class="el-cardc" v-for="item2 in item.websiteList" :key="item2.websiteId"
        placement="top-start"
        :title="item2.websiteName"
        width="60"
        trigger="hover"
        :content="item2.description">
        <div slot="reference" class="slotv">
        <a :href="item2.websiteUrl" class="el-cardcc">
          <div class="el-img"><img class="el-imgc" :src="item2.iconUrl" alt />
          </div>
          <div class="el-text"> {{item2.websiteName}} </div>
        </a>
        </div>  
        </el-popover>
        </div>
        </div>
      </div>
</template>

<script>
import request from "@/utils/request";
export default {
  data() {
    return {
      navList: {},

    };
  },
  methods: {
    async getNavList() {
      await request
      .get('/navi')
      .then((res) => {
        console.log(res);
        this.navList = res.data.data;
      })
      .catch((err)=>{
        console.log(err);
      }
    )
   },
  },
  async mounted() {
    this.getNavList();
  }
}
</script>

<style scoped>
 .topnav {
    margin: 0 auto;
    width: 70%;
    height: 100%;
    padding-top: 80px;
  }
  .centernav {
    width: 100%;
    height: 100%;
  }
  .centerTnav {
    padding: 10px 10px 20px 12px;
    display: flex;
    color: #555555;
    font-size: 18px;
  }
  .centerTnav i {
    padding-right: 7px;
  }
  .centerCnav {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  .el-cardc {
    width: 25%;
    height: 68px; 
    margin-bottom: 20px;
    display: flex;
    align-items: center; 
  }
  .slotv {
    width: 100%;
  }
   .el-cardcc{
    padding: 15px;
    box-sizing: border-box;
    border-radius: 4px;
    box-shadow: 1px 1px 3px 0px rgb(209, 209, 209);
    overflow: hidden;
    color: #303133; 
    margin: 0 auto;
    width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
    background-color: rgb(255, 255, 255);
  } 
  .el-img {
    width: 20%;
    height: 100%;
  }
  .el-imgc {
    border-radius: 50%;
    border: 2px solid #ebecf1;
    box-sizing: border-box;
    width: 100%;
    transition: all 0.5s;
  }
  /* .el-cardcc:hover{
    transform: translateY(-2px);
    box-shadow: 0 0 6px rgba(196, 196, 196, 0.3);
  } */
  .el-text {
    margin: 0 auto;
    font-size: 16px;
    color: #282A2D;
  }
 
</style>
