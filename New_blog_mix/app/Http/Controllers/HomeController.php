<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index(){          	
        return view('Home.index');
    }



    public function music(){
        return view('Home.music');
    }


    public function blog(){
        return view('Home.blog');
    }


    
}
