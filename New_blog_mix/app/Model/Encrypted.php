<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Ramsey\Uuid\Uuid;
use Ramsey\Uuid\Exception\UnsatisfiedDependencyException;


class Encrypted extends Model
{
    public function encryptUser($data){
        if($data['password']==$data['repassword']){
            $uuid = Uuid::uuid4();
            $salt = $uuid->toString();
            $password = $data['password'];
            $hashword = Uuid::uuid5(Uuid::NAMESPACE_DNS,$salt.$password.$salt);
            return [
                'username'=>$data['username'],
                'salt'=>$salt,
                'hashword'=>$hashword
            ];
        }else{
            return false;
        }
    }


    public function decryptUser($password,$salt,$hashword){
        $_hashword = Uuid::uuid5(Uuid::NAMESPACE_DNS,$salt.$password.$salt);
        if($_hashword==$hashword){
            return true;
        }else{
            return false;
        }
    }
}
