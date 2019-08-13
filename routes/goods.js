const express=require("express")
const router=express.Router();
const pool=require("../pool");
//app.js: "/goods"
router.get("/",(req,res)=>{
	var sql='SELECT * FROM `listen_laptop` '
	  pool.query(sql,(err,result)=>{
    if(err){
      console.log(err);
      res.send({code:0});
    }else{
      res.send(result);

    }
  })
})
module.exports=router;