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
        return $res;
    }
}
