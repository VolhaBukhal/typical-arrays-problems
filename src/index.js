
exports.min = function min (array) {
  if (!array || array.length == 0) {
    return 0;
  } else {

    let minNumber = array[0];
    for(el of array) {
      if (el< minNumber) {
        minNumber = el;
      }
    }
    return minNumber;
  }
}

exports.max = function max (array) {
  if (!array || array.length == 0) {
    return 0;
  } else {
    let maxNumber = null;
    for (el of array) {
      if (el > maxNumber){
        maxNumber = el;
      }
    }
    return maxNumber;
  }
 
}

exports.avg = function avg (array) {
  if (!array || array.length ==0 ) {
    return 0
  } else {
    let sum = 0;
    for (el of array) {
      sum += el;
    }
    return sum/array.length;
  }

}
