<html>
<head>
<meta charset="utf-8">
<title>WebWorkers + Intervals</title>

<!--Style Sheet-->
<link type="text/css" href="<?php echo URL::asset("assets/webworkers/css/style.css") ?>" rel="stylesheet">
</head>

<body>
<div id="intervals" class="center">
	<h1>Hello, this is a page that demonstrates the use of WebWorkers in addition to Intervals</h1>
		<h1>Intervals</h1>
		<div class="insider">
			<h2>Color changer</h2>
			<p>Using setInterval(function, interval_in_ms) to change color</p>
			<button class="button" onclick="zmienKolor();">Try it</button>
			<button class="button_red" onclick="zatrzymajZmianeKoloru();">Stop</button>
			<div id="my_box">
				<p><strong>Hello World</strong></p>
			</div>
		</div>
</div>

<div id="workers" class="center">
	<h1>Web Workers</h1>

	    <div class="controls" tabindex="0">

	    <form>
	    <div class="container">
	    <div class="insider">
	      <div>
	      	<h2>Fibonacci</h2>
	      	<p>Every second (aprox.) a new number will be attempted to be solved</p>
	        <button class="button" type="button" id="fibonacciStart">Start</button>
	        <button class="button_red" type="button" id="fibonacciStop">Stop</button>
	        <p class="result">Result: </p>
	      </div></div>
	      <div class="insider"> 
	      	<h2>Prime numbers</h2>
	        <button class="button" type="button" id="primeStart">Start</button>
	        <button class="button_red" type="button" id="primeStop">Stop</button>
	        <p class="result1">Result: </p>
	      </div>
	  	</div>
	  	</div>
	    </form>

	</div>
</div>
<footer>
	<p>Adam Kocić 2016</p>
</footer>

<script type="text/javascript" src="<?php echo URL::asset('assets/webworkers/js/workers.js') ?>"></script>
</body>
</html>
