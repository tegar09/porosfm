<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use App\News;
use App\Event;
use App\LaguNasional;
use App\LaguInternasional;
use Response;

class HomeController extends Controller
{
    public function home()
    {

    $news = News::all();

    $events = Event::all();

    $nasionals = LaguNasional::all();

    $internasionals = LaguInternasional::all();


    return view('home', compact('news', 'events', 'nasionals', 'internasionals'));
    }
}
