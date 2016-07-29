function mergeSort(arr){
  if (arr.length < 2){
    return arr;
  }

  var midpoint = arr.length/2;
  var arrOne = arr.slice(0, midpoint);
  var arrTwo = arr.slice(midpoint);

  mergeSort(arrOne);
  //console.log("Starting right half")
  mergeSort(arrTwo);




}

function merge(arrOne, arrTwo){
  var i = 0;
  var j = 0;
  var k = 0;

  var result = [];

  while (i < arrOne.length && j < arrTwo.length){
  	if (arrOne[i] <= arrTwo[j]){
  		result.push(arrOne[i++]);
  		k++;
  	}
  	else {
  		result.push(arrTwo[j++]);
  		k++;
  	}
  }
  console.log(i);
  console.log(j);
  if (i < arrOne.length){
  	result = result.concat(arrOne.slice(i));
  }
  if (j < arrTwo.length){
  	result = result.concat(arrTwo.slice(j));
  }
  return result;
}
