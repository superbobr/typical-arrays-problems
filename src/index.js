
exports.min = function min (array) {
  if (array === undefined || array.length === 0) {
      return 0;
  } else {
      let min = array[0];
      for (let number of array.slice(1, )) {
        if (number < min) {
            min = number;
        }
      }
      return min;
  }
}

exports.max = function max (array) {
    if (array === undefined || array.length === 0) {
        return 0;
    } else {
        let max = array[0];
        for (let number of array.slice(1, )) {
          if (number > max) {
              max = number;
          }
        }
        return max;
    }
}

exports.avg = function avg (array) {
    if (array === undefined || array.length === 0) {
        return 0;
    } else {
        let sum = 0;
        for (let number of array) {
            sum += number;
        }
        return sum / array.length;
    }
};
