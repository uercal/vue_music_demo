<!DOCTYPE html>
<html lang="en" style="height:100%;overflow:hidden;">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Home</title>
</head>
<body style="height:100%;background-color:black;">
  <div id="app" style="height:100%;">  
    <music></music>
  </div>
</body>
<script src="{{ mix('js/app.js') }}"></script>
</html>