/**
  @function selectionSort

  Selectionsort implemented as a pure JavaScript function. Selection sort should not be used on large collection
  due to its poor performance.

  Performance:
    -Worst case: O(n^2)

  @param {Array} array - The array that is going to be sorted. The input array is not tampered with or changed in anyway
  @return {Array} sortedArray - The sorted array, it is worth noting that the input array is not the same as the sortedArray

  @author Lars Erik Bratlie <lars00.brat@gmail.com>
**/
function selectionSort(array){
  var sortedArray = array.slice(0);//copy array, ES6 spread operator will be used when I have configured babel transpiler
  for(var x = 0; x < sortedArray.length - 1; x++){
    var smallest = sortedArray[x];
    var smallest_index = x;
    for(var y = x + 1; y < sortedArray.length; y++){
      if(smallest > sortedArray[y]){
        smallest = sortedArray[y];
        smallest_index = y;
      }
    }
    sortedArray[smallest_index] = sortedArray[x];//Swapping the elements
    sortedArray[x] = smallest;
  }
  return sortedArray;
}
export default selectionSort;
