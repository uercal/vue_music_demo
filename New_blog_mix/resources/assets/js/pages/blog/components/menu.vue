<template>
  <body :class="bCss">
    <div id="fh5co-page">
      <a href="javascript:;" class="js-fh5co-nav-toggle fh5co-nav-toggle" :class="aCss" @click="changeCss"><i></i></a>
      <aside id="fh5co-aside" role="complementary" class="border js-fullheight">
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
            <input id="handle_status" value="" hidden="hidden">  
            <!-- customer -->
            <p>Welcome Customer by:	
              <p v-html="ip"></p>
              <p v-html="address"></p>
              <ul>
                <li><a href="javascript:;" title="login" @click="Login"><i class="icon-user-outline"></i></a></li>
                <li><a href="javascript:;" title="reg" @click="Regist"><i class="icon-user-add"></i></a></li>
              </ul>            
            </p>
            
            <!-- user -->
            <!-- <div>            
            <img id="person" src="undefined" title="admin"/>
              <ul>
                <li><a href="/main" title="info"><i class="icon-user"></i></a></li>
                <li><a href="/logout" title="logout"><i class="icon-cross2"></i></a></li>
              </ul>
            </div> -->

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
    </div>

  <keep-alive>
    <router-view></router-view>
  </keep-alive>

  </body>
</template>


<script>
  import axios from 'axios'
  import { mapGetters,mapActions } from 'vuex'
  export default {
    data:()=>{
      return {
        menu_index:1,
        aCss:'',
        bCss:'',
        isChange:0,
        ip:'',
        address:'',
      }      
    },    
    methods:{
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
      }
    },
    mounted:function(){
      axios.get('/blog/getIp').then((res)=>{
        this.ip = res.data.ip
        this.address = res.data.address        
      })
      // console.log(document.querySelector('meta[name=csrf-token]').getAttribute('content'));
    }
  }
  
</script>

