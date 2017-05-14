/**
  Binary search algorithm implemented in JavaScript.
  It is an interative implementation.
  For more information about the algorithm visist : @see {https://en.wikipedia.org/wiki/Binary_search_algorithm}

  Performance:
    Worst case: O(log(n)) + 1, where n is the number of elements in the array
    Best case:  O(1), constant time.

  @param {Object} value - The object to search for
  @param {Array} array - The array to search in.
  @return {Number} result - The index of the number, or -1 if not found
**/
function binarySearch(target, array){
    var low = 0;
    var high = array.length - 1;
    var middle = Math.round((high - low) / 2);
    var result = -1;
    
    while(high >= low){
      console.log(low, middle, high)
      if(target === array[middle]){
        result = middle;
        break;
      }
      else if(target > array[middle]){
        low = middle + 1;
        middle = low + Math.round((high - low) / 2);
      }
      else{
        high = middle - 1;
        middle = Math.round((high - low) / 2);
      }
    }
    return result;
}
