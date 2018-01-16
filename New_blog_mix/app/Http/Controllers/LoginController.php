<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Users;

class LoginController extends Controller
{
    //
    public function create(Request $req){
        $input = $req->input();
        foreach ($input as $key => $value) {
            $data[$value['name']] = $value['value'];
        }
        $res = Users::createUser($data);
        if($res){            
            // session            
            session(['user_logined'=>[
                'id'=>$res->id,
                'username'=>$res->username,
                'avatar'=>$res->avatar
            ]]);
            // 
            return['code'=>200,'msg'=>'注册成功'];
        }else{
            return['code'=>500,'msg'=>'注册失败,用户名已存在'];
        }
    }

    public function login(Request $req){
        $input = $req->input();
        foreach ($input as $key => $value) {
            $data[$value['name']] = $value['value'];
        }
        $res = Users::loginUser($data);
        // session
        if($res['code']==200){
            session(['user_logined'=>$res['obj']]);
        }
        return $res;
    }


    // check
    public function isLogin(){
        $obj = session('user_logined');
        if($obj){
            // 重新获取数据
            $res = Users::where('id',$obj['id'])->first();
            return ['user'=>$res,'code'=>200];
        }else{
            return ['code'=>500];
        }
    }


    public function loginOut(){
        session(['user_logined'=>null]);
    }

}
