<template>
  <div>
    <!-- personal info -->
    <div id="page">
      <div id="fh5co-aside" :style="{backgroundImage:'url('+ b_img +')'}">
        <div class="overlay"></div>
        <nav role="navigation" v-show="is_login" style="display:none;">
          <ul>
            <li>
              <a href="/blog" title="Home"><i class="icon-home"></i></a>
            </li>
          </ul>
          <br>
          <ul>
            <li>
              <a id="option" href="javascript:;" title="Setting"><i class="icon-settings"></i></a>
            </li>
            <div class="options hidden">
              <li>
                <a id="change" href="javascript:;" title="Background Change" style="margin-top: 5px;margin-bottom: 5px;" @click="bb">B</a>
              </li>
              <li>
                <a id="delBlog" href="javascript:;" title="Delete">D</a>
              </li>
            </div>
          </ul>
          <br>
          <ul>
            <li>
              <router-link to="/detail/1">
              <a id="add" href="javascript:;" title="Add"><i class="icon-plus"></i></a>
              </router-link>
            </li>
          </ul>
        </nav>
        <div class="featured" v-show="is_login" style="display:none;">
          <span>user</span>
          <h2 v-html="u_name"></h2>
        </div>
      </div>
    </div>
    <!-- blogs -->
    <div id="fh5co-main-content">
      <div class="fh5co-post">
        <div style="background-image: url('/images/img_bg_3.jpg'); 
        opacity: 0.4; background-position: 0% 0%;" data-stellar-background-ratio="0.1" 
        class="fh5co-entry padding">
          <div>
            <a class="fh5co-post-date">Fri Dec 08 2017 09:39:55 GMT+0800 (中国标准时间)</a>
            <h2>
              <a href="main/detail/5a29ed6b4aafe35c288e791d">LuBenWeiChiShi</a>
            </h2>
            <p></p>
          </div>
        </div>
        <footer>
          <div>
            <input id="handle_status" value="" hidden="hidden">
          </div>
        </footer>
      </div>
    </div>

    <!-- upload  -->
   
    <input type="file" name="b" id="file" ref="bb" value="" style="display:none;">
      
    
  </div>
</template>
<script>
  import { mapGetters,mapActions } from 'vuex'
  export default {
    computed:mapGetters([
      'is_login',
      'b_img',
      'u_name'
    ]),
    methods:{
     bb:function(){
       this.$refs.bb.click()
     }
    },
    mounted:function(){
      this.$store.dispatch('overCss');
      this.$store.dispatch('isLogin');

      
    }
  }
</script>


