<template>
<div class="mainTopc">
  <div class="mainCenterc">
    <div class="box-center-topc">
      <div class="xinwent"><i class="el-icon-document"></i>
      <h1 class="bctlc">行思新闻</h1>
      </div>
      <div class="bctrc">
        <router-link to="/editor" active-class="active">
        <p>查看更多></p>
        </router-link>  
      </div>
     </div>
    <div class="box-centerc">
    <el-card class="box-cardc" v-for="item in articleList" :key="item.newsId">
      <router-link :to="{path:'/article/'+ item.newsId}">
        <div class="artc">
          <div class="artimgc" :style="{backgroundImage:'url(' + item.newsPictureViewUrl + ')', backgroundRepeat:'no-repeat', backgroundPosition:'center center', backgroundSize: 'cover '}">
            <!-- <img class="artimg2c" :src="item.newsPictureViewUrl" alt /> -->
          </div>
          <div class="art2c">
           <h6 style="font-size: 18px">{{item.newsTitle}}</h6>
            <div class="textc"><a href="javascript:;">{{item.newsContentView}}</a></div>
            <div class="footerc">
              <div> 
                <i class="fa fa-user" aria-hidden="true"></i>
                浏览量: {{item.visited}}
              </div>
              <div>
                <i class="fa fa-clock-o" aria-hidden="true"></i>
                日期: {{item.createdDateStr}}
              </div>
            </div>
          </div>
        </div>
      </router-link>
    </el-card>
    </div>
    <div class="box-photo-topc">
        <div class="xinwent"><i class="el-icon-picture-outline"></i>
      <h1 class="bptlc">行思相册</h1>
      </div>
      <div class="bptrc"><router-link :to="{path:'/settings'}"><p>查看更多></p></router-link></div>
    </div>
    <div class="box-footerc">
    <div class="box-photoc" v-for="item in photoList" :key="item.albumId">
      <div class="photo-imagec" >
      <router-link :to="{path:'/album/'+ item.albumId}">
      <div class="photo-imgc">
        <div class="photo-centerc">
          <h2 class="namec">{{item.albumName}}</h2>
        </div>
        <div class="pimgtc">
        <div class="pimgc" :style="{backgroundImage:'url(' + item.thumbUrl + ')', backgroundRepeat:'no-repeat', backgroundPosition:'center center', backgroundSize: 'cover '}">
        </div>
        </div>
        <span class="pdecc">
          <p>{{item.albumDesc}}</p>
        </span>
        <span class="ptimec">
          <p>{{item.createdDateStr}}</p>
        </span>
       </div>
     </router-link>
     </div>
    </div>
    </div>
  </div>
</div>
</template>

<script> 
import request from "@/utils/request";
export default {
  data() {
      return {
        imgList: [],
        imgHeight: 0,
        articleList: [],
        photoList: [],
        size: 6,
        pullRefreshss: true,
      };
    },
    methods:{
      async getArticle() {
        await request
          .get(
            "/news/?pageSize=6"
          )
          .then((res) => {
            // console.log(res);
            this.articleList = res.data.data.list;

          })
          .catch((err) => {
            console.log(err);
          });
      },
      async getPhoto() {
        await request
          .get(
            "/album?pageSize=12"
          )
          .then((res) => {
            console.log(res);
            this.photoList = res.data.data.list;

          })
          .catch((err) => {
            console.log(err);
          });
      },
    },

    async mounted() {
      this.activeIndex = this.$route.name;
      this.getPhoto();
      this.getArticle();
    } 

  } 
</script>

