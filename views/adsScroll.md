### Swiper插件

#### 1、Swiper插件简介
Swiper是开源、免费、强大的移动端触摸滑动插件，但它不仅仅应用于移动端，在PC端也有很好的体验,在github上已有9842stars。<br>
[Swiper英文网](http://idangero.us/swiper/#.WBvRYy197Dc)<br>
[Swiper中文网](http://www.swiper.com.cn/)<br>
Swiper的应用场景主要为：<br>
* Swiper为纯javascript打造的滑动特效插进，能实现触屏焦点图、触屏Tab切换、触屏多图切换等常用效果；
* Swiper拥有progress，可制作酷炫的3D切换效果；
* Swiper配合加上一些小动画，即可制作活灵活现的微场景、微海报。

官网上关于Swiper插件功能的介绍是：
![Powered With Top Notch Features](https://github.com/HecateDK/-Classification/raw/master/views/Swiper_power.png)

### 2、小demo
下面用项目所用到的部分代码，简单说一下Swiper的应用：
##### HTML代码
###### 1)、加载插件
```HTML
   <!DOCTYPE html>
   <html>
   <head>
       ...
       <link rel="stylesheet" href="path/to/swiper.min.css">
   </head>
   <body>
       ...
       <script src="path/to/swiper.min.js"></script>
   </body>
   </html>
```
  如果页面已经加载了jQuery.js或者zepto.js，可以选择加载更轻便的[swiper.jquery.min.js](http://www.swiper.com.cn/download/index.html)
###### 2)、HTML内容
```HTML
<!-- 注意swiper-container/swiper-wrapper/swiper-slide的包含关系 -->
<div class="yz-scroll">
      <div class="swiper-container bigblock-swiper-container">
          <div class="swiper-wrapper">
              <div class="swiper-slide swiper-no-swiping" title=""><a href="#"><img src="images/pic_index_banner.jpg" alt=""></a></div>
              <div class="swiper-slide swiper-no-swiping" title=""><a href="#"><img src="images/pic_index_banner.jpg" alt=""></a></div>
              <div class="swiper-slide swiper-no-swiping" title=""><a href="#"><img src="images/pic_index_banner.jpg" alt=""></a></div>
          </div>
           <!-- 如果需要导航按钮 -->
           <div class="swiper-button-prev"></div>
           <div class="swiper-button-next"></div>

           <!-- 如果需要滚动条 -->
           <div class="swiper-scrollbar"></div>

           <!-- 如果需要分页器 -->
           <div class="swipers-pagination bigblock-swiper-pagination"></div>
      </div>
</div>
```
###### 3)、给Swiper定义一个大小
```CSS
.bigblock-swiper-container {
    height: 450px;
    width: 948px;
}
```
###### 4)、初始化Swiper
  Swiper有多种配置选项、方法、函数，运用起来非常灵活，效果多样，<br>
  可查看[http://idangero.us/swiper/api/#.WBvllS197Dc](http://idangero.us/swiper/api/#.WBvllS197Dc)详细介绍。<br>
  我主要用了以下参数配置：
```javascript
    var bigBlockSwiper;
    bigBlockSwiper = new Swiper(".bigblock-swiper-container",{
        loop: true,   //可选项,值为true时开启loop模式——会在wrapper前后生成若干个slides让slides看起来是衔接的，用于无限循环切换
        mode: "horizontal",   
        slidesPerView: 1,
        autoplay: 5000,    //自动切换的时间间隔（单位ms），不设定该参数slide不会自动切换
        autoplayDisableOnInteraction: false,    //值为false时，用户操作swiper之后自动切换不会停止
        pagination: '.bigblock-swiper-pagination',   //分页器容器的css选择器或HTML标签
        paginationClickable: true       //值为true时，点击分页器的指示点分页器会控制Swiper切换
    });
```
