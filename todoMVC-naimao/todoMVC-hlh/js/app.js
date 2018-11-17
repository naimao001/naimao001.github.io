;(function(Vue) {
	let vm = new Vue({
		el: ".todoapp",
		data: {
			todoList: [
				{ id: 1, name: "吃饭", completed: false },
				{ id: 2, name: "睡觉", completed: false },
				{ id: 3, name: "打豆豆", completed: true }
			],
      isShow: false,
      isSelected:'All',
      editingItem:null
		},
		methods: {
			addTodo(e) {
				if (e.target.value == "") return alert("请输入!")
				let newId = this.todoList.length + 1
				var newTodo = {
					id: newId,
					name: e.target.value,
					completed: false
				}
				this.todoList.unshift(newTodo)
				e.target.value = ""
			},
			deleteTodo(index) {
				if (window.confirm("别这样,那里脏")) {
					this.todoList.splice(index, 1)
				}
			},
			toggleAll() {
				// this.todoList.map((item) => {
				//   return item.completed = !item.completed
				// })
				this.todoList.forEach((item) => {
					item.completed = this.isShow
				})
			},
			// 当待办事项 全部 勾上后 全选框也选上  第一种方法
			eachChange() {
				let flag = this.todoList.every((item) => {
					return item.checkState == true
				})
				console.log(flag)
				this.isShow = flag
			}
		},
		computed: {
			leftNum() {
				let arr = this.todoList.filter((item) => {
					return item.completed == false
				})
				return arr.length
      },
      filterList(){
        switch(this.isSelected){
          case 'Active':
          return this.todoList.filter((item) => {
            return item.completed == false
          })
          case 'Completed':
          return this.todoList.filter((item) => {
            return item.completed == true
          })
          case 'All':
          return this.todoList
        }
      }
		}
	})
})(Vue)
