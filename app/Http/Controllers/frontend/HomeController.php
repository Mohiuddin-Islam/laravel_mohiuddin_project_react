<?php

namespace App\Http\Controllers\frontend;

use App\Http\Controllers\Controller;
use App\Models\CarList;
use App\Models\Driver;
use Illuminate\Http\Request;
use Inertia\Inertia;


class HomeController extends Controller
{
    public function index(){

        $car_lists = CarList::take(9)->get();
        return Inertia::render('Home',compact('car_lists'));
    }

    public function about(){
        return Inertia::render('About');
    }

    public function contact(){
        return Inertia::render('Contact');
    }

    public function faq(){
        return Inertia::render('Faq');
    }

    public function carlist(){
        $car_lists = CarList::all();
        return Inertia::render('Carlist',compact('car_lists'));
    }
    public function booking(){
        $car_lists = CarList::all();
        $drivers = Driver::all();
        return Inertia::render('Booking',compact('car_lists','drivers'));
    }

}
