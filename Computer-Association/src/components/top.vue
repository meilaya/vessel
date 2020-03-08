<template>
	<el-row :gutter="20" class="logo-head" style=" margin-left: 0px; margin-right: 0px;">
    	<el-col :md="12" :lg="12" :xl="12">
    		<img :src="'http://mzcf.com'+sets.set_logo" class="logo" >       
    	</el-col>
	    <el-col :md="6" :lg="6" :xl="6" class="form-control">
	    	<el-input placeholder="请输入内容" v-model="input">
   				 <button slot="prepend" class="but"><i class="el-icon-search"></i></button>
  			</el-input>
  		</el-col>
	</el-row>
</template>
<script>
export default {
    name:"top",
    data(){
      return{
        input: '',
        sets:[],
      }
    },
    created() {
    	var set_url ="/api/index.php/common/set"
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
	*{
		margin: 0px;
		padding: 0px;
	}

	.logo-head{
		
		height: 160px;	
	  background-color: #409EFF;
	}
  .logo{
    width: 100%;
      

  }
	 .form-control{
    	margin-top: 60px;
      margin-left: 250px; 
    }
    .but{
    	border: 0;
    	background-color: #F5F7FA;
    	width: 30px;
    	height:30px;
		
    }
	
	@media only screen and (min-width: 1380px) {
		.logo{
    	width: 70%;
				margin-top: 15px;
  	}
	  element.style{
			margin-right: 0px;
			margin-left: 0px;
		}
		
}
		
 @media screen and (max-width:768px){
    
  
	.form-control{
    	margin-top: 0px;
      margin-left: 0px; 
    }
  }

	
	

    
</style>