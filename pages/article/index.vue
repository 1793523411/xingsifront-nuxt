<template>
  <div class="block">
      <el-card class="box-cardw">
        <h1>{{article.newsTitle}}</h1>
         <div class="footerw">
            <div>
              <i class="fa fa-eye" aria-hidden="true"></i>
              浏览量: {{article.visited}}
            </div>
            <div>
              <i class="fa fa-user" aria-hidden="true"></i>
               作者: {{article.authorName}}
            </div>
            <div>
              <i class="fa fa-clock-o" aria-hidden="true"></i>
              日期: {{article.createdDateStr}}
            </div>
          </div>
          <hr>
        <div class="output ql-snow">
          <!-- <div class="ql-editor" v-html="article.newsContentView"></div> -->
          <div class="ql-editor" v-html="article.newsContent"></div>
        </div>
         
      </el-card>
  </div>  
</template>

<script>
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import request from "@/utils/request";
export default {
  data() {
    return {
      article: {},
      imgWall: {},
    };
  },
  methods: {
  },
  async mounted() {
    let id = this.$route.params.id;
    await request.get("/news/detail/" + id).then((res) => {
      console.log(res);
      this.article = res.data.data;
      // console.log(this.article);
      // this.visited();
    });

    // console.log(id);
  },
};
</script>

<style scoped>
.box-cardw {
  width: 70%;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0%);
  padding-top: 15px;
}
.box-cardw h1 {
  display: flex;
  justify-content: center;
  /* padding-top: 20px; */
}
.footerw {
  margin: 0 auto;
  width: 398px;
  padding-top: 30px;
  height: 15px;
  background-color: rgba(226, 35, 35, 0);
  display: flex;
  justify-content: space-between;
  /* padding-top: 10px; */
}
.block {
  padding-top: 68px;
}

</style>
