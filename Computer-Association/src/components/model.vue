<template>
	<div class="bar-item">
		<div class="dialog" v-if="show">
      <button class="close" @click="shutdown">X</button>
			  <li class="m-content" v-for="nav in navs">
          <el-dropdown >
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
		</div>
	</div>	
</template>
<script>
export default {
    name:"model",
    data(){
      return{
      	navs:[],
      	
      
      } 
  },
  props:["show"],
  methods:{
  	shutdown(){
  		this.$emit('close')
  	}

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
  	}
  
   
}
</script>

<style scoped>
    .dialog{
    	width: 100%;
    	height: 260px;
    	background-color:  #E0E0E0;
      padding-top: 10px;
      margin-bottom: 5px;
      margin-top: 5px;
    }
    .close{
    	float: right;
     color: #fff;
     border-radius: 30px;
     border: 1px solid #409EFF;
     background-color: #409EFF;
    }
	  .m-content{
      text-align: center;
      margin-top: 10px;
      padding: 10px;
      font-size: 14px;
      list-style: none;
     
      
    }
    a:-webkit-any-link {
    color: #409EFF;
    text-decoration: none;
}

	 @media screen and (max-width:768px){
	     
  }


</style>