
## 商城头部简易切换选项


##### 先上效果图：
![商城头部简易切换选项](https://github.com/HecateDK/-Classification/raw/master/views/F1FF.tmp.jpg)
##### HTML代码块
```html
<!-- 顶部选择项目 START -->
		<div id="section_1" class="wrapper home-wrapper-c">
			<ul class="g-clear sh-choice sh-choice-c">
				<li class="sh-choice-list"><a href="#"><img src="images/food.png" alt="美食"><span class="choice-item">美食</span></a></li>
				<li class="sh-choice-list"><a href="#"><img src="images/hotel.png" alt="休闲娱乐"><span class="choice-item">休闲娱乐</span></a></li>
				<li class="sh-choice-list"><a href="#"><img src="images/KTV.png" alt="便民服务"><span class="choice-item">便民服务</span></a></li>
				<li class="sh-choice-list"><a href="#"><img src="images/travel.png" alt="酒店"><span class="choice-item">酒店</span></a></li>
				<li class="sh-choice-list"><a href="#"><img src="images/travel.png" alt="旅游"><span class="choice-item">旅游</span></a></li>
				<li class="sh-choice-list"><a href="#"><img src="images/food.png" alt="其他"><span class="choice-item">其他</span></a></li>
			</ul>
			<div class="choice-content">
					<ul class="g-clear list-content-c"><li class="content-list"><a href="#" class="list-item">美食</a></li>...</ul>
					<ul class="g-clear list-content-c"><li class="content-list"><a href="#" class="list-item">休闲娱乐</a></li>...</ul>
					<ul class="g-clear list-content-c"><li class="content-list"><a href="#" class="list-item">便民服务</a></li>...</ul>
					<ul class="g-clear list-content-c"><li class="content-list"><a href="#" class="list-item">酒店</a></li>...</ul>
					<ul class="g-clear list-content-c"><li class="content-list"><a href="#" class="list-item">旅游</a></li>...</ul>
					<ul class="g-clear list-content-c"><li class="content-list"><a href="#" class="list-item">其他</a></li>...</ul>
				</div> 
		</div>
		<!-- 顶部选择项目 END -->
```
	RGBA颜色半透明背景解决兼容性的问题主要参考了张鑫旭的一篇博客:
	[RGBA颜色与兼容性的半透明背景色](http://www.zhangxinxu.com/wordpress/?p=839)
```CSS
 background: rgba(0,0,0,0.5);
 filter: progid:DXImageTransform.Microsoft.gradient(startcolorstr=#7F000000,endcolorstr=#7F000000);
```

#### javascript代码块
```javascript
	var goodsShowChange = $(".home-wrapper-c");
	goodsShowChange.each(function(){
		var tabs,_this,items;
		_this = $(this);
		items = _this.find(".sh-choice-c li");
		tabs = _this.find(".list-content-c");
		items.on("mouseenter",function(){
			var _index;
			_this = $(this);
			_index = _this.index();
			tabs.hide().eq(_index).show();
		});
		return items.eq(0).trigger("mouseenter");
	});
```
