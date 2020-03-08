<template>
  <!--一个大容器-->
  <div>
  <!--轮播图代码-->
    <div class="block">
      <el-carousel>
        <el-carousel-item v-for="img in imgs">
         <img :src="'http://mzcf.com'+img.img_path" :alt="img.img_descr" :title="img.img_descr"  width="100%" height="100%" >
        
        </el-carousel-item>

      </el-carousel>
     
    </div>
  <!--新闻输出部分，采用layout布局组件-->
    <div class="container" >
      <el-row :gutter="30">
        <!--在<768的屏幕中占24格，>768则占6格-综合要闻-->
        <el-col :xs="24" :sm="6" :md="6" :lg="6" :xl="6" class="mobile-new" style="padding-left: 15px;padding-right: 0px;">
          <h2 class="text-info">综合要闻</h2>
          <hr class="index-bor">
          <img src="../assets/new-img.jpg" class="text-img">
          <hr class="cut-off">
          <li v-for="(componew,index) in componews" v-if="index < 6" class="List">
             <router-link :to="{path:'/news/detail?id='+componew.nco_id}" >{{componew.nco_title}}{{componew.nco_addtime}}</router-link>
             <hr class="cut-off">
          </li>

        </el-col>
        <!--通知公告-->
        <el-col :xs="24" :sm="18" :md="18" :lg="18" :xl="18" style="padding-right: 0px;">
          <el-col :xs="24" :sm="9" :md="9" :lg="9" :xl="9" style="padding-right: 0px;" >
            <h2 class="text-info">通知公告</h2>

            <hr class="index-bor">

             <li v-for="(infonew,index) in infonews" v-if="index < 3" class="List">
            <router-link :to="{path:'/news/detail?id='+infonew.nco_id}" >{{infonew.nco_title}}{{infonew.nco_addtime}} </router-link>
           
               <hr class="cut-off">
            </li>
           
          </el-col>
          <!--学术动态-->
          <el-col :xs="24" :sm="9" :md="9" :lg="9" :xl="9" style="padding-right: 0px;">
            <h2 class="text-info">学术动态</h2>
            <hr class="index-bor">
            <li v-for=" (acadenew,index) in acadenews" v-if="index < 3" class="List">
              <router-link :to="{path:'/news/detail?id='+acadenew.nco_id}" >{{acadenew.nco_title }}{{acadenew.nco_addtime}} </router-link>
               <hr class="cut-off">
            </li>

          </el-col>
           <!--学会动态-->
          <div>
            <el-col :xs="24" :sm="18" :md="18" :lg="18" :xl="18" style="padding-right: 0px;">
              <h2 class="text-info">学会动态</h2>
              <hr class="index-bor">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  
                   <li v-for=" (assonew,index) in assonews" v-if="index<3" class="List">
                      <router-link :to="{path:'/news/detail?id='+assonew.nco_id}" >{{assonew.nco_title}}{{assonew.nco_addtime}} </router-link>
                      <hr class="cut-off">
                    </li>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <li v-for=" (assonewsec,index) in assonewsecs" v-if="(index>2)&&(index<6)"  class="List">
                     <router-link :to="{path:'/news/detail?id='+assonewsec.nco_id}" >{{assonewsec.nco_title}}{{assonewsec.nco_addtime}} </router-link>
                    <hr class="cut-off">
                  </li>
                </el-col>
              </el-col>
            </div>
        
          </el-col>
     

      </el-row>
    </div>
    <div class="enter-news">
      <router-link  to="/newslist?id=11">
      进入新闻页<i class="el-icon-d-arrow-right"></i>
    </router-link>
    </div>
    
  </div>
 
</template>

    
  

