
<template>
	<el-row :gutter="50">
  		<el-col :xs="24" :sm="6" :md="6" :lg="6" :xl="6" class="left-bar">
        <li class="location-head" >
          新闻导航
        </li>
          <li class="location" v-for="cate in cates" >
            <span @click="refresh">
              <router-link :to="{path:'/newslist?id='+cate.ncl_id}" :class="{cateactive :(pid==cate.ncl_id)}" exact> {{cate.ncl_name}} </router-link>
          </span>
          </li>

      </el-col>
      <el-col :xs="24" :sm="16" :md="16" :lg="16" :xl="16" class="right-news">
            <h2 class="text-info" v-for="cate in cates" v-if="pid==cate.ncl_id">
                {{cate.ncl_name}}
            </h2>
            <hr class="index-bor">
            <div class="block">
              <el-carousel>
                <el-carousel-item v-for="img in imgs" >
                  <img :src="'http://mzcf.com/'+img.nco_imgpath"  :title="img.nco_title"  width="100%" height="100%">
                </el-carousel-item>
              </el-carousel>
            </div>
            <div>
            <hr class="cut-off">
             <li v-for=" (news,index) in newsitem" v-if="index<7" class="list-item">
                     <router-link :to="{path:'/news/detail?id='+news.nco_id}" >{{news.nco_title}}{{news.nco_addtime}}</router-link>
                  
                   <hr class="cut-off">
              </li>
            </div>
           <!--分页器-->
            <!--<el-pagination background layout="prev, pager, next":total="10" page-size="2"class="pagination">
            </el-pagination>-->
      </el-col>
  </el-row>
</template>
			
<script>
export default {
    name:"newslist",
    data(){
      return{
        imgs:[],
        cates:[],
        newsitem:[],
        pid:this.$route.query.id,
      }
    },
     methods: {
      handleOpen(key, keyPath) {

        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      refresh(){
        window.location.reload();
      }

},
 created(){
  /*图片请求*/
        var url = "/api/index.php/news/img"
        this.$axios.post(url)
        .then(res => {
            this.imgs= res.data;
            console.log(res);
        })
        .catch(error=>{
          console.log(error);
      
         
      })
        /*导航请求*/
         var url1 =  "/api/index.php/news/cate"
        this.$axios.post(url1)
        .then(res => {
            this.cates= res.data;
            console.log(res);
        })
        .catch(error=>{
          console.log(error);
      })
       /*新闻请求*/ 
        var url2 =  "/api/index.php/news/item/pid/"+this.$route.query.id
        this.$axios.post(url2)
        .then(res => {
            this.newsitem= res.data;
            console.log(res);
        })
        .catch(error=>{
          console.log(error);
      }) 
}
}
</script>
<style scoped>
  *{
    padding:0px;
    margin:0px;
  }
  .cateactive {
    font-weight: bold;
  }

	.left-bar{
    margin-top: 40px;
    margin-left: 60px;

  }
  .right-news{

    margin-top: 40px;
  }
   .text-info{

      text-align: left;
     
      font-size: 18px;
      color:  #409EFF;


    } 
    .left{
      float: left;

    }
    .right{
      float: right;
    }

     .index-bor {

      height: 2px;
      border: none;
      border-top: 2px solid #409EFF;
      margin-top: 20px;
      margin-bottom: 20px;
     } 
    .cut-off {

    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid #eee;

  }
  li{
    list-style: none;
  }
  .pc-list{
    margin-top: 30px;
    font-size: 14px;
  }
  .el-row{
    width: 100%;
  }

  a:-webkit-any-link{
    text-decoration: none;
    color: #409EFF;
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
   @media screen and (max-width:768px){
   .location-head{
    display: none;

  }
  .location{
      display: none;
  }
  .right-news{

    margin-top: 0px;
  }
 .left-bar{
    margin-top: 0px;
   margin-left: 0px;

  }
  .right-news{

    margin-left: 20px;
  }
   .text-info{

      text-align: left;
     
      font-size: 14px;
      color:  #409EFF;


    } 
    .pc-list{
    margin-top: 30px;
    font-size: 12px;
  }
  .list-item{
    font-size: 12px;
    
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
.el-col-sm-16 {
    width: 100%;
}

}
</style>