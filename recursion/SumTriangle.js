// Sum Triangle from an array
// Problem link: https://www.geeksforgeeks.org/sum-triangle-from-array/
// Difficulty level: Easy

function sumTriangle(arr) {
  if(arr.length <= 1) {
    console.log(arr);
    return;
  } 
  let result=[];
  for(let m=0;m+1<arr.length;m++) {
    result.push(arr[m]+arr[m+1]);
  }
  sumTriangle(result);
  console.log(arr);
}

// sumTriangle([1,2,3,4,5]) ==> 48
// sumTriangle([1,2,3,4,5,6]) ==> 112
// sumTriangle([1,2,3,4,5,6,7,8]) ==> 576
