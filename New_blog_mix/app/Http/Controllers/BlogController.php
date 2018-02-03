<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BlogController extends Controller
{
    public function getIp(){
      $url = 'http://2017.ip138.com/ic.asp';
      $res = file_get_contents("compress.zlib://".$url);
      $res = iconv("gb2312", "utf-8//IGNORE",$res); 
      $res = str_replace(PHP_EOL, '', $res);   
      $res = strip_tags($res);
      $res = explode('[',$res);
      $res = explode(']',$res[1]);
      $callback['ip'] = $res[0];
      $callback['address'] = explode('：',$res[1])[1];      
      return $callback;
    }
    
    public function login(){
      return '1';
    }

    public function main(){
      return view('Home.blog_main');
    }
}
