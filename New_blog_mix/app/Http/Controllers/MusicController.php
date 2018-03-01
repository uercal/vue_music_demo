<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MusicController extends Controller
{

    public function getTracks(Request $request){
      $input = $request->input();
      $list_id = $input['list_id'];   
      
        //   BirdJson api
          $a = file_get_contents('https://bird.ioliu.cn/netease/playlist?id='.$list_id);
          return json_decode($a,true);
      
      $API=array(
        'method' => 'POST',
        'url'    => 'http://music.163.com/api/linux/forward',
        'body'   => array(
            'method' => 'POST',
            'params' => array(
                "s"  => "0",
                "id" => $list_id,
                "n"  => "1000",
                "t"  => "0"
            ),
            'url' => 'http://music.163.com/api/v3/playlist/detail',
        ),
        'encode' => 'netease_AESECB',
        'format' => 'playlist#tracks',
    );
      return $this->curl($API);
    }

    
    public function getDetail($id){
        // return 'http://music.163.com/song/media/outer/url?id='.$id.'.mp3';
        $data['data'][0]['url'] = 'http://music.163.com/song/media/outer/url?id='.$id.'.mp3';
        return $data;
        // $br = 320;
        // $API=array(
        //     'method' => 'POST',
        //     'url'    => 'http://music.163.com/api/linux/forward',
        //     'body'   => array(
        //         'method' => 'POST',
        //         'params' => array(
        //             'ids' => array($id),
        //             'br'  => $br*1000,
        //         ),
        //         'url' => 'http://music.163.com/api/song/enhance/player/url',
        //     ),
        //     'encode' => 'netease_AESECB',
        //     'decode' => 'netease_url',
        // );
        // return $this->curl($API);
    }
       

    public function getLyrics($id){
        $res = file_get_contents('http://music.163.com/api/song/lyric?os=pc&id='.$id.'&lv=-1&kv=-1&tv=-1');
        $res = json_decode($res,true);         
        if(!isset($res['lrc'])){
            // 无歌词
            return '';
        }else{
            $res = $res['lrc']['lyric'];          
            return $res;
        }                                 
    }


    /* 
     解析
     */
    public function curl($API){
        if (isset($API['encode'])) {
            $API=call_user_func_array(array($this,$API['encode']), array($API));
        }
        $BASE = $this->curlset();
        $curl = curl_init();
        if ($API['method'] == 'POST') {
            if (is_array($API['body'])) {
                $API['body'] = http_build_query($API['body']);
            }
            curl_setopt($curl, CURLOPT_POST, 1);
            curl_setopt($curl, CURLOPT_POSTFIELDS, $API['body']);
        } elseif ($API['method'] == 'GET') {
            if (isset($API['body'])) {
                $API['url'] = $API['url'].'?'.http_build_query($API['body']);
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
        curl_setopt($curl, CURLOPT_HTTPHEADER, [
            'Accept: */*',
            'Accept-Encoding: gzip, deflate',
            'Accept-Language: zh-CN,zh;q=0.8,gl;q=0.6,zh-TW;q=0.4',
            'Connection: keep-alive',
            'Content-Type: application/x-www-form-urlencoded',
            'Referer: ' . $BASE['referer'],
            'User-Agent: ' . $BASE['useragent']
        ]);
        for ($i=0;$i<=3;$i++) {
            $data = curl_exec($curl);
            $info = curl_getinfo($curl);
            $error = curl_errno($curl);
            $status = $error ? curl_error($curl) : '';
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

    // important
    private function curlset(){    
      $BASE=array(
        'referer'   => 'https://music.163.com/',
        'cookie'    => 'os=linux; deviceId=' . $this->getRandomHex(52) . '; osver=Ubuntu%2016.04.3%20LTS; appver=1.1.0.1232; channel=netease; MUSIC_U=255b19fea4bdec0a0011f855c3708e3e97b229707fccab67d74da902317635b4f866558227e6c3335d9bd72ef1abb9ea77749c2dda21047b; __csrf=' . $this->getRandomHex(32),
        'useragent' => 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.90 Safari/537.36',
      );      
      return $BASE;
    }

    // 
    private function getRandomHex($length){
        if (function_exists('openssl_random_pseudo_bytes')) {
            return bin2hex(openssl_random_pseudo_bytes($length));
        } else {
            return bin2hex(mcrypt_create_iv($length, MCRYPT_DEV_URANDOM));
        }
    }

    
}
