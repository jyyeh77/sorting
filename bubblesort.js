function bubbleSort(array){
  for (var i = 0; i < array.length; i++){
    var currentIndex = array[i];
    var nextIndex = array[i+1];
    if (array[i+1] < array[i]){
      array[i] = nextIndex;
      array[i+1] = currentIndex;
    }
  }
  return array;
}



// function bubbleSort(arr){
//   var temp;
//   var swapped = false;
//   for (var i = 0; i < arr.length; i++) {
//     if(arr[i] > arr[i+1]){
//       swapped = true;
//       temp = arr[i];
//       arr[i] = arr[i+1];
//       arr[i+1] = temp;
//     }
//     if(!swapped){
//       return arr;
//     }
//   }
//   return arr;
// }
