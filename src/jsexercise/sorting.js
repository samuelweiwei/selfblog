const arr=[192, 3, 23, 794, 41, 223, 109, 11, 19, 34, 76, 371, 299, 105, 167];

const quickSort1 = (arr)=>{
    if (arr.length < 2)
        return arr;
    let left = [];
    let equal = [];
    let right = [];
    const idx = Math.floor(Math.random()*arr.length);
    const pivot = arr[idx];
    for(let ele of arr){
        if (ele < pivot)
            left.push(ele);
        else if (ele > pivot)
            right.push(ele);
        else
            equal.push(ele);
    }

    return quickSort1(left).concat(equal).concat(quickSort1(right));
}

function quickSort2(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
      const pivotIndex = partition(arr, low, high);
      quickSort2(arr, low, pivotIndex - 1); // Sort left sub-array
      quickSort2(arr, pivotIndex + 1, high); // Sort right sub-array
    }
    return arr;
  }
  
  function partition(arr, low, high) {
    const pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
      if (arr[j] <= pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
  }
  
  function bubbleSort(arr){
    for(var i=0;i<arr.length;i++){
      for(var j=0;j<(arr.length-i-1);j++){
        if (arr[j]>arr[j+1]){
          [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        }
      }
    }
    return arr;
  }


  function insertSort(arr){
    for(var i=0;i<arr.length;i++){
      var t = arr[i];
      for(var j=i-1;(j>=0 && t<arr[j]);j--){
        arr[j+1]=arr[j];
      }
      arr[j+1]=t;
    }
    return arr;
  }

  function mergeSort(arr){
    if (arr.length < 2)
      return arr;
    var mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
  }
  function merge(left, right){
    let output = [];
    while(left.length && right.length){
      if (left[0]<right[0]){
        output.push(left.shift());
      }else{
        output.push(right.shift());
      }
    }
    return [...output, ...left, ...right];
  }

  console.log(mergeSort(arr));