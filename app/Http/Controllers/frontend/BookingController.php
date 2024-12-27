<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Booking;
use App\Models\CarList;
use App\Models\Driver;
use Illuminate\Http\Request;
use Inertia\Inertia;



class BookingController extends Controller
{
    public function index()
    {
        // Functionality here if needed
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $drivers = Driver::all();
        $carlists = CarList::all();
        return Inertia::render('Booking', compact('carlists', 'drivers'));
        //return view('frontend.booking', compact('carlists','drivers'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required',
            'phone' => 'required',
            'carlist' => 'required',
            'driver' => 'required',
            'details' => 'max:255|min:10',
        ]);

        $app = new Booking();
        $app->name = $request->name;
        $app->email = $request->email;
        $app->phone = $request->phone;
        $app->date = $request->date;
        $app->car_list_id = $request->carlist;
        $app->driver_id = $request->driver; // corrected 'car_lists' to 'carlist'
        $app->details = $request->details;

        $app->save();

        return redirect()->back()->with('msg', 'Successfully Booking Done');
        //return response()->json(['msg' => 'Successfully Booking Done']);
    }


    /**
     * Display the specified resource.
     */
    public function show(Booking $booking)
    {
        // Functionality here if needed
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Booking $booking)
    {
        // Functionality here if needed
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Booking $booking)
    {
        // Functionality here if needed
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Booking $booking)
    {
        // Functionality here if needed
    }
}
