<template>
	<div>

		<el-button type="primary" class="mobile-bar" @click="flag=true" ><i class="el-icon-tickets"></i></el-button>	
		<models :show="flag" class="model" @close="()=>flag=false"/>
			<ul class="box">

			<li class="bar" v-for="nav in navs" >
				<el-dropdown  class="bar">
					<span class="el-dropdown-link">
						<router-link :to="nav.na_url">{{nav.na_name}}</router-link>
						<i class="el-icon-arrow-down el-icon--right" v-if="nav.na_child" ></i>
					</span>

				<el-dropdown-menu slot="dropdown" v-if="nav.na_child">
				    <el-dropdown-item  v-for="child in nav.na_child" class="bar-item">
			    		<router-link :to="child.na_url">
			    			{{child.na_name}}
						</router-link>
					</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</li>
	</ul>
	</div>	
</template>
<script>
import models from "./model"
export default {
    name:"bar",
    data(){
      return{
       flag:false,
      	navs:[]
      } 
  	},
  	components:{
  		models
  	},
  	created(){
  		var url = "/api/index.php/common/bar"
  		this.$axios.post(url)
  		.then(res => {
  		    this.navs= res.data;
  		    console.log(res);
  		})
  		.catch(error=>{
  		  console.log(error);
  		})
  	},
    
}
 
</script>

<style scoped>

	li{
		list-style: none;


	}

	a:-webkit-any-link{
		text-decoration: none;
		color: #409EFF;


	}
	 a:hover{
		color: #044160; 
	}
	.mobile-bar{
		display: none;

	}
	.box{
		display: flex;
	
		margin-right: 130px;
		justify-content: center;
	}
	.bar{
		padding-left: 50px;
		color: #409EFF;

	}
	.el-dropdown{
		color: #409EFF;
		font-size:18px;
	}
   .bar-item{
	
		font-size:16px;
	}

	.model{
		display: none;
	}
	ul li ul{
		position: absolute;
		top:40px;
		left: 0; 
		display:none;
	}
	ul li:hover ul{display: block;}

	 @media screen and (max-width:768px){
	 
    .box{
		display: none;
		

	}


     .bar{
		padding-left: 4px;
		font-size: 12px;
	}
	.bar-item{
	
		font-size:12px;
	}

	.current{

		font-size: 12px;
		padding-left: 0px;

	}
	.mobile-bar{

		display: block;
		width: 55px;
		height: 40px;
    margin-top: 5px; 
		
	}
    .model{
		display: block;
		margin-bottom: 5px;
	}
	}
	@media only screen and  (min-width: 768px) and (max-width: 991px){
	
  .mobile-bar{
		margin-top: 65px;
		margin-left: 10px;
	}

}	
@media only screen and (min-width: 992px) and (max-width: 1024px) {
		.bar[data-v-1e084a5a] {
    padding-left: 40px;
    
}
  }

</style>