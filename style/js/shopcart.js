new Vue({
  el: "#add",
  data: {
    cc:'',

    //p1.price.toFixed(2)
    //   undefined  报错！
    //其它属性不需要再调用函数，所以即使是undefined也没有问题。又因为内容都是用v-text绑定的。v-text收到undefined后，不会报'
    iid: '',

    list: [],
    lists:'',
    str:'',
    sum:''
   
  },
  created() {
    this.loadMore()
    console.log(sessionStorage.uid[0])
    this.load()
  },
  methods: {
    alerts(){
      alert("功能暂未开放请等待")
    },
    load(){
      
      this.str="";
    
      //创建循环拼接字符串内容//
     for (var item of this.list){
        var  sum='';
        console.log(1111111111111111111)
          console.log(sum)
       if(item.is_checked){
         this.str+=item.iid+",";
         this.lists+=item.is_checked;
         console.log(22222222222222222222222222222)
      console.log(item.price)
        console.log(sum)

       }
     }
     console.log(this.sum)

     if(this.lists.length==this.list.length){
       this.cc=1
     }
    },
    loadMore() { 
      if (this.list.length > 0) {
        flag = 'true'
      } else {
        flag = 'flag'
      }
      axios.get(
        "http://127.0.0.1:3000/cart", {
          params: {
            uid: sessionStorage.uid[0]
          }
        }

      ).then(result => {
        console.log(result.data)
        this.list = result.data
      })


    },
    deletep(e) {
      console.log(e.target.dataset.id)
      this.iid = e.target.dataset.id;
      axios.get(
        "http://127.0.0.1:3000/cart", {
          params: {
            iid: this.iid
          }
        }

      ).then()
      this.loadMore()

    },


    selectAll(e) {

    console.log(11111111)
 console.log(this.lists)
    console.log(111111111111111111111)
    console.log(this.list.length)
    this.str=this.str.substring(0,str.length-1);
    console.log(this.str)
    if(this.str.length==0){
      alert("请选择要删除的商品")
      return
    }
   
    }
    ,
    
  }



})