### 地区选择——三级联动

* 数据结构：json（一个key对应一个value）
* 利用ajax和data-*来实现数据筛选
效果图：
【】
##### HTML内容
```HTML
<div class="area-header">
  <div class="area-current">
    <span class="current-enter">进入</span>
    <span class="current-city">广州</span>
  </div>
  <form action="" class="area-change">
    <span class="choice-way">按省份选择：</span>
    <select name="" id="pronvince-select" class="pronvince-select">
      <option value="请选择省">请选择省</option>
    </select>
    <select name="" id="city-select" class="city-select">
      <option value="请选择市">请选择市</option>
    </select>
    <select name="" id="area-select" class="area-select">
      <option value="全部">全部</option>
    </select>
    <a href="#" class="btn-sure select-btn">确定</a>
    <div class="direct-search">
      <span class="direct-select">直接输入：</span>
      <input type="text" id="direct-input" class="direct-input" placeholder="请输入城市中文或拼音">
      <a href="#" class="btn-sure input-btn">确定</a>
      <div class="smalilaty-select">
    </div>
    </div>
    </form>
</div>
```

##### 主要javascript代码块
```javascript
$.ajax({
			type:'post',
			url:'area.json',
			dataType:'json',
			success:function(data){
				var area = data[_val];
				console.log(area);
				for(var i in area){
					$('#city-select').append('<option value="'+area[i]['area_id']+'" data-pid="'+area[i]['area_parent_id']+'">'+area[i]['area_name']+'</option>');
				};
			}
});



//省市联动确认按钮操作
	$('.select-btn').click(function(){
		var provinces = $('#provinces_select').val();
		var city = $('#city_select').val();
		
		if(provinces && city){
			window.location.href = "#";
		}else{
			alert('请先选择地区！');
		}
	});
	//城市点击操作
	$('.input-btn').click(function(){
		var provinces = $(this).attr('data-pid');
		var city = $(this).attr('value');
		
		if(provinces && city){
			window.location.href = "#";
		}else{
			alert('请先选择地区！');
		}

	});

	$(".direct-search").hover(function(){
		$(".smalilaty-select").addClass("display-block");
	},function(){
		$(".smalilaty-select").removeClass("display-block");
	});


	//输入城市名框操作
	$("#direct-input").keyup(function(){
		var value = $(this).val();
		if(value){
			$.ajax({
				type:'post',
				url:'area.json',
				data:['area_name',value],
				dataType:'json',
				success:function(data){
					$('.smalilaty-select').find('.smalilaty-list').remove();
					if(data){
						for(var i in data){
							$('.smalilaty-select').append('<div class="smalilaty-list" data-pid="'+data[i].area_parent_id+'" data-id="'+data[i].area_id+'">'+data[i]['area_name']+'</div>');
						}
					}
				}
			});
		}else{
			$('.smalilaty-select').find('.smalilaty-list').remove();
		}
	});

	//继上 确认操作
	$('.smalilaty-list').click(function(){
		var _this = $(this);
		
		$('#city_input').text(_this.text());
		$('#city_input').attr('data-parent',_this.attr('data-parent'));
		$('#city_input').text('data-city',_this.attr('data-city'));
	});

	$('.area-letter-list').click(function(){
		
		var py = $(this).text();
		$('.letter-item').removeClass('hover');
		
		$('.letter-item').each(function(){
			if($(this).text() == py){
				$(this).addClass('hover');
			}
		});
	});

````
