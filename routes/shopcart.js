const express = require("express")
const router = express.Router();
const pool = require("../pool");
//app.js: "/goods"
router.get("/", (req, res) => {
  // console.log(1111111111111)
  // console.log(req.query.uid)
  // console.log(req.query.product_id)
  var uid = req.query.uid
  var $iid = req.query.iid
  console.log($iid)
  console.log(req.query.ids)

  // 获取购物车数据
  var sql = 'SELECT * FROM listen_shoppingcart_item WHERE user_id=?'
  pool.query(sql, [uid], (err, result) => {
    if (err) {
      // console.log(err);
      res.send({
        code: 0
      });
    } else {
      // console.log(22222222222222222222222)
      res.send(result);
      console.log(result)
    }
  })
  // 删除
  var sql = "DELETE FROM listen_shoppingcart_item WHERE listen_shoppingcart_item.iid = ?"
  pool.query(sql, [$iid], (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result)
  })
})
module.exports = router;