<style scoped>
  .mainTopc {
    width: 100%;
  }
  .mainCenterc {
    width: 76%;
    margin: 0 auto;
    /* background-color: rgb(148, 36, 36); */
  }
  .box-center-topc {
    padding-top: 38px;
    display: flex;
    justify-content:space-between;
    width: 100%;
    height: 36px;
    margin: 0 auto;
  }
  .xinwent {
    display: flex;
  }
  .el-icon-document {
    font-size: 32px;
    margin-right: 12px;
  }
  .el-icon-picture-outline {
    font-size: 32px;
    margin-right: 12px;
  }
  .box-center-topc .bctrc{
    margin-top: 15px;
    font-size: 14px;
    /* color: darkgray; */
  }
  .box-center-topc .bctrc p:hover{
    color: rgb(85, 176, 204);
  }
  .artc { 
    width: 100%;
    display: flex;
    align-items: center;
    padding: 20px;
    position: relative;
  }
  .artimgc {
    height: 150px;
    width: 33.33%;
    border-radius: 3%;
    overflow: hidden;
  }
  .artimg2c {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    transition: all 0.5s;
  }
  .art2c {
    height: 160px;
    width: 62%;
    padding: 5px 10px 10px 30px;
    box-sizing: border-box;
  }
  .art2c h6 {
    line-height: 1.15;
  }
  .textc {
    padding-top: 10px;
    font-size: 15px;
    height: 76px;
    line-height: 1.3;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-bottom: 5px;
    background-color: rgba(219, 231, 47, 0);
}
  .textc:hover a{
    color: #3a95bd;
  }
  .art2c .footerc {
    width: 50%;
    height: 15px;
    color: #868686;
    display: flex;
    font-size: 13px;
    justify-content: space-between;
    position: absolute;
    bottom: 22px;
}
  .box-cardc {
    width: 49%;
    display: flex;
    margin-bottom: 18px;
    height: 200px;
    box-sizing: border-box;
  }
  .box-centerc {
    margin-top: 16px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .box-photo-topc {
    padding-top: 38px;
    display: flex;
    justify-content:space-between;
    width: 100%;
    height: 36px;
    margin: 0 auto;
  } 
  .box-photo-topc .xinwent {
    padding-left: 12px;
  }
  .box-photo-topc .bptrc {
    padding-right: 12px;
   margin-top: 15px;
    font-size: 14px;
  }
  .box-photo-topc .bptrc p:hover {
    color: rgb(85, 176, 204);
  }
  .box-footerc {
    border-radius: 3%;
    margin-top: 16px;
    width: 100%;
    display: flex;
    /* justify-content: space-between; */
    flex-wrap: wrap;
    /* background-color: rgb(216, 5, 5); */
  }
  .box-photoc {
    width: 25%;
    height: 266px;
    display: flex;
    position: relative;
    margin-bottom: 26px; 
    border-radius: 3%;
    box-sizing: border-box;
    /* background-color: rgb(153, 45, 45); */
    /* box-shadow: 0 0 6px rgba(172, 172, 172, 0.3); */
  }
  .photo-imagec {
    width: 100%;
    /* background-color: rgb(11, 94, 43); */
  }
  .photo-imgc {
    width: 90%;
    margin: 0 auto;
    height: 266px;
    border-radius: 3%;
    background-color: rgb(255, 255, 255);
    position: relative;
    overflow: hidden;
    display: flex;
  }
  
  .pimgtc{
    width: 100%;
    height: 200px;
    overflow: hidden;
  }
   .pimgc {
    width: 100%;
    height: 200px;
    overflow: hidden;
    box-sizing: border-box;
    transition: all 0.5s;
  }
  .photo-centerc {
    position: absolute;
    margin-top: 120px;
    display: flex;
    align-items: center;
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    height: 80px; 
    background-color: rgba(0,0,0,0.6);
  }
  .photo-centerc .namec {
    margin: 0 auto;
    text-align: center;
    color: #f7f7f7;
    font-size: 20px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
 
   .box-photoc:hover .photo-imgc{
     box-shadow: 2px 2px 6px rgba(82, 82, 82, 0.3);
   }
   .box-photoc:hover .pimgc{
     overflow: hidden;
     transform: scale(1.1);
  }
  .pdecc {
    position: absolute;
    padding: 216px 15px;
    font-size: 16px;
    color: rgb(12, 12, 12);
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .ptimec {
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 14px;
    color: #878787;
  }
  .el-card /deep/ .el-card__body {
    padding: 0px;
    width: 100%;
  }
</style>
