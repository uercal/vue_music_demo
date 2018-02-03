<template>
  <body :class="bCss">
    <div id="fh5co-page">
      <a href="javascript:;" class="js-fh5co-nav-toggle fh5co-nav-toggle" :class="aCss" @click="changeCss"><i></i></a>
      <aside id="fh5co-aside" role="complementary" class="border js-fullheight" style="overflow-y:hidden;">
        <h1 id="fh5co-logo"><a href="index.html">uercal</a></h1>
        <nav id="fh5co-main-menu" role="navigation">      
          <ul>
            <li :class="isActive(1)" @click="menu(1)"><router-link to="/">Home</router-link></li>            
            <li :class="isActive(2)" @click="menu(2)"><router-link to="/blog">Blog</router-link></li>
            <li :class="isActive(3)" @click="menu(3)"><router-link to="/portfolio">Portfolio</router-link></li>
            <li :class="isActive(4)" @click="menu(4)"><router-link to="/about">About</router-link></li>
          </ul>
        </nav>
        <div class="fh5co-footer">
          <div>            
            <!-- customer -->
            <div v-show="!is_login" style="display:none;">
              <p v-html="welcome"></p>
              <p v-html="ip"></p>
              <p v-html="address"></p>
              <ul>
                <li><a href="javascript:;" title="login" @click="Login"><i class="icon-user-outline"></i></a></li>
                <li><a href="javascript:;" title="reg" @click="Regist"><i class="icon-user-add"></i></a></li>
              </ul>                          
            </div>
            
            <!-- user -->
            <div v-show="is_login" style="display:none;">                        
              <img id="person" :src="u_img" title="Change Avatar" class="avatar-view"/>
              <ul>
                <li><a href="javascript:;" title="info" @click="info"><i class="icon-user"></i></a></li>               
                <li @click="logOut"><a href="javascript:;" title="logout"><i class="icon-cross2"></i></a></li>
              </ul>
            </div>

          </div>
          <br>
          <ul>
            <li><a href="#"><i class="icon-facebook2"></i></a></li>
            <li><a href="#"><i class="icon-twitter2"></i></a></li>
            <li><a href="#"><i class="icon-instagram"></i></a></li>
            <li><a href="#"><i class="icon-linkedin2"></i></a></li>
          </ul>
        </div>
      </aside>
      <!--  -->
      <div class="container" id="crop-avatar">
        <!-- Current avatar -->
        <div class="avatar-view" title="Change the avatar" style="display:none;">
          <img src="/images/1.jpg" alt="Avatar">
        </div>

        <!-- Cropping modal -->
        <div class="modal fade" id="avatar-modal" aria-hidden="true" aria-labelledby="avatar-modal-label" role="dialog" tabindex="-1">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <form class="avatar-form" action="/blog/changeHead" enctype="multipart/form-data" method="post">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal">&times;</button>
                  <h4 class="modal-title" id="avatar-modal-label">Change Avatar</h4>
                </div>
                <div class="modal-body">
                  <div class="avatar-body">

                    <!-- Upload image and data -->
                    <div class="avatar-upload">
                      <input type="hidden" class="avatar-src" name="avatar_src">
                      <input type="hidden" class="avatar-data" name="avatar_data">
                      <label for="avatarInput">Local upload</label>
                      <input type="file" class="avatar-input" id="avatarInput" name="avatar_file">
                    </div>

                    <!-- Crop and preview -->
                    <div class="row">
                      <div class="col-md-9">
                        <div class="avatar-wrapper"></div>
                      </div>
                      <div class="col-md-3">
                        <div class="avatar-preview preview-lg"></div>
                        <div class="avatar-preview preview-md"></div>
                        <div class="avatar-preview preview-sm"></div>
                      </div>
                    </div>

                    <div class="row avatar-btns">                    
                      <div class="col-md-3">
                        <button type="submit" class="btn btn-primary btn-block avatar-save">Done</button>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- <div class="modal-footer">
                  <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div> -->
              </form>
            </div>
          </div>
        </div><!-- /.modal -->

        <!-- Loading state -->
        <div class="loading" aria-label="Loading" role="img" tabindex="-1"></div>
      </div>

      <!--  -->
    </div>

  <keep-alive>
    <router-view></router-view>
  </keep-alive>

  </body>
</template>


<script>  
  import { mapGetters,mapActions } from 'vuex'
  export default {
    data:()=>{
      return {
        menu_index:1,
        aCss:'',
        bCss:'',
        isChange:0,
        
      }      
    },
    computed:mapGetters([
      'is_login',
      'u_img',
      'u_name',
      'welcome',
      'ip',
      'address'
    ]),
    methods:{
      ...mapActions([
        'logOut',
        
      ]),
      menu(index){
        this.menu_index = index
      },
      isActive:function(index){
        return this.menu_index==index?'fh5co-active':''
      },
      changeCss:function(){
        if(this.isChange==0){
          this.isChange = 1
          this.bCss='offcanvas'
          this.aCss='active'
        }else{
          this.isChange = 0
          this.bCss=''
          this.aCss=''
        }      
      },
      Login:function(){
        console.log(this.$store)
        this.$store.dispatch('Login')
      },
      Regist:function(){
        this.$store.dispatch('Regist')
      },
      info:function(){
        window.location.href = '/blog/main';
      }
    },
    mounted:function(){
      this.$store.dispatch('isLogin');            
      // console.log(document.querySelector('meta[name=csrf-token]').getAttribute('content'));
    }
  }
  
</script>
<style>
.flavr-container{
  z-index:1002 !important;
}
</style>


