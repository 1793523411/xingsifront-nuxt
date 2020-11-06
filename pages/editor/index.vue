<template>
<div class="mainTopc">
  <div class="mainCenterc">
    <div class="box-center-topc">
      <div class="xinwent">
      <i class="el-icon-document"></i>
      <h1 class="bctlc">行思新闻</h1>
      </div>
     </div>
    <hr>
    <br>
    <div class="box-centerc">
    <el-card class="box-cardc" v-for="item in articleList" :key="item.newsId">
      <router-link :to="{path:'/article/'+ item.newsId}">
        <div class="artc">
          <div class="artimgc">
            <div class="artimg2c" :style="{backgroundImage:'url(' + item.newsPictureViewUrl + ')', backgroundRepeat:'no-repeat', backgroundPosition:'center center', backgroundSize: 'cover '}"></div>
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
       <el-card class="box-card2c">
        <div class="block">
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page="pageNum"
            layout="total, prev, pager, next, jumper"
            :page-size="8"
            :total="total"
          ></el-pagination>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import request from "@/utils/request";
export default {
  data() {
    return{
      articleList: [],
      pullRefreshss: true,
      pageNum: 1,
      size: 8,
      total: 0,
      page: 1,
    };
  },
  methods:{
    async getArticle(page,size) {
      await request
        .get(
          `/news?pageNum=${page}&&pageSize=${size}`
        )
        .then((res) => {
          // console.log(res);
          this.articleList = res.data.data.list;
          // this.total = res.data.data.total;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getTotal(){
      request.get('/news').then(res =>{
        this.total = res.data.data.total
      })
    },
     handleCurrentChange(newPage) {
      // console.log(`处于第${newPage}页`);
      this.pageNum = newPage;
      this.getArticle(newPage,8);
    },
  },
  async mounted() {
    this.getArticle(1,8);
    this.getTotal()
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
  }
  .box-center-topc {
    /* margin: 0 auto; */
    padding-top: 88px;
    width: 100%;
    height: 36px;
  }
  .xinwent {
    margin-left: 43%;
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
  .box-centerc {
    margin-top: 16px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .box-cardc {
    width: 49%;
    display: flex;
    margin-bottom: 18px;
    height: 200px;
    box-sizing: border-box;
  }
 .el-card /deep/ .el-card__body {
   padding: 0px;
    width: 100%;
    /* background-color: rgb(67, 192, 36); */
  }
   .box-cardtc {
    width: 100%;
    height: 100%;
  }
  .artc { 
    width: 100%;
    display: flex;
    align-items: center;
    padding: 20px;
    position: relative;
    /* background-color: rgb(0, 128, 96); */
  }
  .artimgc {
    height: 150px;
    width: 33.33%;
    border-radius: 3%;
    background-color: rgb(202, 23, 23);
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
  
  .box-card2c { 
    width: 100%;
    padding: 10px;
    margin: 0 auto;
    text-align: center;
    }
/* .block {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0%); 
  margin-top: 18px;
}
.box-card2 {
 position: relative;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 1200px;
  height: 60px;

}  */
.el-card /deep/ .el-card__body {
  padding: 0px;
}
</style>
