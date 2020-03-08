<template>
  <el-row :gutter="50">
      <el-col :xs="24" :sm="6" :md="6" :lg="6" :xl="6" class="left-bar">
        <li class="location-head">
          新闻导航
        </li>
        <li class="location" v-for="cate in cates">
            <span>
              <router-link :to="{path:'/newslist?id='+cate.ncl_id}" :class="{cateactive :(pid==cate.ncl_id)}"> {{cate.ncl_name}}</router-link>
              </span>
        </li>
      </el-col>
      <el-col :xs="24" :sm="16" :md="16" :lg="16" :xl="16" class="right-news" style="padding-left: 28px; padding-right: 18px;">
          <h2 class="text-info">{{content.nco_pid}}</h2>
          <hr class="index-bor">
          <h3>{{content.nco_title}}</h3>
          <p v-html="content.nco_content" class="content">
          </p>
      </el-col>
       
  </el-row>

</template>

<script>

export default {
    name:"detail",
    data(){
      return{
        content:[]
      }
    },
    created() {
        /*导航请求*/
         var url1 = "/api/index.php/news/cate"
          this.$axios.post(url1)
          .then(res => {
              this.cates= res.data;
              console.log(res);
          })
          .catch(error=>{
            console.log(error);
          })
        var url = "/api/index.php/news/detail/id/"+this.$route.query.id
        this.$axios.post(url)
        .then(res => {
            this.content= res.data;
            console.log(res)
        })
        .catch(error=>{
          console.log(error);
        })
    }
}
</script>

<style scoped>
  .left-bar{
    margin-top: 40px;
    margin-left: 60px;

  }
  .right-news{

    margin-top: 28px;
  }
   .location-head{
    margin: 0px 0px 20px 0px;
    height: 35px;
    line-height:35px; 
    border-radius: 8px;
    text-align: center;
    background-color: #409EFF;
    color:#fff;

  }
  .location{
    text-align: center;
    margin: 35px 0px 20px 0px;
  }
  .centent{
    font-family: kaiti;
  }
  li{
    list-style: none;
  }
  a:-webkit-any-link{
    text-decoration: none;
    color: #409EFF;


  }
  .el-row{
    width: 100%;
  }
   .text-info{

      text-align: left;
     
      font-size: 18px;
      color:  #409EFF;
    } 
    .index-bor {

      height: 2px;
      border: none;
      border-top: 2px solid #409EFF;
      margin-top: 20px;
      margin-bottom: 20px;
     } 
     h3{
      font-size: 17px;
      color:#409EFF;
      text-align: center;
     }
      @media screen and (max-width:768px){
      .left-bar{
       display: none;
  }
  .content{
    padding-left: 32px;
    color: #333333;
  }
   .right-news{
    margin-top: 0px;
  }
  }
  	@media only screen and  (min-width: 768px) and (max-width: 991px){
	
    [class*=el-col-] {
    
     width: 99%;
   }


}

</style>
