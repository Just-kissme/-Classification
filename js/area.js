$(function () {
	var letterCity = $(".letter-city-list");

	letterCity.each(function(){
		var _this = $(this);
		var lists = _this.find(".letter-city-content");
		var item = _this.find(".letter-item");
		lists.on("mouseover",function(){
			item.addClass("hover");
		});
		lists.on("mouseout",function(){
			item.removeClass("hover");
		});
	});




	//省份选择
	$.ajax({
		type:'post',
		url:'area.json',
		dataType:'json',
		success:function(data){
			var area = data[0];
			for(var i in area){
				$('#pronvince-select').append('<option value="'+area[i]['area_id']+'" data-pid="'+area[i]['area_parent_id']+'">'+area[i]['area_name']+'</option>');
			};
		}
	});
	//城市选择
	$('#pronvince-select').change(function(){
		$("#area-select").find('option').remove();
		$('#area-select').append('<option value="0">全部</option>');
		$("#city-select").find('option').remove();
		$('#city-select').append('<option value="0">请选择市</option>');
		var _val = $(this).val();
		/*$(this).after('<select name="" id="city-select" class="city-select">'+
					'<option value="请选择市">请选择市</option>'+
				'</select>');*/
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
	});
	
	//地区选择
	$(".city-select").change(function(){
		$("#area-select").find('option').remove();
		$('#area-select').append('<option value="0">全部</option>');
		var _val = $(this).val();
		$.ajax({
			type:'post',
			url:'area.json',
			dataType:'json',
			success:function(data){
				var area = data[_val];
				console.log(area);
				for(var i in area){
					$('#area-select').append('<option value="'+area[i]['area_id']+'" data-pid="'+area[i]['area_parent_id']+'">'+area[i]['area_name']+'</option>');
				};
			}
		});
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

	});