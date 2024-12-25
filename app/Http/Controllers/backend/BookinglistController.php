<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use App\Models\Booking;
use App\Models\CarList;
use App\Models\Driver;
use Illuminate\Http\Request;

class BookinglistController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $items = Booking::orderBy('id', 'desc')->get();
        return view('backend.booking.index', compact('items'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $carlists = CarList::all();
        $drivers = Driver::all();
        return view('backend.booking.create',compact('carlists','drivers'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'carlist' => 'required',
            'driver' => 'required',
            'email' => 'required',
            'phone' => 'required',
            'date' =>'required',
            'details' => 'max:255|min:10',
        ]);

        $booking = new Booking;

        $booking->name = $request->name;
        $booking->car_list_id = $request->carlist;
        $booking->driver_id = $request->driver;
        $booking->email = $request->email;
        $booking->phone = $request->phone;
        $booking->details = $request->details;
        $booking->date = $request->date;
        
        $booking->save();
        return redirect()->route('booking.index')->with('msg', "Add Booking Successfully");
    }

    /**
     * Display the specified resource.
     */
    public function show(Booking $booking)
    {
        return view('backend.booking.show',compact("booking"));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Booking $booking)
    {
        return view('backend.booking.edit',compact('booking'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Booking $booking)
    {
        
        $request->validate([
            'name' => 'required',
            'carlist' => 'required',
            'driver' => 'required',
            'email' => 'required',
            'phone' => 'required',
            'date' =>'required',
            'details' => 'max:255|min:10',
        ]);

        $booking->name = $request->name;
        $booking->car_list_id = $request->carlist;
        $booking->driver_id = $request->driver;
        $booking->email = $request->email;
        $booking->phone = $request->phone;
        $booking->details = $request->details;
        $booking->date = $request->date;
        
        $booking->update();
        return redirect()->route('booking.index')->with('msg', "Booking Update Successfully");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Booking $booking)
    {
        $booking->delete();

        return redirect()->route('booking.index')->with('msg', 'Booking Deleted Successfully');
    }

    public function changeStatus($id)
    {
        $record = Booking::find($id);
        $record->status =='pending' ? $record->status ='confirm': $record->status ='pending';
        
        $record->update();
        return redirect()->back();
    
    }

}
