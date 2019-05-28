new Vue({
	el:"#vue-app",
	data:{
		name:"郭俊清",
		job:"我爱你",
		website:"http://qhappyman.github.io",
		websiteTag:"<a href='https://qhappyamn.github.io'>标签</a>",
		age:'19',
		x:0,
		y:0
	},
	methods:{
		greet:function(my){
			return my//直接拿name，不需要this.data.name this指向Vue对象
		},
		add:function(number){
			this.age +=number;
		},
		XYget:function(event){
			this.x = event.offsetX;
			this.y = event.offsetY;
		}
	}
});
//el:element 获取的元素，html中跟容器元素
//data 存储数据(对象)
//methods 存储各种方法
// document.getElementById
// xyGet

