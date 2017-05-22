/**
  @function compareArray

  Comparison function for testing wther two arrays are equal.

  @param {Array} array1
  @param {Array} array2
  @return {Boolean} True if the two input arrays are equal, else false.

  @author Lars Erik Bratlie <lars00.brat@gmail.com>
**/
function compareArray(array1,array2){
  if(array1.length!=array2.length)
    return false;
  for(var i = 0; i < array1.length; i++){
    if(array1[i] != array2[i]){
        return false;
    }
  }
  return true;
}

export default compareArray;
