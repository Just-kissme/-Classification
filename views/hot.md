
### 人气热门商品推荐
#### 1、效果
效果图为：<br>
![](http://github.com/HecateDK/-Classification/raw/master/views/hot.png)<br>
  主要要达到隔两秒自动向左无缝滑动，鼠标焦点在图片上时滑动静止、并且“上一张”“下一张”按钮可供手动切换。
#### 2、HTML内容
```HTML
<div class="wrapper sh-popular sh-popular-c">
			<div class="popular-header">
				<h4 class="popular-title">人气推荐</h4>
				<img class="popular-border" src="images/pic_separation_line.jpg"/>
			</div>
			<a class="arrow-con arrow-left" href="#"><img src="images/arrow_left.png" alt=""></a> 
	    <a class="arrow-con arrow-right" href="#"><img src="images/arrow_right.png" alt=""></a>
			<div class="swiper-container advblock-swiper-container">
				<div class="swiper-wrapper">
					<div class="swiper-slide popular-content" title="瑞希顿马尔代夫酒店">
                <div class="popular-goods">
                    <a href="#">
                        <img class="popular-img" src="images/pic_com_01.jpg" alt="瑞希顿马尔代夫酒店">
                        <div class="popular-intro">
                            <h4 class="popular-intro-title">瑞希顿马尔代夫酒店</h4>
                            <h6 class="popular-intro-exp">豪华泳池房两晚（含双早）</h6>
                            <h3 class="popular-intro-price">1000积分</h3>
                            <h6 class="popular-intro-sold">已售2201</h6>
                            <a href="" class="btn buy-immedistely">立即选购</a>
                        </div>
                    </a>
                </div>
            </div>
				  ......
      </div>
    </div>
  </div>
</div> 
```
#### 3、CSS内容
  主要是“上一张”“下一张”按钮的css：
 ```CSS
 .sh-popular{
    position: relative;
	  margin-top: 30px;
	  margin-bottom: 28px;
}
.arrow-con{
    display: none;
    background: no-repeat left top;
    position: absolute;
    margin-top: -15px;
    width: 28px;
    height: 70px;
    z-index:2;
}
.arrow-left {
    left: 5px;
    top: 50%;  
}
.arrow-right {
    right: 10px;
    top: 50%;
}
 ```
#### 4、javascript部分
```javascript
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
```



