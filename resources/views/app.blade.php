<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta name="msapplication-TileColor" content="#0E0E0E">
        <meta name="template-color" content="#0E0E0E">
        <link rel="manifest" href="manifest.json" crossorigin>
        <meta name="msapplication-config" content="browserconfig.xml">
        <meta name="description" content="Index page">
        <meta name="keywords" content="index, page">
        <meta name="author" content="">
        <link rel="shortcut icon" type="image/x-icon" href="{{asset('frontend/imgs/template/favicon.svg')}}">
        <link href="{{asset('frontend/css/style.css?version=4.1')}}" rel="stylesheet">
        <title>Jobbox</title>
        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/app.jsx'])
        @inertiaHead
    </head>
    <body>
        @inertia

        <script src="{{asset('frontend/js/vendor/modernizr-3.6.0.min.js')}}"></script>
        <script src="{{asset('frontend/js/vendor/jquery-3.6.0.min.js')}}"></script>
        <script src="{{asset('frontend/js/vendor/jquery-migrate-3.3.0.min.js')}}"></script>
        <script src="{{asset('frontend/js/vendor/bootstrap.bundle.min.js')}}"></script>
        <script src="{{asset('frontend/js/plugins/waypoints.js')}}"></script>
        <script src="{{asset('frontend/js/plugins/wow.js')}}"></script>
        <script src="{{asset('frontend/js/plugins/magnific-popup.js')}}"></script>
        <script src="{{asset('frontend/js/plugins/perfect-scrollbar.min.js')}}"></script>
        <script src="{{asset('frontend/js/plugins/select2.min.js')}}"></script>
        <script src="{{asset('frontend/js/plugins/isotope.js')}}"></script>
        <script src="{{asset('frontend/js/plugins/scrollup.js')}}"></script>
        <script src="{{asset('frontend/js/plugins/swiper-bundle.min.js')}}"></script>
        <script src="{{asset('frontend/js/plugins/counterup.js')}}"></script>
        <script src="{{asset('frontend/js/main.js?v=4.1')}}"></script>
    </body>
</html>