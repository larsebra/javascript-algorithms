import swap from "../Tool/Swap.js"
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
function quickSort(array){
  quickSortInternal(array, 0, array.length - 1);
}

function quickSortInternal(array, left, right){
  if((right - left) < 1)
    return;
  //partition
  var left_ptr = left,
      right_ptr = right,
      pivot = left + calcPivot(left, right),
      new_pivot = partition(array, left_ptr, right_ptr, pivot)
  //Calculate partition 1;
  var p1_left = left;
  var p1_right = new_pivot - 1;
  //Calculate partition 2;
  var p2_left = new_pivot + 1;
  var p2_right = right;
  quickSortInternal(array, p1_left, p1_right);//quickSort P1
  quickSortInternal(array, p2_left, p2_right);//quickSort P2
}

function calcPivot(left, right){
  return Math.ceil((right - left)/2)
}

function partition(array, left, right, pivot_index){
  //Partition
  var rightmost_ptr = right + 0;
  var pivot = array[pivot_index];
  while(left < right){
    while(array[left] < pivot){
      left++;
    }
    while(array[right] > pivot){
      right--;
    }
    swap(array, left, right);
    if(left === pivot_index){
      pivot_index = right;
      left++;
    }
    else if(right === pivot_index){
      pivot_index = left;
      right--;
    }
    else{
      left++;
      right--;
    }
  }
  return pivot_index;
}

export default quickSort;
