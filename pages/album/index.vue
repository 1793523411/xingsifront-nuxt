  <template>
  <div>
    <div class="topu"></div>
      <el-card class="box-cardu">
        <h1>{{photo.albumName}}</h1>
        <h3>{{photo.albumDesc}}</h3>
        <hr>
        <div class= "box-cardu">
         <div class="box-photou" v-for="(item, index) in photoList" :key="index">
          <div class="photo-imgu">
            <div class="pimgu">
              <img class="artimg2u" :src="item.pictureUrl" alt />
            </div>
          </div>
        </div>
        </div>
       </el-card>
   </div>
</template>

<script>
import request from "@/utils/request";
export default {
 data() {
    return {
      photo: {},
      photoList: {},
    };
  },
  methods: {
  },
  async mounted() {
    let id = this.$route.params.id;
    console.log(this.$route);
    await request.get("/album/" + id).then((res) => {
      console.log(res);
      console.log(id);
      this.photo = res.data.data;
      this.photoList = res.data.data.photosList;
    });

  },
};
</script>

<style scoped>

.box-cardu h1 {
  display: flex;
  justify-content: center;
  /* padding-top: 20px; */
} 
.box-cardu h3 {
  display: flex;
  justify-content: center;
  padding-top: 20px;
} 
 .photo-imgu {
  width: 300px;
  height: 225px;
  position: relative;
} 
.pimgu {
  height: 225px;
  width: 300px;
  overflow: hidden;
  padding: 0;
}
.artimg2u {
  height: 100%;
  width: 100%;
}
.box-photou {
  display: flex;
  position: relative;
  margin-bottom: 20px;
  box-sizing: border-box;
}
.box-cardu {
  position: relative;
  width: 1260px;
  left: 50%;
  padding-top: 20px;
  transform: translate(-50%,0);
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.topu {
  height: 70px;
}
.el-card /deep/ .el-card__body {
  padding: 0px;
}
</style>
