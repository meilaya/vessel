<template>
	<div>
		<el-row :gutter="60" class="footlink-container" style=" margin-left: 0px; margin-right: 0px;">
  			<el-col :xs="24" :sm="6" :md="6" :lg="4" :xl="4" v-for="link in links" class="footlink">
  				 <router-link to="link.link_url">	
  				{{link.link_name}}
  			</router-link>
  			</el-col>
  	 	
		</el-row>
    	<el-row :gutter="20" class="logo-foot"  style=" margin-left: 0px; margin-right: 0px;">
    		<el-col  :md="14" :lg="14" :xl="14" >
    			<img :src="'http://mzcf.com'+sets.set_logo" >
    		</el-col>
	    	<el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
	    		<div class="foot-text">
	    			<p>
		    		 {{sets.set_icp}}
		    		</p>
		    		<p>
	                地址:{{sets.set_address}}：　邮编：{{sets.set_code}}　维护：{{sets.set_maintain}}
	                </p> 
	                <p>
	                版权所有©{{sets.set_copyright}}
	                </p>
                </div>
  			</el-col>
		</el-row>
	</div>
</template>

<script>
export default {
    name:"bottom",
    data(){
      return{
      	links:[],
      	sets:[]

      } 
  },
    created() {
        var url = "/api/index.php/common/link"
        this.$axios(url)
        .then(res => {
            this.links= res.data;
        })
        .catch(error=>{
         	console.log(error);
    	})
    	var set_url = "/api/index.php/common/set"
        this.$axios(set_url)
        .then(res => {
            this.sets= res.data;
        })
        .catch(error=>{
         	console.log(error);
    	})
	}
   
   
}

</script>

<style scoped>

	.footlink-container{
		background-color: #E0E0E0;
		margin-top: 30px;
        height: 210px;
	}
	.footlink{
		margin-top: 25px;
		margin-left: 80px;
		font-size: 14px;
		color: #9E9E9E;

	}
	a:-webkit-any-link{
		text-decoration: none;
		color: #9999A4;


	}
	.logo-foot{
		background-color:  #409EFF;
		margin-right: 0px;
		margin-left: 0px;
	}
	.foot-text{
		color: #ffffff;
		font-size: 12px;
	}
	img{
		width:50%;
		margin-left: 170px;
		margin-top: 10px;
	}
	
	 element.style{
			margin-right: 0px;
			margin-left: 0px;
	}
		
	 @media screen and (max-width:768px){
	     .footlink-container{
			display: none;
		}
		.foot-text{
			margin-left: 45px;
		}
		img{
			width:280px;
			margin-left: 30px;
			margin-top: 5px;
		}
  }
 	@media only screen and (min-width: 992px) and (max-width: 1024px) {
		.container{
				margin-left: 150px;
  	}
    
  }

</style>
