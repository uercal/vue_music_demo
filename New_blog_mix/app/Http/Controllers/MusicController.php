<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MusicController extends Controller
{

    public function getTracks(Request $request){
      $input = $request->input();
      $list_id = $input['list_id'];      
      $API=array(
        'method' => 'POST',
        'url'    => 'http://music.163.com/api/linux/forward',
        'body'   => array(
            'method' => 'POST',
            'params' => array(
                'id' => $list_id,
                "n"  => 1000,
            ),
            'url' => 'http://music.163.com/api/v3/playlist/detail',
        ),
        'encode' => 'netease_AESECB',
        'format' => 'playlist#tracks',
      );
      return $this->curl($API);
    }



    
    public function getDetail($id){
        return 'http://music.163.com/song/media/outer/url?id='.$id.'.mp3';
    }
   

    public function getLyrics($id){
        $res = file_get_contents('http://music.163.com/api/song/lyric?os=pc&id='.$id.'&lv=-1&kv=-1&tv=-1');
        $res = json_decode($res,true);
        $res = $res['lrc']['lyric'];
        // 去掉回车
        // $res = preg_replace("/\n/", "", $res);
        // $res = explode('[',$res);
        // unset($res[0]);
        // foreach ($res as $key => $value) {
        // //     $arr = explode(']',$value);            
        // //     $arr[0] = $this->formatTime($arr[0]);
        // //     $res[$key] = [];
        // //     $res[$key][] = $arr[0];
        // //     if(isset($arr[1])){
        // //         $res[$key][] = $arr[1];
        // //     }else{
        // //         $res[$key][] = '';
        // //     }                  
        //     $res[$key] = '['.$value.'\n';
        // }        
        // $res = implode('',$res);        
        return $res;
    }


    /* 
     解析
     */
    public function curl($API){
      if (isset($API['encode'])) {
          $API=call_user_func_array(array($this,$API['encode']), array($API));
      }
      $BASE=$this->curlset();
      $curl=curl_init();
      if ($API['method']=='POST') {
          if (is_array($API['body'])) {
              $API['body']=http_build_query($API['body']);
          }
          curl_setopt($curl, CURLOPT_POST, 1);
          curl_setopt($curl, CURLOPT_POSTFIELDS, $API['body']);
      } elseif ($API['method']=='GET') {
          if (isset($API['body'])) {
              $API['url']=$API['url'].'?'.http_build_query($API['body']);
          }
      }
      curl_setopt($curl, CURLOPT_HEADER, 0);
      curl_setopt($curl, CURLOPT_TIMEOUT, 20);
      curl_setopt($curl, CURLOPT_ENCODING, 'gzip');
      curl_setopt($curl, CURLOPT_IPRESOLVE, 1);
      curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
      curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 0);
      curl_setopt($curl, CURLOPT_CONNECTTIMEOUT, 10);
      curl_setopt($curl, CURLOPT_URL, $API['url']);
      curl_setopt($curl, CURLOPT_COOKIE, isset($this->_TEMP['cookie'])?$this->_TEMP['cookie']:$BASE['cookie']);
      curl_setopt($curl, CURLOPT_REFERER, $BASE['referer']);
      curl_setopt($curl, CURLOPT_USERAGENT, $BASE['useragent']);
      for ($i=0;$i<=3;$i++) {
          $data=curl_exec($curl);
          $info=curl_getinfo($curl);
          $error=curl_errno($curl);
          $status=$error?curl_error($curl):'';
          if (!$error) {
              break;
          }
      }
      curl_close($curl);
      if ($error) {
          return json_encode(
              array(
                  'error'  => $error,
                  'info'   => $info,
                  'status' => $status,
              )
          );
      }      
      return $data;
    }
  
    private function netease_AESECB($API){    
      $KEY='7246674226682325323F5E6544673A51';
      $body=json_encode($API['body']);
      if (function_exists('openssl_encrypt')) {
          $body=openssl_encrypt($body, 'aes-128-ecb', pack('H*', $KEY));
      } else {
          $PAD=16-(strlen($body)%16);
          $body=base64_encode(mcrypt_encrypt(MCRYPT_RIJNDAEL_128, hex2bin($KEY), $body.str_repeat(chr($PAD), $PAD), MCRYPT_MODE_ECB));
      }
      $body=strtoupper(bin2hex(base64_decode($body)));
      $API['body']=array(
          'eparams'=>$body,
      );
      return $API;
    }

    private function curlset(){    
      $BASE=array(
              'referer'   => 'https://music.163.com/',
              'cookie'    => 'os=linux; appver=1.0.0.1026; osver=Ubuntu%2016.10; MUSIC_U=78d411095f4b022667bc8ec49e9a44cca088df057d987f5feaf066d37458e41c4a7d9447977352cf27ea9fee03f6ec4441049cea1c6bb9b6; __remember_me=true',
              'useragent' => 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36',
      );      
      return $BASE;
    }


    // 
    public function formatTime($t){
        // $t = xx:xx.xx        
        $t = explode(':',$t);
        $t = $t[0]*60 + $t[1];
        return $t;
    }
}
