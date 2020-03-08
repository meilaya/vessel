/*2020年2月28日创建*/
/*程序的入口文件*/
var express = require('express');
var swig = require('swig');
var app = express();
//设置静态文件
//当用户访问的url以public开始，那么直接返回对应文件
app.use('/public',express.static(__dirname + '/public'));
//配置模板
//定义应用所使用的模板引擎
//第一个参数表示模板引擎名称也是后缀,第二个解析处理模板内容的方法
app.engine('html',swig.renderFile);

//设置模板文件存放的目录，第一个参数必须是views，第二个参数是目录
app.set('views','./views');

//注册模板引擎，第一个参数必须是view engine;第二个参数和app。engine这个方法中定义的模板引擎的名称
app.set('view engine','html');

swig.setDefaults({catch:false});
app.use('/admin',require('./routers/admin'));
app.use('/api',require('./routers/api'));
app.use('/',require('./routers/main'));

app.listen(8888);                
