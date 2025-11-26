var maxArea = (height) => {
  let left = 0;
  let right = height.length - 1;
  let max = 0;

  while (left < right) {
    const currentMaxArea =
      (right - left) * Math.min(height[left], height[right]);
    max = Math.max(max, currentMaxArea);

    // 此处挪移的决定是，高的不挪，矮的挪，属于是贪心算法
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
};
