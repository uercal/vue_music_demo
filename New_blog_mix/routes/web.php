<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/test',function(){
    $track = '150524989';
    $a = file_get_contents('http://music.163.com/api/playlist/detail?id='.$track);
    $result = json_decode($a,true);
    dd($result);  
    $params = 'd1i6LA/LcaZhE21J/bONwe1jDN3KuOajK74q2mEDHP1vfPXXMjyRhEbldX49Ov7QMNM5W7S3sjpvJOJtCcvLE3s11FB3zFQna3Jhj115xy/UxQOCGOAYWzIlWI6v4dOkXSxE6EFr1NhfKw6k9NBm8+6TbECzvEZE3xuO2HGVbh9PNDLfujcwM1zqGFQV1cPp';
    $encSecKey = '5410c9f5128088e5782dcf5253421875532a45a87dd55f2078dd32d1b9cc282e69b57bbb830947f8fadca1212fde8532660ba757b78660a0f4a21d942b47738d902e2ecb2022b8355a4ca4f43a63b11a2059638a291e4a3f4713a736cad1f5a3cfc102b54e965f2aca597086d38bdec51442c3c92522f3b8887ab2b23a3c2fdb';
    $url = 'http://music.163.com/weapi/song/enhance/player/url?csrf_token=fae1662091daaf63681fb3cae823e369';

});

Route::any('/','HomeController@index');
Route::any('/music','HomeController@music');
Route::any('/blog','HomeController@blog');
// music api
Route::any('/music/getTracks','MusicController@getTracks');
Route::any('/music/getDetail/{id}','MusicController@getDetail');
Route::any('/music/getLyrics/{id}','MusicController@getLyrics');


// Blog
Route::any('/blog/getIp','BlogController@getIp');