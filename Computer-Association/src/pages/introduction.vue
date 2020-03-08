<template>
  <div>
    <div>
      <img src="../assets/new-img.jpg" width="100%" height="200px">
    </div>
    <div class="explain">学会概况</div>
    <div class="content">
      <h2 class="text-info">学会简介</h2>
        <hr class="index-bor">
          <div class="main">
               <span class="title">第十一条 </span>学校设立由学校领导和相关职能部门负责人组成的招生工作领导小组，全面负责贯彻执行教育部和有关省（自治区、直辖市）招生委员会的有关招生工作政策，负责制定招生章程、招生规定和实施细则、确定招生规模和调整学科招生计划，领导、监督招生工作具体实施，协调处理招生工作中的重大事项。 <br/>
                <span class="title">第十二条</span> 招生办公室为学校招生工作领导小组的执行机构，其主要职责是根据学校的招生规定和实施细则，编制招生计划，组织招生宣传和 录取工作，处理普通全日制本、专科（高职）招生的日常事务。<br/> 
                <span class="title">第十三条 </span>学校设立由学校领导和纪检监察部门组成的招生监督小组，对招生工作实施监督。在录取期间成立信访组，安排专人负责考生的信访、申诉、投诉处理工作 <br/>
                <span class="title">第十二条 </span>招生办公室为学校招生工作领导小组的执行机构，其主要职责是根据学校的招生规定和实施细则，编制招生计划，组织招生宣传和 录取工作，处理普通全日制本、专科（高职）招生的日常事务。 <br/>
               <span class="title">第十三条</span> 学校设立由学校领导和纪检监察部门组成的招生监督小组，对招生工作实施监督。在录取期间成立信访组，安排专人负责考生的信访、申诉、投诉处理工作<br/>
                 <span class="title"> 第十二条 </span>招生办公室为学校招生工作领导小组的执行机构，其主要职责是根据学校的招生规定和实施细则，编制招生计划，组织招生宣传和 录取工作，处理普通全日制本、专科（高职）招生的日常事务。<br/> 
                  <span class="title">第十三条  </span>学校设立由学校领导和纪检监察部门组成的招生监督小组，对招生工作实施监督。在录取期间成立信访组，安排专人负责考生的信访、申诉、投诉处理工作 
          </div> 
          </div>
          </div>
    </div>
  </div>
	
</template>
			


<script>
export default {
    name:"introduction",
    data(){
      return{
     
}
 }    
}
</script>

<style scoped>
  .index-bor {

      height: 2px;
      border: none;
      border-top: 2px solid #409EFF;
      margin-top: 20px;
      margin-bottom: 20px;
     } 
     .text-info{

      text-align: center;
     
      font-size: 18px;
      color:  #409EFF;


    } 
    .main{
      font-family: kaiti;
    }
    .explain{
      width: 200px;
     height: 40px;
     text-align: center;
     line-height: 40px;
     background-color:  #409EFF;
     opacity: 0.1px;
     color: #fff;
     position: absolute;
     top:230px;

    
         }
    .content{
      margin: 50px 100px 20px 100px;


    }
    .title{
      color: red;
    }
     @media screen and (max-width:768px){
       .content{
      margin: 20px 20px 20px 20px;
      font-size: 12px;


    }
     .explain{
     
       width: 100px;
     height: 30px;
     font-size: 12px;
      line-height: 30px;
     position: absolute;
     top:310px;
    }
    .text-info{

      font-size: 13px;
      color:  #409EFF;


    } 
  }
  
  
</style>