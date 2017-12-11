<template>
  <div id="fh5co-main">
    <div class="fh5co-narrow-content">
      <h2 data-animate-effect="fadeInLeft" class="fh5co-heading animate-box fadeInLeft animated">
        Read Our Blog
      </h2>
      <!-- blogs -->
      <div class="row row-bottom-padded-md">
        <div data-animate-effect="fadeInLeft" class="col-md-3 col-sm-6 col-padding animate-box fadeInLeft animated">
          <div class="blog-entry">
            <a href="/main/detail/5a29ed6b4aafe35c288e791d" class="blog-img">
              <img src="/blog_pic/youxiia_1512697195508.jpg" alt="Free HTML5 Bootstrap Template by FreeHTML5.co" class="img-responsive">
            </a>
            <div class="desc">
              <h3><a href="#">LuBenWeiChiShi</a></h3>
              <span>
                <small> by youxiia </small>
                <small> /</small>
                <small><i class="icon-comment">Fri Dec 08 2017 09:39:55 GMT+0800 (中国标准时间)</i></small>
              </span>
              <p>
              </p>
              <a href="/main/detail/5a29ed6b4aafe35c288e791d" class="lead">Read More
                <i class="icon-arrow-right3"></i>
              </a>
            </div>
          </div>
        </div>        
      </div>
    </div>
    <!-- footer -->
    <div id="get-in-touch">
      <div class="fh5co-narrow-content">
        <div class="row">
          <div data-animate-effect="fadeInLeft" class="col-md-4 animate-box">
            <h1 class="fh5co-heading-colored">Get in touch</h1>
          </div>
        </div>
        <div class="row">
          <div data-animate-effect="fadeInLeft" class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box">
            <p class="fh5co-lead"></p>
            <p>
              <a href="#" class="btn btn-primary">Learn More</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    mounted:function(){
      $.getScript('/js/jquery.easing.1.3.js');
      $.getScript('/js/bootstrap.min.js');
      $.getScript('/js/jquery.waypoints.min.js');
      $.getScript('/js/jquery.flexslider-min.js');
      $.getScript('/js/main.js');      
    }
  }
</script>