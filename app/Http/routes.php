<?php

/*
|--------------------------------------------------------------------------
| Routes File
|--------------------------------------------------------------------------
|
| Here is where you will register all of the routes in an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('webworkers', function(){
	return view('webworkers');
});

Route::get('hello/{name}', function($name){
	echo 'Hello! How are you doing '.$name.'?';
});

Route::get('mypage',function(){
	$data = array(
		'var1' => 'Hamburger',
		'var2' => 'Hot Dog',
		'var3' => 'Fries'
		);
	return view('mypage', $data);
});

Route::get('orders', function(){
	$orders = App\Order::all();
	foreach($orders as $order){
		//$customer = App\Customer::find($order->customer_id);
		echo $order->name . " ordered by " . $order->customer->name . "<br />";
	}
});

Route::get('customer/{id}', function($id){
	$customer = App\Customer::find($id);
	echo '<pre>';
	echo ($customer->name . '<br />');
	echo 'Orders: ' . '<br />';

	echo '<ul>';
	foreach($customer->orders as $order){
		echo '<li>' . $order->name . '</li>';
	}
	echo '</ul>';
});

Route::get('customer_name', function(){
	$customer = App\Customer::where('name','=','Tony')->first();
	print_r($customer->id);
});

//read an item
Route::get('test', function(){
	echo '<form action="test" method="POST">';
	echo '<input type="submit" value="submit">';
	echo '<input type="hidden" name="_token" value="' . csrf_token() . '">';
	echo '<input type="hidden" name="_method" value="PUT">';
	echo '</form>';
});

//create an item
Route::post('test', function(){
	echo 'POSTED';
});

//update an item
Route::put('test', function(){
	echo 'PUT';
});

//delete an item
Route::delete('test', function(){
	echo 'DELETED';
});

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| This route group applies the "web" middleware group to every route
| it contains. The "web" middleware group is defined in your HTTP
| kernel and includes session state, CSRF protection, and more.
|
*/

Route::group(['middleware' => ['web']], function () {
    //
});
