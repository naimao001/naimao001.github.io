(function(Vue) {
	let todoList = [
		{
			id: 1,
			name: "打篮球",
			checkState: true
		},
		{
			id: 2,
			name: "敲代码",
			checkState: true
		},
		{
			id: 3,
			name: "打游戏",
			checkState: false
		}
  ]
  Vue.directive('myfocus', {
    // 当被绑定的元素插入到 DOM 中时……
    inserted: function (el) {
      // 聚焦元素
      el.focus()
    }
  })
	let vm = new Vue({
    el:".todoapp",
    data:{
      todoList:todoList,
      editObj:null,
      isSelected:'all'
    },
    methods:{
      //新todo
      addTodo(e){
        // console.log(e.target.value)
        if(e.target.value =='') return alert('请输入要爱做的事')
        //搞一个新id
        let newId = this.todoList.length+1
        let newTodo = {
          id:newId,
          name:e.target.value,
          checkState:false
        }
        this.todoList.unshift(newTodo)
        e.target.value = ''
      },
      deleteTodo(index){
        this.todoList.splice(index,1)
      },
      clearAll(){
        this.todoList = this.todoList.filter((item)=>{
          return item.checkState == false
        })
      },
      juadeState(status){
        this.isSelected = status
      },
      toggleAll(){
        this.todoList.map((item) => {
          item.checkState = !item.checkState
        })
      }
    },
    computed:{
      newTodoList(){
        switch(this.isSelected){

          case 'active': 
         return this.todoList.filter((item) => {
            return item.checkState == false
          })

          case 'completed': 
          return this.todoList.filter((item) => {
            return item.checkState == true
          })
          case 'all': 
          return this.todoList
          
        }
      }
    }
  })
})(Vue)

