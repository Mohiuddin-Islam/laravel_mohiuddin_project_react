<?php

use App\Http\Controllers\Auth\Customer\LoginController;
use App\Http\Controllers\backend\BookinglistController;
use App\Http\Controllers\backend\CarlistController;
use App\Http\Controllers\backend\DriverlistController;
use App\Http\Controllers\frontend\BookingController;
use App\Http\Controllers\frontend\ContactController;
use App\Http\Controllers\frontend\HomeController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

//React Frontend Routing
Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/about', [HomeController::class, 'about'])->name('about');
Route::get('/f_contact', [HomeController::class, 'contact'])->name('f_contact');
Route::get('/faq', [HomeController::class, 'faq'])->name('faq');
Route::get('/carlist', [HomeController::class, 'carlist'])->name('carlist');
//Route::get('/booking', [HomeController::class, 'booking'])->name('booking');

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

// require __DIR__.'/auth.php';


//Laravel & React Routing

//Frontend Side Booking

Route::get('/booking', [BookingController::class,'create'])->name('book.create');
Route::post('/booking', [BookingController::class,'store'])->name('book.store');

//Contact Us Route(Backend side)
Route::resource('/contact', ContactController::class);

// Frontend to Backend
Route::post('/f_contact', [ContactController::class, 'store'])->name('f_contact');



//Admin Dashboard

Route::get('/admin/dashboard', function () {
    return view('backend.admin_dashboard');
})->middleware(['auth:admin'])->name('admin_dashboard');

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

//Admin Login:Logout

Route::middleware('guest:admin')->prefix('admin')->group( function () {

    Route::get('login', [App\Http\Controllers\Auth\Admin\LoginController::class, 'login'])->name('admin.login');
    Route::post('login', [App\Http\Controllers\Auth\Admin\LoginController::class, 'check_user']);

});

Route::middleware('auth:admin')->prefix('admin')->group( function () {

    Route::post('logout', [App\Http\Controllers\Auth\Admin\LoginController::class, 'logout'])->name('admin.logout');
    Route::view('/admin/dashboard','backend.admin_dashboard');
    Route::resource('/carlist', CarlistController::class);
    Route::resource('/driver', DriverlistController::class);
    Route::resource('/booking', BookinglistController::class);
    Route::get('/booking/status/{id}',[BookinglistController::class,'changeStatus'])->name('changeStatus');


});

//Client Route

Route::middleware('guest:client')->prefix('client')->group( function () {

    Route::get('login', [App\Http\Controllers\Auth\Client\LoginController::class, 'login'])->name('client.login');
    Route::post('login', [App\Http\Controllers\Auth\Client\LoginController::class, 'check_user']);

    Route::get('register', [App\Http\Controllers\Auth\Client\RegisterController::class, 'register'])->name('client.register');
    Route::post('register', [App\Http\Controllers\Auth\Client\RegisterController::class, 'check_user']);

});

Route::middleware('auth:client')->prefix('client')->group( function () {

    Route::post('logout', [App\Http\Controllers\Auth\Client\LoginController::class, 'logout'])->name('client.logout');
    Route::view('/dashboard','backend.client_dashboard');
    
});


//Customer Login Route

// Route::middleware('guest:customer')->prefix('customer')->group(function () {
//     Route::get('login', [App\Http\Controllers\Auth\Customer\LoginController::class, 'login'])->name('customer.login');
//     Route::post('login', [App\Http\Controllers\Auth\Customer\LoginController::class, 'check_user']);
//     Route::get('register', [App\Http\Controllers\Auth\Customer\RegisterController::class, 'register'])->name('customer.register');
//     Route::post('register', [App\Http\Controllers\Auth\Customer\RegisterController::class, 'check_user']);
// });


// Route::middleware('auth:customer')->prefix('customer')->group( function () {

//     Route::post('logout', [App\Http\Controllers\Auth\Customer\LoginController::class, 'logout'])->name('customer.logout');
//     //Route::view('/dashboard','frontend.customer_dashboard');

// });
