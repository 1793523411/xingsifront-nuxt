<template>
<div class="home">
    <div class="header">
        <div class="head-text">
            <span class="logo" @click="xingsi">
                <img src="@/static/xingsilogo.png" alt />
            </span>
            <h1>行思工作室</h1>
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#fff" text-color="#303133" active-text-color="#409EFF">
                <el-menu-item index="1">
                    <nuxt-link to="/" active-class="active">行思首页</nuxt-link>
                </el-menu-item>
                <el-menu-item index="2">
                    <nuxt-link to="/editor" active-class="active">行思新闻</nuxt-link>
                </el-menu-item>
                <el-menu-item index="3">
                    <nuxt-link to="/settings" active-class="active">行思相册</nuxt-link>
                </el-menu-item>
                <el-menu-item index="4">
                    <nuxt-link to="/history" active-class="active">行思历史</nuxt-link>
                </el-menu-item>
                <el-menu-item index="5">
                    <nuxt-link to="/login" active-class="active">行思简介</nuxt-link>
                </el-menu-item>
                <el-menu-item index="6">
                    <nuxt-link to="/profile" active-class="active">行思导航</nuxt-link>
                </el-menu-item>
            </el-menu>
        </div>
    </div>
    <!--<div style="height:60px"></div>-->

    <!-- 子路由 -->
    <nuxt-child />
    <!-- 底部 -->
    <div class="footer">
        <div class="ban">
            大学生网络工作室即行思工作室<br />Copyright © 2008 - 2020 Powered by Vue
            + Element-ui + Axios
        </div>
    </div>
</div>
</template>

<script>
import {
    mapState
} from "vuex";
export default {
    name: "LayoutIndex",
    data() {
        return {
            activeIndex: "1",
        };
    },
    methods: {
        xingsi() {
            window.open(
                "https://baike.baidu.com/item/%E8%A1%8C%E6%80%9D%E5%B7%A5%E4%BD%9C%E5%AE%A4/2831695?fr=aladdin",
                "_blank"
            );
        },
    },
    computed: {
        ...mapState(["user"]),
    },
};
</script>

<style scoped>
.header {
    position: fixed;
    width: 100%;
    height: 60px;
    display: flex;
    background-color: #fff;
    margin: 0;
    padding: 0;
    box-shadow: 1px 1px 3px 1px gray;
    z-index: 99;
}

.logo img {
    margin-right: 12px;
    height: 60px;
    line-height: 60px;
    cursor: pointer;
    /*z-index: 99;*/
}

.el-menu {
    border-bottom: 0 !important;
}

/*
.el-menu--horizontal>.el-menu-item.is-active {
    border-bottom: none;
}
*/
/*
.el-main .el-menu–horizontal /deep/ .el-submenu>.el-menu-item.el-submenu__title {
    border-bottom: none !important;
}
*/

.head-text {
    /*background-color: blue;*/
    width: 1500px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0%);
}

.head-text h1 {
    font-family: "楷体";
    font-size: 28px;
    color: rgb(66, 183, 233);
    margin-right: 36px;
}

.el-menu-demo {
    font-size: 18px !important;
}

.footer {
    position: relative;
    bottom: -50px;
    width: 100%;
    height: 50px;
    background-color: #111b23;
}

.ban {
    height: 50px;
    background-color: rgba(218, 75, 75, 0);
    width: 700px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0%);
    color: #9b9b9b;
    text-align: center;
    line-height: 23px;
    font-size: 10px;
}

h1 {
    padding-top: 10px;
}
</style>