<script>
export default {
    name:"layout",
    data(){
      return{
        imgs:[],
       /*综合要闻*/
       componews:[],

        /*通知公告添加内容处*/
         infonews:[],
         /*学术动态添加内容处*/
        acadenews:[],

         
         /*学会动态第一部分添加内容处*/
        assonews:[],
         /*学会动态第二部分添加内容处*/
        assonewsecs:[]
        
      }
  
  },
  created() {
    /*轮播图*/
     var url7 ="/api/index.php/index/img"
    this.$axios.post(url7)
    .then(res => {
        this.imgs= res.data;
        console.log(res);
    })
    .catch(error=>{
      console.log(error);
    })
   
    /*综合要闻*/
    var url = "/api/index.php/index/news/pid/10"
    this.$axios.post(url)
    .then(res => {
        this.componews= res.data;
        console.log(res);
    })
    .catch(error=>{
      console.log(error);
    })
    /*通知公告*/
     var url2 ="/api/index.php/index/news/pid/11"
    this.$axios.post(url2)
    .then(res => {
        this.infonews= res.data;
        console.log(res);
    })
    .catch(error=>{
      console.log(error);
    })
    /*学术动态*/
     var url3 = "/api/index.php/index/news/pid/12"
    this.$axios.post(url3)
    .then(res => {
        this.acadenews= res.data;
        console.log(res);
    })
    .catch(error=>{
      console.log(error);
    })
    /*学会动态第一部分*/
     var url4 ="/api/index.php/index/news/pid/13"
    this.$axios.post(url4)
    .then(res => {
        this.assonews= res.data;
        console.log(res);
    })
    .catch(error=>{
      console.log(error);
    })
     /*学术动态第二部分*/
    var url6 = "/api/index.php/index/news/pid/13"
        this.$axios.post(url6)
        .then(res => {
            this. assonewsecs= res.data;
            console.log(res.data);
        })
        .catch(error=>{
          console.log(error);
      
         
      })
   },

}  
</script>

<style scoped>
    *{
      margin: 0px;
      padding: 0px;
     }
   
 a:-webkit-any-link{
    text-decoration: none;
    
    color: #000000;
  }
  .el-row{
    width: 100%;
  }
   .index-bor {
      height: 2px;
      border: none;
      border-top: 2px solid #409EFF;
      margin-top: 20px;
      margin-bottom: 20px;
     
    }

    .text-info{

      text-align: center;
      color:  #409EFF;
      margin-top: 25px;

    }

    h2{

      font-size: 20px;

    }
  .text-new {

    margin: 0 auto;

  }
  .text-img {
    
    width: 80%;
    margin-left: 25px;

  }
  .List{
    font-size: 16px;
  }
  .cut-off {

    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid #eee;

  }
  li {

      list-style: none;
      font-size: 12px;

  }
  .container{

    margin: auto 0;
  }
 
.enter-news{
         
     color:  #409EFF;
     font-size: 15px;
     margin-left: 788px;
}

 .left{

  float: left;
 }
 .right{
  float: right;
 }
@media screen and (max-width:768px){
  .container{
      margin-left: 10px;
  }
  .enter-news{    
      font-size: 14px;
      margin-left: 225px;
      margin-bottom: 30px;
  }
  .mobile-new{
      margin-left: 0 15px 0 15px;
  }
}

	@media only screen and  (min-width: 768px) and (max-width: 991px){
	
    [class*=el-col-] {
    
     width: 99%;
   }
   .mobile-new{
     margin-left:10px;
     margin-right: 10px;
   }
   .enter-news{       
     color:  #409EFF;
     font-size: 15px;
     margin-left: 508px;
}
.text-img {

    margin-left: 60px;

  }

}
	@media only screen and (min-width: 992px) and (max-width: 1024px) {
		.container{
				margin-left: 150px;
  	}
    
  }
  	@media only screen and (min-width: 1025px) and (max-width: 1379px) {
		.container{
				margin-left: 200px;
  	}
  }
  @media only screen and (min-width: 1380px) {
  .container{
      margin-left: 230px;
  }

}

</style>