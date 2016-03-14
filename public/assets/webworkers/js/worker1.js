//Worker1
onmessage = function(e) {
	console.log('Got '+e.data[0]);
	var n = Number(e.data[0]);
	var m = Number(e.data[1]);
	  
	  console.log('Posting message back to main script');
	  if(isPrime(n)==true) {
	  	var workerResult = ['Result: ' + n,n];
	  	console.log('Found prime number! ' + n)
	 	postMessage(workerResult);
	  }
	  else {
	  	console.log('Failure for '+n);
	  	var workerResult = ['Result: '+m,m];
	  	postMessage(workerResult);
	  }
}

function isPrime(n) {
	if (isNaN(n) || !isFinite(n) || n%1 || n<2) return false; 
	 if (n%2==0) return (n==2);
	 if (n%3==0) return (n==3);
	 var m=Math.sqrt(n);
	 for (var i=5;i<=m;i+=6) {
	  if (n%i==0)     return false;
	  if (n%(i+2)==0) return false;
	 }
	 return true;
}