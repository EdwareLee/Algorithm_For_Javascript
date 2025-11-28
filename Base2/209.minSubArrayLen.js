const minSubArrayLen = (target, nums) => {
  const n = nums.length;
  let minLen = Infinity;
  let sum = 0;
  let left = 0;

  for (let right = 0; right < n; right++) {
    sum += nums[right];

    while (sum >= target) {
        const currentLen = right - left + 1;
        minLen = Math.min(minLen,currentLen);
        // 此时已经达到本组的最小长度了，所以需要左指针右移动来匹配
        sum -= nums[left]; 
        left++;
    }
    
  }
  return minLen === Infinity ? 0 : minLen;
};

/**
 * 1.滑动窗口
 * 2.左右指针
 * 3. 情况1:长度为1，并且刚好nums=target
 * 情况2:长度>1 -- 并且里面刚好有数组加起来等于target的值，返回length
 * 情况3:长度>1 -- 没有和等于target，返回0
 * 4.采用滑动窗口的方式进行，本题需要定义左指针和右指针进行扩展
 */
