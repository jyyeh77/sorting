function bubbleSort(arr){
  var swapped = true;
  while (swapped){
  	swapped = false;
  	for (var i = 0; i < arr.length; i++){
	    let temp = arr[i];
	    if (arr[i] > arr[i+1]){
	      arr[i] = arr[i+1];
	      arr[i+1] = temp;
		  swapped = true;
	    }
  	}
  }
  return arr;
}

function inOrder(array, index){
  if (index === array.length - 1) return true;
  return (array[index] < array[index+1]);
}

function mergeSort(arr){

  // arrays of length 1 are sorted already, so return them as is
  if (arr.length < 2){
    return arr;
  }

  // tries to divide array equally into sections
  var splitArray = split(arr);
  var firstArr = splitArray[0];
  var secondArr = splitArray[1];

  return merge(mergeSort(firstArr), mergeSort(secondArr));
}

function split(arr){
  var midpoint = Math.ceil(arr.length/2);
  var arrOne = arr.slice(0, midpoint);
  var arrTwo = arr.slice(midpoint);

  return [arrOne, arrTwo];
}

function merge(arrOne, arrTwo){
  var i = 0;
  var j = 0;
  var result = [];

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

// Testing optimization of sorts

for (var i = 9; i <= 15; i++) {
  var numItems = Math.pow(2, i);
  var nativeTestArray = [];

  for(var j = 0; j < numItems; j++) {
    var rand = Math.floor(Math.random() * numItems);
    nativeTestArray.push(rand);
  }

  var bTestArray = nativeTestArray.slice(0);
  var mTestArray = nativeTestArray.slice(0);

  console.time(numItems + ' native');
  nativeTestArray.sort(function(a, b){ return a - b; });
  console.timeEnd(numItems + ' native');

  console.time(numItems + ' bubble');
  bubbleSort(bTestArray);
  console.timeEnd(numItems + ' bubble');

  console.time(numItems + ' merge');
  mergeSort(mTestArray);
  console.timeEnd(numItems + ' merge');
}
