$(function () {
	/*
		 顶部选择切换 START
	 */
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
	 /*$(".sh-choice-c li").mouseenter(function(){
	 	$(this).parents().parents().find(".list-content-c").removeClass("display-block");
	 }).mouseout(function(){
	 	$(this).parents().parents().find(".list-content-c").addClass("display-block");
	 });
	 $(".home-wrapper-c").mouseenter(function(){
	 	$(".choice-content").addClass("display-block");
	 }).mouseout(function(){
	 	$(".choice-content").removeClass("display-block");
	 });*/
	/*
		 顶部选择切换 END
	 */

	/*
		 广告长图滚动 START
	 */
	/*$(".big-swiper-container").each(function (k, v){
		//_this swiper-container
		var _this = $(this),
			_page = _this.find(".pagination-c");
		var _class = _this.attr("class").split(" ")[0];       //split（） 字符串的分割函数（把一个字符串分割成字符串数组），如果参数为空则每个字符都切割
		//id 区分swiper-container 和 pagination
		_this.attr("id", _class + k);
		_page.attr("id", "pagination" + k);

		console.log(_this.attr("id"));
		//初始化Swiper插件
		new Swiper( "#" + _this.attr("id"), {
		    autoplay : 5000, //可选选项，自动滑动
		    loop : true, //可选选项，开启循环
		    pagination : '#pagination' + k, 
		    paginationClickable : true
		})
	});*/
    var bigBlockSwiper;
    bigBlockSwiper = new Swiper(".bigblock-swiper-container",{
        loop: true,
        mode: "horizontal",
        slidesPerView: 1,
        autoplay: 5000,
        autoplayDisableOnInteraction: false,
        pagination: '.bigblock-swiper-pagination',
        paginationClickable: true
    });
	/*
		 广告长图滚动 END
	 */


	/*
		 人气推荐 热门商品  START
	 */
	 //判断只有一个slide的时候隐藏分页器和静止
    function onlySlide (ele, swiper){
        var slidesLength = 0;
        if (ele instanceof jQuery) {       //instanceof判断一个实例是否属于某种类型
            var _this = ele;
        } else {
            var _this = $(ele);
        }
        slidesLength = parseInt(_this.attr("data-length"));
        if (slidesLength == 1) {
            _this.find(".swipers-pagination").hide();
            swiper.params.loop = false;
            swiper.params.autoplay = false;
            swiper.params.noSwiping = true;
        }

    }
    var advBlockSwiper;
    advBlockSwiper = new Swiper(".advblock-swiper-container", {
        loop: true,
        mode: "horizontal",
        slidesPerView: 3,
        autoplay: 4000,
        prevButton:'.swiper-button-prev',
		nextButton:'.swiper-button-next',
        autoplayDisableOnInteraction: false
    });
	$('.arrow-left').on('click', function(e){
    	e.preventDefault()
	    advBlockSwiper.swipePrev()
	})
	$('.arrow-right').on('click', function(e){
	    e.preventDefault()
	    advBlockSwiper.swipeNext()
	})
	/*$(".advblock-swiper-container").hover(function(){
		$(".arrow-left").attr("display","block");
		$(".arrow-right").attr("display","block");
	})*/
	 /*
		 人气推荐 热门商品  END
	 */
	 /* 
		点击选购
	 */
	 $(".content-right-list").hover(function(){
	 	$(this).find(".list-goods-buy").addClass("display-block");
	 },function(){
	 	$(this).find(".list-goods-buy").removeClass("display-block");
	 });
	 /* 
	 	热气推荐左右按钮
	 */
	  $(".sh-popular-c").hover(function(){
	 	$(this).find(".arrow-left").addClass("display-block");
	 	$(this).find(".arrow-right").addClass("display-block");
	 },function(){
	 	$(this).find(".arrow-left").removeClass("display-block");
	 	$(this).find(".arrow-right").removeClass("display-block");
	 });
	  /* 
	 	左侧固定导航栏
	 */
	 $(".elevator-list").hover(function(){
	 	$(this).find(".elevator-item-select").addClass("display-block");
	 },function(){
	 	$(this).find(".elevator-item-select").removeClass("display-block");
	 });
});