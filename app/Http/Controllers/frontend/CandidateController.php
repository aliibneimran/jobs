<?php

namespace App\Http\Controllers\frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CandidateController extends Controller
{
    public function index(){
        return Inertia::render('Signin');
    }
    public function signup(){
        return Inertia::render('Signup');
    }
}
