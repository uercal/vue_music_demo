<!DOCTYPE html>
<html lang="en" style="height:100%;overflow:hidden;">
<head>
  <meta charset="utf-8">  
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Home</title>
</head>
<body style="height:100%;background-color:black;">
  <div id="app" style="height:100%;">  
    <music></music>
  </div>
</body>
<script src="{{ mix('js/app_music.js') }}"></script>
</html>