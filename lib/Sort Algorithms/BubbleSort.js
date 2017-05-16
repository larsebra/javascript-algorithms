/**
  @function bubbleSort

  Bubblesort implemented as a pure JavaScript function. The bubblesort should not be used on large collection
  due to its worst case performance.

  Performance:
    -Worst case: O(n^2)

  @param {Array} array - The array that is going to be sorted. The input array is not tampered with or changed in anyway
  @return {Array} sortedArray - The sorted array, it is worth noting that the input array is not the same as the sortedArray

  @author Lars Erik Bratlie <lars00.brat@gmail.com>
**/
function bubbleSort(array){
  var sortedArray = array.slice(0);//copy array, ES6 spread operator will be used when I have configured babel transpiler
  for(x = sortedArray.length - 1; x > 0; x--){
    for(y = 0; y < x; y++){
      var el1 = sortedArray[y];
      var el2 = sortedArray[y + 1];
      if(el1 > el2){//Swap
        var temp = el2;
        sortedArray[y + 1] = el1;
        sortedArray[y] = temp;
      }
    }
  }
  return sortedArray;
}
