<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BlogController extends Controller
{
    public function getIp(){
      $url = 'http://ip.chinaz.com/getip.aspx';
      $res = file_get_contents($url);          
      $res = iconv("utf-8", "utf-8//IGNORE",$res);
      $res = str_replace(PHP_EOL, '', $res);   
      $res = strip_tags($res);      
      $res = explode('{',$res);
      $res = explode('}',$res[1]);
      $res = explode(',',$res[0]);
      $callback['ip'] = substr($res[0],4,-1);
      $callback['address'] = substr($res[1],9,-1);
      // dd($callback);
      return $callback;
    }
    
    public function login(){
      return '1';
    }

    public function main(){
      return view('Home.blog_main');
    }
}
