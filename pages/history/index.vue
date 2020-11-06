<template>
<div class="block">
    <el-timeline >
    <el-timeline-item v-for="item in history"
      :timestamp="item.year"
      placement="top" 
      :key="item.yearId"
      >
      <router-link :to="{path:'/year/'+ item.yearId}">
      <el-card>
        <h3>{{item.description}}</h3>
        <!-- <br> -->
        <!-- <div v-for="(item2  , index) in item.personList" :key="index">
        <h5>{{ item2.job }} ：{{ item2.name }}  {{item2.grade}}</h5>
      </div>   -->
      </el-card>
      </router-link>
    </el-timeline-item>
  </el-timeline>
</div>
</template>

<script>
import request from "@/utils/request";
export default {
  data() {
    return {
      icon: "",
      history: {},
    };
  },
  methods: {
    async getHistory() {
      await request
        .get("/history")
        .then((res) => {
          console.log(res);
          this.history = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  async mounted() {
    this.getHistory();
  },
};
</script>

<style scoped>

.block {
  width: 50%;
  margin: 0 auto;
  padding-top: 78px;
}

.el-card{
  padding: 20px;
}
.el-card /deep/ .el-card__body {
  padding: 0px;
}
</style>