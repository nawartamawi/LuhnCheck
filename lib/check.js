function check(ccNumber) {
    //converting Number to Array of strings
    var arr = ccNumber.toString().split("");
    //creating a weight array of [1,2] i.e. [4,4,6,7] ----> [2,1,2,1]
    console.log(arr);
    var weightArray = [];
    weightArray = arr.map(function(item, i) {
        if ( i % 2 === 0 ) {
            weightArray[i] = 2;
        } else {
            weightArray[i] = 1;
        }
        return weightArray[i];
    });
    // creating a result array that will contain the result of
    //(ccNumber at index) * (Weight at index)
    var resultArray = [];
    resultArray = arr.map(function(item, i) {
        var el = item * weightArray[i];
        if ( el > 9 ){
            resultArray = el - 9;
        } else {
            resultArray = el;
        }
        return resultArray;
    });
    //the sum of the resulted array
    var sum = resultArray.reduce(function(a, b){
        return a + b;
    });
    if (sum % 10 === 0){
        return true;
    } else {
        return false;
    }
}
module.exports = check;
