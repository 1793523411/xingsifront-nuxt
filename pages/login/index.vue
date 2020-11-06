<template>
 <div>
    <div class="abouti">
      <div class="xingsiabouti">  
    <div class="xingsiai">
      <div class="xingsiati">
         <img src="~@/static/xingsilogo.png" alt="">
        <div class="xingsiali"><h1>行<br>思<br>工<br>作<br>室</h1></div> 
      </div>
      
      <div class="xingsiaci">
        <div class="xingsiacti"><h2>且学且思，且行且思，行则有序，思则无疆，是为行思  !</h2></div>
        <div class="xingsiacbi">大学生网络工作室又称 “ 行思工作室 ” ，是河南理工大学校团委领导下的社团组织。工作室成立之初负责部分官方网站的搭建与维护，经过历届的发展与创新，现设有程序组、设计组、视创组、游戏开发组、文案组运营组五个组，每个组各有特色、大神云集，始终贯行着 “ 参与、协作、奉献 ” 的精神。<div>
工作室主要以学习计算机应用技术为主，定期进行各方向的专业技术培训指导，扎实基础之后即可帮助完成学校、个人下发的网站项目、3D游戏开发、海报创作、视频制作、文案策划、微博微信运营等工作。</div></div>
      </div>
      </div>
      </div>  
    <div class="cszi">
      <div class="mine1i">
      <el-container>
        <el-header>
          <img src="~@/static/1.png" alt="">
          <div><h1 >程序组</h1></div>
        </el-header>
        <el-main>
          <p>   这里是行思工作室最大的一个组，可谓是人丁兴旺，人才济济！所谓程序组，主力当然就是搞软件发啦！无论是前端，亦是后台，或是两者兼顾的全栈开发，各种方向我们都有，这里都有优秀的学长学姐，最新的前沿技术，有无所不能的it大佬。如果你想变成传说中那个无所不能的hacker的话，来吧，我们在这儿等你！只要你想，一切都会变成真的！</p>
        </el-main>
      </el-container>
      </div>
      <div class="mine2i">
      <el-container>
        <el-header>
          <img src="~@/static/2.png" alt="">
          <h1>设计组</h1>
        </el-header>
        <el-main>
          <p>  分为两个方向：前端和PS。前端包括HTML，CSS，JavaScript等，做好网页开发，布局和色彩搭配；PS方向主要运用photoshop，以AI，AE为辅助，设计海报，宣传资料。以有限的技术呈现视觉美感，表达内涵以及展现自己的设计想法。</p>
        </el-main>
      </el-container>
      </div>
       </div>
     <div class="swyzi">
       <div class="mine3i">
      <el-container>
        <el-header>
          <img src="~@/static/4.png" alt="">
          <h1>视创组</h1>
        </el-header>
        <el-main>
          <p>视创组以adobe系列pr为主，活用AE,Flash,Au等软件去打造视频，同时致力于以兴趣开发为根基的视频创作，用简单的技术做当初令自己心动的视频类型。以扎实的技术为核心，新奇的创意为灵魂，通过视频表达生活。</p>
        </el-main>
      </el-container>
      </div>
      <div class="mine4i">
      <el-container>
        <el-header>
          <img src="~@/static/5.png" alt="">
          <h1>游戏开发组</h1>
        </el-header>
        <el-main>
          <p>
            使用c#编程配合unity游戏引擎开发游戏或者使用c++、蓝图编程配合UE4游戏开发引擎开发游戏。
          </p>
        </el-main>
      </el-container>
      </div>
      <div class="mine5i">
      <el-container>
        <el-header>
         <img src="~@/static/3.png" alt="">
          <h1>文案运营组</h1>
        </el-header>
        <el-main>
          <p>
            文案运营组负责社团推广写推文，官Q官微公众号，office软件手里拿，社团生活真奇妙。
          </p>
        </el-main>
      </el-container>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "LoginIndex",
};
</script>

<style scoped>

.mine1i {
background-image: linear-gradient(to top, #ebc0fd 0%, #d9ded8 100%);
  border-radius: 10px;
  /* color: white; */
}
.mine2i {
  border-radius: 10px;
background-image: linear-gradient(to top, #dad4ec 0%, #dad4ec 1%, #f3e7e9 100%);
  
  }
.mine3i {
  border-radius: 10px;
  background-image: linear-gradient(to top, lightgrey 0%, lightgrey 1%, #e0e0e0 26%, #efefef 48%, #d9d9d9 75%, #bcbcbc 100%);
}
.mine4i {
  background-image: linear-gradient(to top, #bdc2e8 0%, #bdc2e8 1%, #e6dee9 100%);
  border-radius: 10px;
}
.mine5i {
 background-image: linear-gradient(to top, lightgrey 0%, lightgrey 1%, #e0e0e0 26%, #efefef 48%, #d9d9d9 75%, #bcbcbc 100%);
  border-radius: 10px;
 }
 .xingsiabouti{
   width: 100%;
 }
 .xingsiai {
   margin: 0 auto;
   width: 58%;
   height: 300px;
   display: flex;
   box-shadow: 1px 1px 3px 0px rgb(151, 151, 151);
   margin-bottom: 60px;
   border-radius: 6px;
  background-image: linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%);
   /* background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%); */
   /* background-color: rgb(209, 24, 24); */
 }
 .xingsiati {
   border-right: 1px solid rgb(197, 197, 197);
   width: 30%;
   text-align: center;
   /* display: flex;   */
 }
 .xingsiati img {
   margin-top: 16px;
   width: 88px;
   height: 88px;
   margin-bottom: 12px;
 }
 .xingsiacti {
   letter-spacing:1px;
   color: rgb(66, 66, 66);
 }
 .xingsiali {
   line-height: 1.12;
   text-align: center;
   color: rgb(66, 66, 66);
   font-size: 12.5px;
 }
.xingsiaci {
  margin: 0 auto;
  width: 70%;
  padding: 50px;
}
.xingsiacbi {
  margin: 0 auto;
  /* width: 90%; */
  padding: 26px 50px 18px 10px;
  line-height: 1.5;
  text-align: justify;
  text-indent:2em;
}
.el-container {
  border-radius: 10px;
  width: 310px;
  height: 400px;
  box-shadow: 1px 1px 3px 0px rgb(176, 180, 180);
}
.el-header {
  width: 310px;
  color: rgb(68, 68, 68);
  text-align: center;
  margin-bottom: 60px;
}
.el-header img {
  margin-top: 18px;
  width: 88px;
  height: 88px;
  margin-bottom: 12px;
}
.el-main {
  padding: 39px 36px 32px 32px;
  line-height: 1.3;
  color: rgb(114, 114, 114);
  font-size: 15px;
}
.el-main p {
   text-align: justify;
   text-indent:2em;
}
.cszi {
  margin: 0 auto;
  width: 57%;
  /* background-color: #520202; */
  display: flex;
  align-items: center;
  justify-content: space-around;
  
}
.swyzi {
  width: 75%;
  margin: 0 auto;
  padding-top: 60px;
  /* background-color: #bd1717; */
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.abouti {
  width: 100%;
  padding-top: 100px;
  margin-bottom: 60px;
}

</style>
