/**
 * 事件类
 * */
function E() {
	this.eventCallback = {};
}

E.prototype = {
	
	// 绑定事件，说白了就是根据事件类型，把回调存储起来
	on: function(type, cbk) {
		/**
		 * 1、先去eventCallback属性中以type为key查找对应的数组
		 * 2、如果没有这个数组则初始化为一个空数组，有则直接使用之前初始化好的
		 * 3、把回调存储到这个数组中
		 * */
		this.eventCallback[type] = this.eventCallback[type] ? this.eventCallback[type]: [];
		this.eventCallback[type].push(cbk);
		
		// 这句话相当于上面两句话的合体
		// (this.eventCallback['click'] || (this.eventCallback['click'] = [])).push(cbk);
	},
	
	// 移除事件，说白了就是根据事件类型，把对应的回调删除
	off: function(type) {
		
		// 把对应的事件数组重置，重置之后所有的回调就没有了
		this.eventCallback[type] = [];
	},
	
	// 触发事件，说白了就是根据事件类型，找到存储回调的数组，遍历它们依次执行
	trigger: function(type) {
	
		/**
		 * 1、先去eventCallback属性中以type为key查找对应的数组
		 * 2、如果没有，说明没有监听过这个事件，就不用做任何事情
		 * 3、如果有，则遍历这个数组，依次执行里面的回调
		 * */
		
		if(!this.eventCallback[type]) {
			return;
		}else {
			this.eventCallback[type].forEach(function(cbk, i) {
				cbk();
			});
		}
		
		// 如果有对应的数组，则遍历执行；如果没有则使用一个空数组调用forEach防止报错。
//		(this.eventCallback[type] || []).forEach(function(cbk, i) {
//			cbk();
//		});
	}
};
