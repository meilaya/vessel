<template>
  <div id="app">
    <tops />
    <Bars />
    <router-view />
    
    <bottoms />
  </div>
</template>

<script>

import tops from "./components/top"
import bottoms from "./components/bottom"
import Bars from "./components/bar"


export default {
  name: 'App', 
  data(){
      return{
      }
    },
    components:{
     tops,
      bottoms,
      Bars 
    }
}
</script>

<style>
 body{
   margin: 0px;
 }
</style>
