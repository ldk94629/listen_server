$(function(){
    $.ajax({
      url:"header.html",
      type:"get",
      success:function(result){
        // console.log(result)
        $(result).replaceAll("header");
        //动态创建link元素，引入header.css,自动添加到<head>元素中
        $(`<link rel="stylesheet" href="../../style/css/header.css">`).appendTo("head");
      }
    })
  })
  // $(function(){
  //   $.ajax({
  //     url:"header.html",
  //     type:"get",
  //     success:function(result){
  //       $(result).replaceAll("header");
  //       //动态村创建link元素;引入header.css.自动添加到head元素中;
  //       $(`<link rel="stylesheet" href="css/header.css">`).appendTo("head");
  //     }
  //   })
  // })