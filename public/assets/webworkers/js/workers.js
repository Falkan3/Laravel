//Intervals
var idInterwalu;

function zmienKolor() {
    idInterwalu = setInterval(zmienKolorTekstu, 1000);
}

function zmienKolorTekstu() {
    var elem = document.getElementById("my_box");
    if (elem.style.color == 'red') {
        elem.style.color = 'blue';
    } else {
        elem.style.color = 'red';
    }
}

function zatrzymajZmianeKoloru() {
    clearInterval(idInterwalu);
}

//Workers
var fibonacciStart = document.querySelector('#fibonacciStart');
var fibonacciStop = document.querySelector('#fibonacciStop');
var fibonacciIteration = 0;
var fibonacciResults = [0, 1];
var fibonacciInterval;

var primeStart = document.querySelector('#primeStart');
var primeStop = document.querySelector('#primeStop');
var primeIteration = Number(0);
var lastPrime = Number(0);
var primeInterval;

var result = document.querySelector('.result');
var result1 = document.querySelector('.result1');

if (window.Worker) { // Check if Browser supports the Worker api.
    // Requries script name as input
    //var myWorker = new Worker("assets/webworkers/js/worker.js");
    var myWorker;
    var myWorker1;

    // onkeyup could be used instead of onchange if you wanted to update the answer every time
    // an entered value is changed, and you don't want to have to unfocus the field to update its .value

    //fibonacci
    fibonacciStart.onclick = function() {
        if (myWorker == undefined) {
            startWorkerFib();
            console.log('Message posted to worker');
        }
    };

    fibonacciStop.onclick = function() {
        if (myWorker1 != undefined) {
            stopWorkerFib();
            console.log('Worker terminated');
        }
    };

    fibonacciIterate = function() {
        console.log('Posting ' + fibonacciIteration);
        myWorker.postMessage([fibonacciIteration, fibonacciResults]);
        myWorker.onmessage = function(e) {
            result.innerHTML = e.data[0] + '<br />for: ' + fibonacciIteration;
            fibonacciIteration++;
            fibonacciResults = e.data[1];
            console.log('Message received from worker');
        };
    };

    startWorkerFib = function() {
        if (typeof(Worker) !== "undefined") {
            if (typeof(myWorker) == "undefined") {
                myWorker = new Worker("assets/webworkers/js/worker.js");
                fibonacciInterval = setInterval(fibonacciIterate, 1000);
            }
        } else {
            document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Workers...";
        }
    }

    function stopWorkerFib() {
        myWorker.terminate();
        myWorker = undefined;
        clearInterval(fibonacciInterval);
    }

    //Prime
    primeStart.onclick = function() {
        if (myWorker1 == undefined) {
            startWorkerPrime();
            console.log('Message posted to worker1');
        }
    };

    primeStop.onclick = function() {
        if (myWorker1 != undefined) {
            stopWorkerPrime();
            console.log('Worker1 terminated');
        }
    };

    primeIterate = function() {
        console.log('Posting ' + primeIteration);
        myWorker1.postMessage([primeIteration, lastPrime]);
        myWorker1.onmessage = function(e) {
            result1.innerHTML = e.data[0];
            primeIteration++;
            lastPrime = e.data[1];
            console.log('Message received from worker1');
        };
    };

    startWorkerPrime = function() {
        if (typeof(Worker) !== "undefined") {
            if (typeof(myWorker1) == "undefined") {
                myWorker1 = new Worker("assets/webworkers/js/worker1.js");
                primeInterval = setInterval(primeIterate, 1000);
            }
        } else {
            document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Workers...";
        }
    }

    function stopWorkerPrime() {
        myWorker1.terminate();
        myWorker1 = undefined;
        clearInterval(primeInterval);
    }
}
