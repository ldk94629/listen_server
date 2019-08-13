const express=require('express');
const pool=require('../pool.js');
var router=express.Router();
//注册
	router.post("/reg",function(req,res){
			var obj=req.body;
			console.log(obj)
			console.log(111)
			var sql="select * from listen_user where uname=?"
		pool.query(sql,[obj.uname],(err,result)=>{
			if (err) throw err
				if(result.length>0){
					console.log(result)
					res.send('0')//用户不可用
				}else{res.send('1')//用户可用
					}
		})
	})
	router.post("/ajaxreg",function(req,res){
		var obj=req.body;
       console.log(111111)
		console.log(obj.uname)
		    var sql="insert into listen_user set ?"
		   pool.query(sql,[obj],function(err,result){
				if(err) throw err;
				if(result.affectRows>0){
				   res.send("1")
				}else{( res.send("0"))}
		   })
	})
// ////////////////////////////////////////////////////////////////////
//登录
router.post("/sgin",function(req,res){
    var obj=req.body;

    if(!obj.uname){
        res.send({code:401,msg:"uname required" })
        return;
    }
    if (!obj.upwd){
        res.send({code:402,msg:"upwd requires"})
        return;
    }
	pool.query('SELECT *FROM listen_user WHERE uname=? AND upwd=?',[obj.uname ,obj.upwd],function(err,result){
	
			if(err) throw err;
				console.log(result)
			if(result.length>0){
				res.send(result);
			}
			else{
				res.send({code:301,msg:'login err'});
			};
			});
	})
module.exports=router;
