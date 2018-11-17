(function (Vue) {
	//定义数组
	const fruitz = [
	{
		id : 1,
		name : '苹果',
		checkstate : true
	},
	{
		id : 2,
		name : '香蕉',
		checkstate : true
	},
	{
		id : 3,
		name : '葡萄',
		checkstate : false
	}
	]
	
	window.vm = new Vue({
		el : '#apps',
		data:{
			fruits : fruitz,
			editstate : null,
			filterStat : 'all'
		},
		computed : {
			
			fruitsFilter : function () {
				
				switch(this.filterStat){
					case 'active' : 
					return this.fruits.filter(function (item) {
						return item.checkstate === false
					})
					break;
					case 'completed' :
					return this.fruits.filter(function (item) {
						return item.checkstate === true
					})
					break;
					default :
					return this.fruits
					break;
				}
			},
			itemleft : function () {
				return this.fruitsFilter.length;
			},
			toggleAllStat : function () {
				return this.fruits.filter(item => item.checkstate === false);
			}
		},
		methods:{
		toggleall:function (event) {
			const check = event.target.checked;
			this.fruits.forEach(function(item){
					item.checkstate = check;
			})
		},
 
		addTodo : function (event){
			const valueStr = event.target.value;
			var lastFruits = this.fruits[this.fruits.length-1];
			var idStr = lastFruits ? lastFruits.id+1 : 1;
			this.fruits.push({
					id : idStr,
					name : valueStr,
					checkstate : false
				})
			
			event.target.value = '';
		},
 
		removeItem : function (index) {
			this.fruits.splice(index,1);
		},
 
		removeALLDone : function () {
 
			this.fruits =  this.fruits.filter(function(item){
				return !item.checkstate
			})
		},
 
		editInput:function () {
			console.log('editInput');
		},
 
		editSave : function (item,event) {
				this.editstate = null;
		}
		},
		directives : {
			focuz : {
				inserted : function (el) {
					el.focus();
				}
			},
			dblfocus : {
				update : function (el,binding) {
					console.log(binding.value);
					if(binding.value){
						console.log('fff');
						el.focus();
					}
					
				}
			}
		}
	})
 
	window.onhashchange = function () {
		const hashStr = location.hash.replace("#/","");
		vm.filterStat = hashStr;
	}
 
})(Vue)
