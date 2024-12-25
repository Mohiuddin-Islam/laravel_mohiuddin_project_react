@extends('backend.layouts.app')

@section('css')
    <!-- App favicon -->
    <link rel="shortcut icon" href="{{asset('assets/images/favicon.ico')}}">

    <!-- App css -->
    <link href="{{asset('assets/css/app.min.css')}}" rel="stylesheet" type="text/css" id="app-style" />

    <!-- Icons -->
    <link href="{{asset('assets/css/icons.min.css')}}" rel="stylesheet" type="text/css" />
@endsection


@section('js')
    <!-- Vendor -->
    <script src="{{asset('assets/libs/jquery/jquery.min.js')}}"></script>
    <script src="{{asset('assets/libs/bootstrap/js/bootstrap.bundle.min.js')}}"></script>
    <script src="{{asset('assets/libs/simplebar/simplebar.min.js')}}"></script>
    <script src="{{asset('assets/libs/node-waves/waves.min.js')}}"></script>
    <script src="{{asset('assets/libs/waypoints/lib/jquery.waypoints.min.js')}}"></script>
    <script src="{{asset('assets/libs/jquery.counterup/jquery.counterup.min.js')}}"></script>
    <script src="{{asset('assets/libs/feather-icons/feather.min.js')}}"></script>

    <!-- App js-->
    <script src="{{asset('assets/js/app.js')}}"></script>
@endsection


@section('content')

<div class="row">

    <div class="col-lg-8 offset-2 mt-4">
        <div class="card">

            <div class="card-header">
                <h5 class="card-title mb-0" style="color:black">Edit Booking</h5>
            </div><!-- end card header -->

            <div class="card-body">
                <form action="{{route('booking.update',$booking->id)}}" method="POST" enctype="multipart/form-data">
                    @csrf
                    @method('PUT')
                    <div class="mb-3">
                        <label for="exampleInputBrand" class="form-label">Name</label>
                        <input type="text" name="name" value="{{ old('name')??$booking->name }}" class="form-control" id="exampleInputEmail1" aria-describedby="brandHelp" placeholder="Enter Driver Name">
                        
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputModel" class="form-label">Email</label>
                        <input type="text" name="email" value="{{ old('email')??$booking->email }}" class="form-control" id="exampleInputEmail1" aria-describedby="modelHelp" placeholder="Enter Email Address">
                        
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEngine" class="form-label">Phone</label>
                        <input type="text" name="phone" value="{{ old('phone')??$booking->phone }}" class="form-control" id="exampleInputEmail1" aria-describedby="engineHelp" placeholder="Enter Phone Number">
                        
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPrice" class="form-label">Date</label>
                        <input type="date" name="date" class="form-control" id="exampleInputEmail1" aria-describedby="priceHelp" rows="10">{{ old('date')??$booking->date }}</input>
                        
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPrice" class="form-label">Details</label>
                        <textarea type="text" name="details" class="form-control" id="exampleInputEmail1" aria-describedby="priceHelp" placeholder="Enter Details Here" rows="10">{{ old('details')??$booking->details }}</textarea>
                        
                    </div>
                    
                    <button type="submit" class="btn btn-primary">UPDATE</button>
                </form>
            </div>
        </div>
    </div>

</div>
    
@endsection