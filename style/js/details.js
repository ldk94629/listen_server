
new Vue({
    el:"#app",
    data:{
      product:{},
        details:[],
        detail:[],
        fname:"",
        pics:[] ,
        srcs:"" ,
        p:1,
        uid:'',
    },
    created(){
      axios.get(
        "http://localhost:3000/details",
        {
          params:{
            lid:location.search.split("=")[1]
          }
        }
      ).then(result=>{
        console.log(result);
       this.product=result.data.product;
       this.details=result.data.details;
       this.fname=result.data.fname;
       this.detail=result.data.details;
       this.pics=result.data.pics;
       this.srcs=this.details[0].pic
        // this.specs=result.data.specs;
      })
    },
    watch:{
      product(){
    console.log(this.product)
    console.log(this.product.pic)
    console.log(this.product.title)
    },
    //   fname(){
    //      console.log(this.fname)
    //   },
    //   details(){
    // console.log(this.details)
    //   },
    //   pics(){
    //       console.log(this.pics)
    //   }
    },
    methods: {
      sccc(i){
        // console.log(i)
        this.srcs=this.details[i].pic
        console.log(this.srcs)

      },
      add(){
        this.p++;
      },
      reduce(){
       this.p>0?this.p--:"";
      },
      addBuy(){
      
        
        if(!sessionStorage.uid){
          window.location.href="http://127.0.0.1:5501/index/login.html"
        }else{
          window.location.href="http://127.0.0.1:5501/index/shopcart.html";
          console.log(1212222)}
        
        

      },
      addCart(){
          this.uid=sessionStorage.uid
        console.log(this.uid)
        if(!sessionStorage.uid){
          window.location.href="http://127.0.0.1:5501/index/login.html"
        }else{
          alert("在逛逛")   

      axios.get(
        "http://localhost:3000/details",
        {
          params:{
            sid:this.product.lid,
            title:this.product.title,
            price:this.product.price,
            p:this.p,
            uid:this.uid,
            url_img:this.product.pic
          }
        }
      )






      }
      
    }
    }}
    )
