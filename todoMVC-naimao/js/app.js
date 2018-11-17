(function (Vue) {
	//定义数组
	const fruitz = [{
			id: 1,
			name: '苹果',
			checkstate: true
		},
		{
			id: 2,
			name: '香蕉',
			checkstate: true
		},
		{
			id: 3,
			name: '葡萄',
			checkstate: false
		}
	]
	const vm = new Vue({
		el: document.getElementById('apps'),//也可以放dom元素
		data: {
			fruits: fruitz,
			//修改中项
			editingItem: null,
			//过滤的根据
			filterState: 'all'
		},
		methods: {
			//新增
			addTodo(e) {
				// var newItem = {name:} 
				//获取事件触发源 的value 值 即拿到文本框输入的值
				var txtObjValue = e.target.value
				//拿到数组内最后一个元素
				var lastItem = this.fruits[this.fruits.length - 1]
				//将 将要添加的新对象的id 拿到 (用数组里最后 一个元素的id+1 如果是空数组,那么就给1)
				var newItemId = lastItem ? lastItem.id + 1 : 1
				//将新对象添加进 fruit数组中
				this.fruits.push({
					id: newItemId,
					name: txtObjValue,
					checkstate: false
				})
				//清空文本框
				e.target.value = ''
			},
			//移除单项
			removeItem(id) {
				/** 其实传 数组索引就可以了 数组索引就是要删的那个id */
				//找到要删除的元素的 在数组中的索引
				var index = this.fruits.findIndex((item) => {
					return item.id == id
				})
				//通过数组的splice方法删除
				this.fruits.splice(index, 1)
			},
			//移除全部已完成的项
			removeAllCompleted() {
				//利用数组过滤方法 会返回过滤后的数组  过滤掉没勾上的项 也就是checkstate是false的
				this.fruits = this.fruits.filter((item) => {
					return item.checkstate == false
				})
			},
			//用于给filterState 赋值
			judgeState(state) {
				this.filterState = state
			},
			//全选/反选
			toggleAll(e) {
				// console.log(11)
				var targetObjChecked = e.target.checked
				this.fruits.forEach(item => { //forEach E是大写!!!!!!!!!!!!!
					item.checkstate = targetObjChecked
				})
			}
		},
		//计算属性
		computed: {
			filterFruits() {
				switch (this.filterState) {
					case 'active':
						return this.fruits.filter(item => {
							return item.checkstate == false
						})
						break
					case 'completed':
						return this.fruits.filter(item => {
							return item.checkstate == true
						})
						break
					default:
						return this.fruits
						break
				}
			}
		},
		//自定义指令
		directives: {
			'myfocus': {
				inserted:function (el) {
					//el 是 放置自定义指令 元素 binding是指令内单引号内的值 
					// console.log(11)
					el.focus()
				}
      },
      'dbleavefoucus':{
        update:function (el,binding) {
          if (binding.value)
          el.focus()
				}
      }
		}
  })
  //示例做法 当url上哈希值改变 将哈希值的 #/ 替换成空 那么得到的字符串即是 我们想要给filterState的值
  // window.onhashchange = function () {
	// 	const hashStr = location.hash.replace("#/","");
	// 	vm.filterState = hashStr;
	// }

})(Vue);
