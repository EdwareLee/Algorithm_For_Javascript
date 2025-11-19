var removeDuplicates = (nums) => {
    if (nums.length === 0) return [];

    // 采用双指针的方式进行，快指针全局扫，慢指针一个个来
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i+1;
}