<template>
<div class="mainTopc">
  <div class="mainCenterc">
   <div class="box-photo-topc">
        <div class="xinwent"><i class="el-icon-picture-outline"></i>
      <h1 class="bptlc">行思相册</h1>
      </div>
    </div>
    <hr>
    <br>
    <div class="box-footerc">
    <div class="box-photoc" v-for="item in photoList" :key="item.albumId">
      <div class="photo-imagec">
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
      <el-card class="box-card2k">
        <div class="block">
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page.sync="pageNum"
            layout="total, prev, pager, next, jumper"
            :page-size="16"
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
    return {
      photoList: [],
      pullRefreshss: true,
      pageNum: 1,
      size: 8,
      total: 0,
      page: 1,
    }
  },
  methods: {
    async getPhoto(page,size) {
      await request
        .get(
          `/album?pageNum=${page}&&pageSize=${size}`
        )
        .then((res) => {
          console.log(res);
          this.photoList = res.data.data.list;
        })
        .catch((err) => {
          console.log(err);
        });
    },
      getTotal(){
      request.get('/album').then(res =>{
        this.total = res.data.data.total
      })
    },
    handleCurrentChange(newPage) {
      // console.log(`处于第${newPage}页`);
      this.pageNum = newPage;
      this.getPhoto(newPage,16);
    },
  },

  async mounted() {
    this.getPhoto(1,8);
    this.getTotal()
  } 
}
</script>

<style>
  .mainTopc {
    width: 100%;
    margin: 0 auto;

  }
  .mainCenterc {
    width: 76%;
    margin: 0 auto;
    /* background-color: rgb(148, 36, 36); */
  }
  .xinwent {
    margin-left: 43%;
    display: flex;
  }
  .el-icon-picture-outline {
    font-size: 32px;
    margin-right: 12px;
  }
 
  .box-photo-topc {
    padding-top: 88px;
    display: flex;
    justify-content:space-between;
    width: 100%;
    height: 36px;
    margin: 0 auto;
  } 
  .box-photo-topc .bptrc {
   margin-top: 15px;
    font-size: 14px;
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
 
  .box-card2k {
    width: 100%;
    padding: 8px;
    margin: 0 auto;
    text-align: center;

  }
.el-card /deep/ .el-card__body {
  padding: 0px;
}
</style>
