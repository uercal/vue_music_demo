<template>
  <div id="fh5co-main">    
    <aside id="fh5co-hero" class="js-fullheight">
          <div class="flexslider js-fullheight">
            <ul class="slides">
              <li style="background-image: url(images/img_bg_1.jpg);">
                <div class="overlay"></div>
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-md-8 col-md-offset-2 text-center js-fullheight slider-text">
                      <div class="slider-text-inner">
                        <h1><strong>Welcome Uercal</strong></h1>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style="background-image: url(images/img_bg_2.jpg);">
                <div class="overlay"></div>
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-md-8 col-md-offset-2 text-center js-fullheight slider-text">
                      <div class="slider-text-inner">
                        <h1> </h1>
                        <h2>Welcome</h2>
                        <p>
                          <a href="#" class="btn btn-primary btn-demo popup-vimeo">
                          <i class="icon-monitor"> </i>
                          Live Preview 
                          </a>
                          <a class="btn btn-primary btn-learn">
                            Learn More <i class="icon-arrow-right3"> </i>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style="background-image: url(images/img_bg_3.jpg);">
                <div class="overlay"></div>
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-md-8 col-md-offset-2 text-center js-fullheight slider-text">
                      <div class="slider-text-inner">
                        <h1></h1>
                        <h2></h2>
                        <p>
                          <a href="#" class="btn btn-primary btn-demo popup-vimeo">
                          <i class="icon-monitor"> </i>
                          Live Preview 
                          </a>
                          <a class="btn btn-primary btn-learn">
                            Learn More <i class="icon-arrow-right3"> </i>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </aside>        
        <div class="fh5co-narrow-content">
          <h2 data-animate-effect="fadeInLeft" class="fh5co-heading animate-box">Services</h2>
          <div class="row">
            <div class="col-md-6">
              <div data-animate-effect="fadeInLeft" class="fh5co-feature animate-box">
                <div class="fh5co-icon"><i class="icon-settings"></i></div>
                <div class="fh5co-text">
                  <h3>Strategy</h3>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div data-animate-effect="fadeInLeft" class="fh5co-feature animate-box">
                <div class="fh5co-icon"><i class="icon-search4"></i></div>
                <div class="fh5co-text">
                  <h3>Explore</h3>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div data-animate-effect="fadeInLeft" class="fh5co-feature animate-box">
                <div class="fh5co-icon"><i class="icon-paperplane"></i></div>
                <div class="fh5co-text">
                  <h3>Direction</h3>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div data-animate-effect="fadeInLeft" class="fh5co-feature animate-box">
                <div class="fh5co-icon"><i class="icon-params"></i></div>
                <div class="fh5co-text">
                  <h3>Expertise</h3>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="fh5co-narrow-content">
          <h2 data-animate-effect="fadeInLeft" class="fh5co-heading animate-box">Recent Blog</h2>
          <div class="row row-bottom-padded-md">
            <!-- -var blog = recent
            each val,index in blog
              .col-md-3.col-sm-6.col-padding.animate-box(data-animate-effect='fadeInLeft')
                .blog-entry
                  a.blog-img(href='/main/detail/#{val._id}')
                    img.img-responsive(src='#{val.background}', alt='Free HTML5 Bootstrap Template by FreeHTML5.co')
                  .desc
                    h3
                      a(href='/main/detail/#{val._id}') #{val.title}
                    span
                      small by #{val.author} 
                      small  Web Design /               
                      small
                        i.icon-comment #{val.created}              
                    a.lead(href='/main/detail/#{val._id}') Read More 
                      i.icon-arrow-right3       -->
          </div>
        </div>
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
                <p><a href="#" class="btn btn-primary">Learn More</a></p>
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