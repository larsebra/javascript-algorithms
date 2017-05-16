/**
  @function MergeSort

  MergeSort implemented as a pure javascript function. Mergesort is fast for many purposes.

  Performance:
    -Worst case: O(nlog(n))

  @param {Array} array - The array that is going to be sorted. The input array is not tampered with or changed in anyway
  @return {Array} sortedArray - The sorted array, it is worth noting that the input array is not the same as the sortedArray

  @author Lars Erik Bratlie <lars00.brat@gmail.com>
**/
function mergeSort(array){
  console.log(array);

  //Base case
  if(array.length === 1){
    return array;
  }

  //Divide
  var middle = Math.floor(array.length / 2);
  var a1 = array.slice(0, middle);
  var a2 = array.slice(middle, array.length);

  //Divide further
  var na1 = mergeSort(a1);
  var na2 = mergeSort(a2);

  //Merge
  var sortedArray = [];
  while((na1.length > 0) && (na2.length > 0)){
    if(na1[0] > na2[0]){
      sortedArray.push(na2.shift())
    }
    else if(na1[0] < na2[0]){
      sortedArray.push(na1.shift())
    }
    else{
      sortedArray.push(na2.shift())
      sortedArray.push(na1.shift())
    }
  }
  while(na1.length > 0){
    sortedArray.push(na1.shift())
  }
  while(na2.length > 0){
    sortedArray.push(na2.shift())
  }
  return sortedArray;
}
