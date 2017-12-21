<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use App\Model\Encrypted;

class Users extends Model
{

    protected $table = 'users';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'username', 'salt', 'hashword','created_at','updated_at'
    ];
    

    /* 
     * Send a array like this
     *  username , password , _password
     * 
    */
    public static function createUser($user){
        $data['username'] = $user['username'];
        $data['password'] = $user['password'];
        $data['repassword'] = $user['repassword'];
        $obj = self::where('username',$data['username'])->first();
        if(!$obj){
            $encry = new Encrypted();
            $user = $encry->encryptUser($data);
            $res = self::create($user);            
            return $res;
        }else{
            return false;
        }
        
    }

    public static function loginUser($user){
        $username = $user['username'];
        $password = $user['password'];
        $return = [
            'code'=>0,
            'msg'=>''
        ];
        $obj = self::where('username',$username)->first();
        if(!$obj){
            $return['msg'] = '无此用户';
            $return['code'] = 404;
        }else{        
            $salt = $obj->salt;
            $hashword = $obj->hashword;
            $res = new Encrypted();
            $res = $res->decryptUser($password,$salt,$hashword);
            if($res){
                $return['msg'] = '登录成功';
                $return['code'] = 200;
                $return['obj'] = ['id'=>$obj->id,'username'=>$obj->username,'avatar'=>$obj->avatar];
            }else{
                $return['msg'] = '密码错误';
                $return['code'] = 500;
            }
        }
        return $return;
    }


}
