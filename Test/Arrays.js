/**
  @function QuickSort

  QuickSort implemented as a javascript function. Function is not pure, it changes the input array.
  It is a working quicksort implementation, but it is not optimized, it lacks a way of picking a effective pivot amongst other things.
  Now the middle element in each partition is chosen as pivot each time.

  Performance:
    -Worst case:

  @param {Array} array - The array that is going to be sorted. The input is changing.
  @return {Array} sortedArray - The sorted array

  @author Lars Erik Bratlie <lars00.brat@gmail.com>
**/
function testArray(array1,array2){
  if(array1.length!=array2.length)
    return false;
  for(var i = 0; i < array1.length; i++){
    if(array1[i] != array2[i]){
        return false;
    }
  }
  return true;
}
