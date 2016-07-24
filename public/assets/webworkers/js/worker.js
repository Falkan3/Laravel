//Worker
onmessage = function(e) {
    var i = Number(e.data[0]);
    var result;
    var fib = e.data[1];
    var workerResult;

    switch (i) {
        case 0:
            {
                result = 0;
                break;
            }
        case 1:
            {
                result = 1;
                break;
            }
        default:
            {
                fib[i] = fib[i - 1] + fib[i - 2];
                console.log(fib);
                result = fib[i];
                break;
            }
    }
    workerResult = ['Result: ' + result, fib];
    console.log('Posting message back to main script' + workerResult);
    postMessage(workerResult);
}
