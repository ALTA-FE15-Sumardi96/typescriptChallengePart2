function findMaxSumSubArray(k: number, arr: number[]): number {
    if (k <= 0 || k > arr.length) {
      throw new Error("Invalid input. 'k' should be a positive number and less than or equal to the array length.");
    }
  
    let maxSum = 0;
    let currentSum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      currentSum += arr[i];
  
      if (i >= k - 1) {
        maxSum = Math.max(maxSum, currentSum);
        currentSum -= arr[i - (k - 1)];
      }
    }
  
    return maxSum;
  }
  
  console.log(findMaxSumSubArray(3, [2, 1, 5, 1, 3, 2])); // Output: 9
  console.log(findMaxSumSubArray(2, [2, 3, 4, 1, 5]));    // Output: 7
  console.log(findMaxSumSubArray(2, [2, 1, 4, 1, 1]));    // Output: 5
  console.log(findMaxSumSubArray(3, [2, 1, 4, 1, 1]));    // Output: 7
  console.log(findMaxSumSubArray(4, [2, 1, 4, 1, 1]));    // Output: 8
  