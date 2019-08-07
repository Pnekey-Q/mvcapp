var express = require('express');
var app = express();
var swig = require('swig');
var app = express();
//设置swig页面不缓存
swig.setDefaults({
    cache: false
  })
  app.set('view cache', false);
  
  app.set('views','./views/');
  app.set('view engine','html');
  app.engine('html', swig.renderFile);



  app.use('/',express.static('./'));
// app.get('/',function(req,res,next){
//     res.send('helloworld');
// })
app.get('/',function(req,res,next){
    res.render('a',{
        title:'我的首页'
    });
})
app.get('/search',function(req,res,next){
    console.log(req.query.sa);
    var result = null;
    var data =[{
        name:'iphone',
        price:100
    },{
        name:'sanxing',
        price:100
    },{
        name:'nuojiya',
        price:100
    }]
    for(var i = 0;i<data.length;i++)
    {
        if(req.query.sa==data[i].name)
        {
            result = data[i];
            break;
        }
    }
    res.render('search',{
        title:'搜索页面',
        result:result
    });
})
app.get('/list',function(req,res,next){
    res.render('list',{
        title:'列表页',
        code:1,
        data:[{name:"iphone",price:'100'},{name:'sanxing',price:'100'},{name:'nuojiya',price:'100'}]
    })
})

app.listen(8080,function(){
    console.log('服务已经开启 端口是8080')
})
