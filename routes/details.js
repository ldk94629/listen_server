const express=require("express")
const router=express.Router();
const pool=require("../pool")
//app.use("/details",Details)
//服务端接口地址http://localhost:3000/details
//客户端请求时:
//http://localhost:3000/details?lid=1
router.get("/",(req,res)=>{
  var lid=req.query.lid;
  var sid=req.query.sid;
  var title=req.query.title;
  var price=req.query.price;
  var p=req.query.p;
  var uid=req.query.uid;
  var url_img=req.query.url_img;
  var title=req.query.title
  // console.log(req.query)
  var output={
    product:{},
    details:[],
    fname:"",
  pics:[]
  }
  if(lid!==undefined){
    var sql1=`select * from listen_laptop where lid=?`;
    pool.query(sql1,[lid],(err,result)=>{
      if(err) console.log(err);
  //  console.log(result.length)
        output.product=result[0];
       // console.log( output.product)
        var fid=output.product["lpid"];
        var url_img= output.product['pic']
       // console.log(fid)
        var sql2=`select * from listen_laptop where lpid=?`;
        pool.query(sql2,[fid],(err,result)=>{
           if(err)throw err
           // console.log(result)
            output.details=result;
          // console.log(output.product.details[0]) 
        })

      var sql3=`select fname from listen_laptop_family where fid=?`;
      pool.query(sql3,[fid],(err,result)=>{
          if(err) {throw err}
      output.fname=result[0]['fname'];
        // console.log(result[0]["fname"])
            // console.log(result.length)
            //console.log(output)
      })
      var sql4=`SELECT * FROM listen_lop_details where ldid=?`;
      pool.query(sql4,[fid],(err,result)=>{
          if(err) {throw err}
      output.pics=result[0];
        // console.log( output.pics)
            // console.log(result.length)
            //console.log(output)
      res.send(output)
    })
})
  }else{
    res.send(output)

  }
  if(uid!=undefined){
    var obj={};
    obj.user_id=uid;
    obj.product_id=sid;
    obj.count=p
    obj.url_img=url_img
    obj.v_title=title
    obj.v_price=price
    //console.log(obj)
    // console.log(uid)
    //  console.log(sid)
    // console.log(p)
    pool.query('SELECT * FROM listen_shoppingcart_item where product_id=?',[sid],function(err,result){
      if(err){throw err}
      // console.log(123333)
      // console.log(result)
      if(result.length>0){
        // console.log(111111111111111111111111111)
        // console.log(result)
        // console.log(result[0].count)
      var count=result[0].count+1
       

      var sql6=`UPDATE listen_shoppingcart_item SET count =? WHERE product_id =?`
      pool.query(sql6,[count,sid],function(err,result){
        if(err){throw err}
         console.log(result)
      })
      // console.log(p)
    }
      else{
        // console.log(12333333333333333333333)
       pool.query('INSERT INTO listen_shoppingcart_item SET ?',[obj],function(err,result){
          if(err) {throw err}
          console.log(result)
        });
       }
    })

  }
  })


module.exports=router;