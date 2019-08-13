new Vue({
    el:"#pdd",
    data:{
    //p1.price.toFixed(2)
    //   undefined  报错！
      ps:[],//其它属性不需要再调用函数，所以即使是undefined也没有问题。又因为内容都是用v-text绑定的。v-text收到undefined后，不会报错
      
    },
    created(){
      axios.get(
        "http://localhost:3000/goods"
      ).then(result=>{
        console.log(result.data);
        this.ps=result.data;
      })
    },
    watch:{
      ps(){
        console.log(this.ps)
      }
    }
  })
  