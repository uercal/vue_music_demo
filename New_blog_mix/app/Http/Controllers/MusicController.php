<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MusicController extends Controller
{

    public function getTracks(Request $request){
      $input = $request->input();
      $list_id = $input['list_id'];      
      $content = file_get_contents('http://music.163.com/api/playlist/detail?id='.$list_id);        
      $result = json_decode($content,true);
      
      return $result;
    }



    
    public function getDetail($id){
      return 'http://music.163.com/song/media/outer/url?id='.$id.'.mp3';
    }
   




    
}
