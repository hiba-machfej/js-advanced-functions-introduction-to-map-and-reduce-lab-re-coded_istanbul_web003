// Your code here

function mapToNegativize(array) {
    const array2 = [];
    array.forEach(element => array2.push(element * -1));
    return array2;
}


function mapToNoChange(array) {
    const array2 = [];
    array.forEach(element => array2.push(element));
    return array2;
}

function mapToDouble(array) {
    const array2 = [];
    array.forEach(element => array2.push(element * 2));
    return array2;
}

function mapToSquare(array) {
    const array2 = [];
    array.forEach(element => array2.push(element * element));
    return array2;
}


function reduceToTotal(sourceArray, startingPoint = 0) {
    for (var i = 0; i < sourceArray.length; i++) {
        startingPoint += sourceArray[i];
    }
    return startingPoint;
}

function reduceToAllTrue(sourceArray) {
    if (sourceArray.includes(false) ) {
      return false;
    }
   else {
     return true;
   }
 }



 function reduceToAnyTrue(sourceArray) {
    if (sourceArray.includes(true) ) {
      return true;
    }
   else {
     return false;
   }
 }