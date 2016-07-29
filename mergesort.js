function mergeSort(arr){

  // arrays of length 1 are sorted already, so return them as is
  if (arr.length < 2){
    return arr;
  }

  // tries to divide array equally into sections
  var midpoint = Math.ceil(arr.length/2);
  var arrOne = arr.slice(0, midpoint);
  var arrTwo = arr.slice(midpoint);

  return merge(mergeSort(arrOne), mergeSort(arrTwo));
}

function merge(arrOne, arrTwo){
  var i = 0;
  var j = 0;
  var result = [];

  //console.log('ArrayOne to be sorted: ');
  //console.log(arrOne);
  //console.log('ArrayTwo to be sorted: ');
  //console.log(arrTwo);

  // iterates through each array, sorts accordingly into result array
  while (i < arrOne.length && j < arrTwo.length){
  	if (arrOne[i] <= arrTwo[j]){
  		result.push(arrOne[i++]);
  	}
  	else {
  		result.push(arrTwo[j++]);
  	}
  }

  // accounts for leftover numbers in either array One or array Two
  if (i < arrOne.length){
  	result = result.concat(arrOne.slice(i));
  }
  if (j < arrTwo.length){
  	result = result.concat(arrTwo.slice(j));
  }

  //console.log("Sorted result is")
 //console.log(result);
  return result;
}
